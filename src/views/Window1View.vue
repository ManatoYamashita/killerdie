<template>
  <main>
    <div id="w1" class="w1">
      <img src="@/assets/window-iino.svg" alt="window" class="window">
    </div>
  </main>
</template>

<style scoped>
  div#w1 {
    position: relative;
    top: 5%;
    left: 20%;
  }
  div img.window {
    width: 40%;
  }
  @media screen and (max-width: 480px) {
    div#w1, img.window {
      font-size: medium;
      width: 90%;
    }
  }
</style>
