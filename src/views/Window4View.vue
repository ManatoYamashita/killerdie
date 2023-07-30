<template>
    <div class="w4" id="w4">
      <h2>メール</h2>
      <img src="src/assets/window.PNG" alt="window" class="window">
    </div>
  </template>
  
<style scoped>
    div#w4 {
        position: relative;
        top: 30%;
        left: 25%;
    }
    h2, div img.window {
        width: 50%;
    }

    @media screen and (max-width: 480px) {
        div#w4, h2, img.window {
        font-size: medium;
        width: 90%;
        }
    }
</style>
  