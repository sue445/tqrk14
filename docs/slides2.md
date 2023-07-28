## Dockerfile
```dockerfile
FROM ruby:alpine3.18 as ruby-builder

ENV RUBY_VERSION 3.3.0-dev

# ref. https://github.com/rbenv/ruby-build/wiki#alpine-linux
RUN apk add build-base gcc6 patch bzip2 libffi-dev openssl-dev ncurses-dev gdbm-dev zlib-dev readline-dev yaml-dev

# other requirements
RUN apk add bash git autoconf

RUN wget https://github.com/rbenv/ruby-build/archive/refs/heads/master.zip -O /tmp/ruby-build-master.zip && \
    cd /tmp && \
    unzip ruby-build-master.zip && \
    rm -f ruby-build-master.zip && \
    PREFIX=/usr/local/ruby-build ./ruby-build-master/install.sh

RUN /usr/local/ruby-build/bin/ruby-build ${RUBY_VERSION} /usr/local/ruby-head

FROM alpine:3.18

# runtime dependencies
RUN apk add --no-cache gcc6 bzip2 libffi-dev openssl-dev ncurses-dev gdbm-dev zlib-dev readline-dev yaml-dev

COPY --from=ruby-builder /usr/local/ruby-head /usr/local/ruby-head

ENV PATH /usr/local/ruby-head/bin:$PATH

RUN gem install --no-doc rubicure

ENTRYPOINT ["irb", "-rubicure"]
```

---
## 今後の展望 (v4)
* Girlを使うのをやめる
  * `#girls` -> `#members`
  * `Precure.all_girls` -> `Precure.all_members`
  * `Rubicure::Girl` -> `Rubicure::Human` (?)
* 理由：今期のプリキュアで男性プリキュアが出てきたため
* https://github.com/sue445/rubicure/issues/284

---
# 【基調講演用】今回のアーキテクチャについて
だいたい10枚くらい

---
## 発表スライド
* GitHub Pages: https://sue445.github.io/tqrk14/
* reveal.js: https://revealjs.com/
  * markdownからいい感じにスライドを作れて便利
  * 「発表スライド上でrubicureを動かす」という明確な目的があったので、HTMLでスライドを書けるreveal.jsを採用した

---
## rubicure-playground
* https://github.com/sue445/rubicure-playground
* Ruby
* sinatra
* Cloud Run
* Ace Editor: https://ace.c9.io/

---
## 仕組み
1. エディタに任意コードを入力してサーバサイド(Cloud Runのsinatra app)にPOST
2. POSTされたRubyのコードをsinatraで実行して、実行結果を標準出力をいい感じにキャプチャする
3. サーバサイドから返された結果をフロントエンドで1行ずつそれっぽく表示

---
## 頑張ったポイント
* スライド埋め込みに使いやすいように入力済みのコードやフォントサイズなどをパラメータで渡せるようにした

---
## irbicure
* https://github.com/ktock/container2wasm (c2w)を用いて、Dockerイメージをwasmに変換
* wasmをjsで実行している
* https://ktock.github.io/container2wasm-demo/ のサンプルコードを参考にブラウザでirbを動かせるようにした

---
## vs ruby.wasm, irb.wasm
* Dockerイメージを使ってるのでruby.wasmやirb.wasm( https://github.com/kateinoigakukun/irb.wasm )とは違う仕組みで動いてる

---
## Pros
* Dockerイメージに好きなgemを入れて配布できる
  * 現状ruby.wasmでは3rd party製のgemが簡単に使えないので便利〜
  * ref. https://rubykaigi.org/2023/presentations/ledsun.html#day3

---
## Cons 1: c2wのビルドが遅い
* GitHub Actions上でruby:alpine(70MBくらい)のイメージをwasmに変換するのに20〜30分くらいかかる
  * docker buildは一瞬で終わる
* v0.3.0時点でlinux版のバイナリしかないしMacでbuildしてもうまく動かなかったのでCI上のLinuxのRunnerでbuildするのがよさそう

---
## Cons 2: wasmのサイズがデカい
* ruby:alpine(70MBくらい)だとwasmは170MBくらい
* １ファイル100MB超えるとGitHubにpushできなくて地味に面倒
* このファイルサイズをブラウザで一気にDLさせるのもつらいので50MBずつに分割コミットしている
* irbicureでは「docker build -> c2w -> wasmをファイル分割 -> PR投げる」をGitHub Actionsで実装した

---
## Cons 3: ブラウザ上でのコンテナの起動が遅い
* 起動で40秒くらいかかる
  * ローカルで動かした時の時間なのでwasmファイルのDL時間は含まれない
* ブラウザ上で使えるスーパー電卓として普段使いするのは厳しい

---
## まとめ
* 早く3rd party製のgemがruby.wasmで手軽に使えるようになってほしいですね
