<template>
  <div class="player" ref="player">
    <div></div>
  </div>
</template>

<script setup>
import movimentation from "./movimentation.js";
// import settings from "./settings";
const settings = ref({
  position: {
    x: 0,
    y: 0,
  },
  speed: 10,
  keyMap: {
    arrowRight: 39,
    arrowLeft: 37,
    arrowUp: 38,
    arrowDown: 40,
  },
});

const updatedPosition = ref("");

function updateSettings(translate, position) {
  (updatedPosition.value = translate), (settings.value = position);
}
onMounted(() => {
  window.addEventListener("keydown", (event) => {
    movimentation(
      updateSettings,
      updatedPosition.value,
      JSON.parse(JSON.stringify(settings.value)),
      event
    );
    console.log(updatedPosition.value);
  });
});
</script>

<style scoped>
.player {
  transform: v-bind(updatedPosition);
  @apply h-6 w-6 rounded-sm relative flex items-center justify-center bg-black;
}
.player > div {
  background-color: transparent;
  box-shadow: 0px 0px 0px 9999px rgba(13, 12, 12, 0.98),
    1px 1px 18px 10px rgba(13, 12, 12, 0.98) inset;
  @apply p-32 scale-150 rounded-full z-50;
}
</style>
