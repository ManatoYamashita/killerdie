<script setup></script>

<template>
  <header>
    <img src="../src/assets/power.svg" alt="power" id="power">
  </header>
  
  <main>
    <div id="apps">
      <ul>
        <li><router-link to="/"><img src="@/components/icons/milk.svg" alt="milk" class="icons"></router-link></li>
        <li><router-link to="w2"><img src="@/components/icons/internet.svg" alt="internet" class="icons"></router-link></li>
        <li><router-link to="w3"><img src="@/components/icons/dustbox.svg" alt="dustbox" class="icons"></router-link></li>
        <li><router-link to="w4"><img src="@/components/icons/mail.svg" alt="mail" class="icons"></router-link></li>
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
    <small id="small">©️2023 東京都市大学キラキラ大学生研究会(TCU KillerDie) /&nbsp; Design: 聖乳くるみ・匿名希望下マナト / Code: Manato Yamasahita</small>

    <img src="@/assets/bottom-var.svg" alt="footer" id="footer-back">
    <button id="button-start" class="button"><router-link to="w5"><img src="@/assets/start.svg" alt="buuton-start"></router-link></button>
    <button id="button-exp" class="button"><router-link to="w6"><img src="@/assets/explorer.svg" alt="button-explorer"></router-link></button>
    <p id="time">{{ currentTime }} <br>
    </p>
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
  width: 80px;
  object-fit: cover;
  display: block;
  margin: 1rem;
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
  height: 70vh;
}

footer {
  line-height: 1.5;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
}
footer img#footer-back {
  position: relative;
  bottom: -30px;
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
  width: 75px;
  object-fit: cover;
  display: block;
}
footer button#button-exp {
  position: absolute;
  bottom: 0;
  left: 120px;
  margin: .5rem;
}
footer button#button-exp img {
  width: 100px;
  object-fit: cover;
  display: block;
}

footer p#time{
  position: absolute;
  bottom: 0;
  right: 1rem;
  margin: 1rem 2rem 1rem 1rem;
  font-weight: bold;
  font-size: large;
  text-align: right;
}
#small {
  position: relative;
  top: 10%;
  font-size: x-small;
  letter-spacing: 0;
  color: rgb(175, 91, 105);
  padding-right: 1rem;
  float: right;
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
  footer img#footer-back {
    bottom: 0;
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
  small#small {
    font-size: xx-small;
    color: pink;
  }
  footer button#button-start img {
    width: 60px;
  }
}

</style>
