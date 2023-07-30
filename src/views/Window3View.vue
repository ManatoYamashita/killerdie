<template>
    <div class="w3" id="w3">
      <h2>ゴミ箱</h2>
      <img src="src/assets/window.PNG" alt="window" class="window">
    </div>
</template>
  
<style scoped>
    div#w3 {
        position: relative;
        top: 30%;
        left: 20%;
    }
    h2, div img.window {
        width: 40%;
    }

    @media screen and (max-width: 480px) {
        div#w3, h2, img.window {
        font-size: medium;
        width: 90%;
        }
    }
</style>
  