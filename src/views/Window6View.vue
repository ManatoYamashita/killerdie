<template>
    <div class="w6" id="w6">
      <h2>エクスプローラ</h2>
      <img src="src/assets/window.PNG" alt="window" class="window">
    </div>
</template>
  
<style scoped>
div#w6 {
    position: relative;
    top: 0;
    left: 5%;
}
h2, img.window {
    width: 70%;
}

@media screen and (max-width: 480px) {
    div#w6, h2, img.window {
    font-size: medium;
    width: 90%;
    }
}
</style>
  