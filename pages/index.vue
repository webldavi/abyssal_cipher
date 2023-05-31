<template>
  <div class="container">
    <Player />
    <div
      class="object">
    ></div>
  </div>
</template>

<style scoped>
.container {
  background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrIRHkTm-MhYvZ1qu3TunQkXmZmDlJX9pIZw&usqp=CAU);
  @apply h-screen w-full;
}

.object{
    transform: translate(250px , 250px);
    @apply w-16 h-16 bg-gray-700 z-10
}
</style>
