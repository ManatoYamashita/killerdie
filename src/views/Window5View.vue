<template>
    <div class="w5" id="w5">
      <h2>スタート</h2>
      <img src="src/assets/window.PNG" alt="window" class="window">
    </div>
</template>
  
<style scoped>
    div#w5 {
        position: relative;
        top: 0;
        left: 5%;
    }
    h2, .window {
        width: 70%;
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
  