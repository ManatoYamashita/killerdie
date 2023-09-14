<template>
    <div class="w6" id="w6">
        <article>
            <h2>エクスプローラ</h2>
            <h3>2023年 キラ大1周年!</h3>
            <p>Under Consrtraction...</p>
            <img src="@/assets/kaicho.jpeg" alt="キラ大会長(ロリ)、可愛い" class="rorikaicho">
        </article>
    </div>
</template>
  
<style scoped>
    div.w6 {
        width: 80%;
    }
    article {
        font-size: 1vw;
        padding: 2%;
        margin: 2%;
    }
    img {
        width: 20%;
        padding-top: 7%;
        filter: blur(5px);
    }
h2, img.window {
    width: 30%;
}

@media screen and (max-width: 520px) {
        div.w6 {
            width: 90%;
        }
        article ul li {
            font-size: 1vw;
        }
    }
</style>
  