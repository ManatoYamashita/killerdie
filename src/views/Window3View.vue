<template>
    <div class="w3">
      <article>
          <div class="content c1">
              <h3>祝！キラ大1周年‼️</h3>
              <img id="logo" src="@/assets/logo.svg" alt="logo">
              <p>
                キラ大は2023年7月をもって1周年です。私たちはあの頃よりも少しだけ、キラキラ大学生になれたかな。キラ大の1年を振り返ってみましょう。
              </p>
              <img class="images" id="image1" src="@/assets/1.jpeg" alt="キラ大集会">
              <img class="images" id="image2" src="@/assets/2.jpeg" alt="おかげあん">
              <img class="images" id="image3" src="@/assets/3.jpeg" alt="オーストラリア支部">
              <img class="images" id="image4" src="@/assets/4.jpeg" alt="会長">
              <img class="images" id="image6" src="@/assets/6.jpeg" alt="what we have?">

          </div>
          <div class="content c2">
            <h3>キラ大の1年間(2022)</h3>
              <ul>
                <li><strong>7月</strong>: キラ大発足。第一回説明会</li>
                <li><strong>8月</strong>: 内部分裂。トレ大と分派</li>
                <li><strong>9月</strong>: 潜伏期間。Twitter活発化</li>
                <li><strong>10月</strong>: 匿名希望下マナト、はゆ入会。（3分も入会）</li>
                <li><strong>11月</strong>: 再スタート。第一回目の活動を横浜市で行う。/ 門馬犬一回目の退会 / あきやまそら入会 / 帝都交通入会 / 方針がある程度固まる。</li>
                <li><strong>12月</strong>: TCU Advent Calender2022に参加。 / 春水堂で集まる。 / ３分と開戦。3分退会 / プラットフォームをLINEからDiscordに。</li>
                <li><strong>1月</strong>: にゃんにゃん老師入会 / 門馬犬、会長、あきやまそら誕生日サプライズ</li>
                <li><strong>2月</strong>: 匿名希望下マナト、はゆ留学。オーストラリア支部発足、くら寿司、表参道</li>
                <li><strong>3月</strong>: おかげ庵</li>
                <li><strong>4月</strong>: ??? 忘れた / 俺の誕生日 / スイパラ集会</li>
                <li><strong>5月</strong>: オーストラリアから帰国。 / はゆ生誕祭 / 初めての違反者はゆまな</li>
                <li><strong>6月</strong>: ??? 忘れた / まめだif入会？ / たなげんkickbase</li>
                <li><strong>7月</strong>: 祝一周年！ / そらくる / エルマーの冒険展 / 金沢フェス</li>
              </ul>
          </div>
      </article>
    </div>
</template>
  
<style scoped>
    div.w3 {
        background-image: url("@/assets/window.PNG");
        background-size: 90%;
        background-position: initial;
        background-repeat: no-repeat;
        width: 90%;
        height: 90%;
        padding: 8% 3% 3% 3%;
        max-width: 700px;
    }
    article {
        font-size: 1.2vw;
        padding: 2%;
        margin: 2%;
        display: flex;
    }
    .content {
        margin: 1%;
        padding-top: 1.3%;
    }
    .c1 {
        padding-left: 2%;
        width: 37%;
    }
    .c2 {
        padding-right: 15%;
    }
    img#logo {
        width: 70%;
        padding: 0;
        margin: 0;
    }
    p {
        font-size: .8vw;
        padding: 5% 5% 2% 5%;
    }

    ul {
        padding-inline-start: 2rem;
    }
    li {
    padding: 2px;
    font-size: .7vw;
    }
    strong {
        font-size: 1vw;
        font-weight: bold;
    }
    img.images {
        width: 40%;
        margin: 1%;
    }

    @media screen and (max-width: 520px) {
        div.w2 {
            width: 100%;
        }
        article ul li {
            font-size: 1vw;
            padding: 1px;
        }
        .content {
            padding-top: 5%;
        }
        ul {
        padding-inline-start: 0;
    }
    }
</style>