<template>
  <div class="w2" id="w2">
    <h2>インターネット</h2>
    <img src="src/assets/window.PNG" alt="window" class="window">
  </div>
</template>

<style scoped>
  div#w2 {
    position: relative;
    top: 0;
    left: 5%;
  }
  h2, .window {
    width: 50%;
  }
  @media screen and (max-width: 480px) {
    div#w2, h2, img.window {
      font-size: medium;
      width: 90%;
    }
  }
</style>
