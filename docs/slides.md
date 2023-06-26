# rubicure 10th Anniversary
TokyuRuby会議14

@sue445

---
## 自己紹介
@sue445

![sue445](img/sue445.png)

---
## RubyKaigi 2023 Speaker 💎
![rubykaigi2023](img/rubykaigi2023.jpg)

---
## 今日話すこと
* これまでのrubicure
* これからのrubicure

---
## h2
* text

---
## h2
* text

---
## h2
* text

---
## h2
* text

---
## h2
* text

---
## h2
* text

---
## h2
* text

---
## h2
* text

---
## h2
* text

---
# ここから先は基調講演用
* LT王になったらこの発表スライドのアーキテクチャや裏話を基調講演で話します

---
## rubicure-playground
* https://github.com/sue445/rubicure-playground
* Ruby
* sinatra
* Cloud Run
* Ace Editor(コード入力部分)
  * https://ace.c9.io/

---
## 仕組み
1. エディタに入力してサーバサイド(Cloud Runのsinatra app)にPOST
2. POSTされたRubyのコードをsinatraで実行して、実行結果を標準出力をいい感じにキャプチャする
3. サーバサイドから返された結果をフロントエンドで1行ずつそれっぽく表示

---
## h2
* text

---
## playground (local)
<iframe class="playground" src="http://localhost:9292/play?editor_height=8em&font_size=24&input=puts%201%20%2B%202">
</iframe>

---
## playground (server)
<iframe class="playground" src="https://rubicure-playground-lczknh2o4a-an.a.run.app/play?editor_height=8em&font_size=24&input=puts%201%20%2B%202">
</iframe>
