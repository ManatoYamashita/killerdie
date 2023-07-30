<script setup></script>

<template>
  <header>
    <img src="src/assets/power.PNG" alt="power" id="power">
  </header>
  
  <main>
    <div id="apps">
      <ul>
        <li><router-link to="/"><img src="src/components/icons/milk.PNG" alt="milk" class="icons"></router-link></li>
        <li><router-link to="w2"><img src="src/components/icons/internet.PNG" alt="interner" class="icons"></router-link></li>
        <li><router-link to="w3"><img src="src/components/icons/dustbox.PNG" alt="dustbox" class="icons"></router-link></li>
        <li><router-link to="w4"><img src="src/components/icons/mail.PNG" alt="mail" class="icons"></router-link></li>
      </ul>
    </div>

      <div id="desktop">
        <router-view v-slot="{ Component }">
          <transition name="scale" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>

  </main>

  <footer>
    <img src="src/assets/bottomvar.PNG" alt="footer" id="footer-back">
    <button id="button-start" class="button"><router-link to="w5"><img src="src/assets/button-start.PNG" alt="buuton-start"></router-link></button>
    <button id="button-exp" class="button"><router-link to="w6"><img src="src/assets/button-exploler.PNG" alt="button-explorer"></router-link></button>
    <p id="time">{{ currentTime }}</p>
  </footer>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const currentTime = ref(
      new Date().getHours() +
        ':' +
        new Date().getMinutes()
    );
    setInterval(() => {
      currentTime.value =
        new Date().getHours() +
        ':' +
        new Date().getMinutes();
    }, 1000);

    return {
      currentTime,
    };
  },
};
</script>

<style scoped>
header {
  line-height: 1.5;
  position: absolute;
  top: 0;
  right: 0;
}
header img#power {
  width: 100px;
  object-fit: cover;
  display: block;
  margin: 1rem;
}

main div#apps {
  height: 100vh;
}

ul {
  padding: 0;
}
div#apps ul li img.icons, div#apps ul li {
  width: 70px;
  margin: 5px;
  list-style-type: none;
}

div#desktop {
  padding: 2%;
  z-index: 1;
  position: absolute;
  top: 5%;
  left: 15%;
  width: 85%;
  height: 90vh;
}

footer {
  line-height: 1.5;
  position: absolute;
  bottom: 0;
  right: 0;
}
footer img#footer-back {
  position: relative;
  bottom: 0;
  right: 1%;
  width: 103%;
  object-fit: cover;
  display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
}
footer button#button-start {
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 1rem;
}
footer button#button-start img {
  width: 100px;
  object-fit: cover;
  display: block;
}
footer button#button-exp {
  position: absolute;
  bottom: 0;
  left: 120px;
  margin: 1rem;
}
footer button#button-exp img {
  width: 140px;
  object-fit: cover;
  display: block;
}

footer p#time{
  position: absolute;
  bottom: 0;
  right: 1rem;
  margin: 1rem;
  font-weight: bold;
  font-size: large;
}

@keyframes scale {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.scale-enter-active {
  animation: scale 0.2s;
}
.scale-leave-active {
  animation: scale 0.2s reverse;
}

@media screen and (max-width: 480px) {
  div#apps ul li img.icons, div#apps ul li, header img#power {
    width: 50px;
    margin: 2px;
  }
  footer button#button-exp img, footer button#button-start img, footer p#time {
    width: 80px;
    margin: 0;
  }
  div#desktop {
    position: absolute;
    top: 40%;
    height: 50vh;
  }
}

</style>
