<template>
    <div class="w5" id="w5">
      <h2>スタート</h2>
      <h3>Comming Soon...</h3>
      <p>このサイトはキラ大1周年を記念して制作されたWebサイトです。デザインは本研究会会長がデザインした「<a href="https://twitter.com/killerDie_/status/1647972629868085248?s=20">このTweet（x.com）</a>」
        を参考に、本研究会員の匿名希望下マナトがコーディングしています。なお、当サイトはまだ未完成となっています。
        内容はキラキラ大学生研究会で校閲した上で、徐々に皆さんと作っていきたいと考えています。
    </p>
    <p>
        2023/07/29 : 匿名希望下
    </p>

      <img src="@/assets/5.jpeg" alt="window" class="window">
      <img src="@/assets/logo.svg" alt="logo" class="logo" style="width: 30%;">
    </div>
</template>
  
<style scoped>
    div#w5 {
        position: relative;
        top: 0;
        left: 5%;
    }
    h2, .window {
        width: 50%;
    }
    p {
        width: 50%;
    }

    @media screen and (max-width: 520px) {
        div.w5 {
            width: 90%;
        }
        article ul li {
            font-size: 1vw;
        }
    }
</style>
  