<template>
    <div class="w5" id="w5">
      <h2>スタート</h2>
      <h3>Comming Soon...</h3>
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

    @media screen and (max-width: 520px) {
        div.w5 {
            width: 90%;
        }
        article ul li {
            font-size: 1vw;
        }
    }
</style>
  