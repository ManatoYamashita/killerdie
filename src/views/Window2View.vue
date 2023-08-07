<template>
    <div class="w2">
      <article>
          <div class="content c1">
              <h3>キラ大とは？</h3>
              <p>
                キラ大(東京都市大学キラキラ大学生研究会)とは、2022年7月ごろ、数人の児童学科3年生達によって、コスメ研究やカフェ巡りといった「キラキラな大学生」っぽいことを
                行うために結成された本学非公認の研究会として第一回説明会を行いましたが、不純な出会いを目的とした新入会員達の問題や、聖乳くるみ(現会長)とHimeka(現副会長)の二人と、他幹部間での意見の相違などから分派。
                しばらく、Twitterの更新のみの活動でしたが、会長の才能に興味を持った匿名希望下マナトの入会により再構成、本格的に活動を開始。現在のキラ大となりました。
              </p>
          </div>
          <div class="content c2">
              <h3>Informationセンター（2023.07現在）</h3>
              <ul>
                <li><strong>会員数</strong>: 12+1匹 (男:女 = 7:5)</li>
                <li><strong>結成</strong>: 2022.07ごろ、児童学科3年生らによって結成</li>
                <li><strong>活動場所・聖地</strong>: オンライン、コメダ、Starbacks、ニャン楼、山下ヤラセハウス、等々力キャンパス、綱島、サンリオピューロランド、にゃくパ、西オーストラリア</li>
                <li><strong>関連団体</strong>: 帝都グループ(株)、デジタルコンテンツ研究会、ISO学生委員会、児童学科、マジの環境学部、Sanrio、トレ大、五島育英会</li>
                <li><strong>傘下組織</strong>: キラ大Prog班(旧キラ大タンブラー部)、キラ大省資源部会(旧キラ大タンブラー部)、ゆるゆるペロトゥーン、夢キャン、arte、鶯谷大学、その他キラキラ部活動、その他支部</li>
                <li><strong>関連キャラクタ</strong>: ミルク、シナクソ、がおぱわるぅ、モモンガ、マナン、でじこんちゃん、聖乳くるみ、ニャンニャン老師、ニョキ、懲罰房、3分、しんや、メ、品性、ビッグボス、さくらだもん、むぎゅ、せさん</li>
              </ul>
            </div>
      </article>
    </div>
</template>

<style scoped>
    div.w2 {
        background-image: url("@/assets/window.PNG");
        background-size: 90%;
        background-position: initial;
        background-repeat: no-repeat;
        width: 95%;
        height: 95%;
        padding: 8% 3% 3% 3%;
        max-width: 700px;
    }
    article {
        font-size: 1vw;
        padding: 2%;
        margin: 2%;
        width: 60vw;
        max-width: 690px;
        display: flex;
    }
    .content {
        width: 45%;
        margin: 1%;
        padding-top: 1.5%;
    }
    .c1 {
        padding-left: 2%;
    }
    .c2 {
        padding-right: 15%;
    }
    .c2 ul {
      margin: 2% 5% 5% 5%;
      padding-left: 5%;
    }
    p {
        font-size: 1vw;
        padding: 5% 5% 2% 0;
    }
    li {
      padding: 2px;
      font-size: .7vw;
    }
    strong {
        font-size: 1.0vw;
        font-weight: bold;
    }

    @media screen and (max-width: 520px) {
        div.w2 {
            width: 90%;
        }
        article ul li {
            font-size: 1vw;
        }
    }
</style>
