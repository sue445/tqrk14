## Dockerfile
```dockerfile
FROM ruby:3.3-rc-alpine

RUN gem install --no-doc rubicure

ENTRYPOINT ["irb", "-rubicure"]
```

---
# ここから先は基調講演用
* LT王になったらこの発表スライドのアーキテクチャや裏話を基調講演で話します

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
* Dockerイメージを使ってるのでruby.wasmやirb.wasm( https://github.com/kateinoigakukun/irb.wasm )とは根本的に違う仕組みで動いてる

---
## Pros
* Dockerイメージに好きなgemを入れて配布できる
  * 現状ruby.wasmでは3rd party製のgemが簡単に使えないので便利〜

---
## Cons 1: c2wのビルドが遅い
* GitHub Actions上でruby:alpine(70MBくらい)のイメージをwasmに変換するのに20〜30分くらいかかる

---
## Cons 2: wasmのサイズがデカい
* ruby:alpine(70MBくらい)だとwasmは170MBくらい
* 100MB超えるとGitHubにコミットできなくて地味に面倒
* このファイルサイズをブラウザでDLさせるのもつらいので50MBずつに分割コミットしている
* irbicureでは「docker build -> c2w -> wasmをファイル分割 -> PR投げる」をGitHub Actionsで実装した

---
## Cons 3: ブラウザ上でのコンテナの起動が遅い