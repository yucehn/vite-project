<script setup lang="ts">
import { NCarousel } from 'naive-ui';

// defineProps<{ msg: string }>();

</script>

<template>
  <div class="card">
    <n-carousel :space-between="20" draggable>
      <img
        v-for="i in 4"
        :key="i"
        class="carousel-img"
        :src="`https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel${i}.jpeg`"
      >
    </n-carousel>
  </div>
  <div class="container">
    <n-grid :cols="4">
      <n-grid-item>
        <div>
          <h3>title</h3>
          <p>description PaperPlaneRegular</p>
        </div>
      </n-grid-item>
      <n-grid-item>
        <div class="green" />
      </n-grid-item>
      <n-grid-item>
        <div class="light-green" />
      </n-grid-item>
      <n-grid-item>
        <div class="light-green" />
      </n-grid-item>
    </n-grid>
  </div>
  <!-- <h1>{{ msg }}</h1> -->
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.carousel-img {
  width: 100%;
  height: 540px;
  object-fit: cover;
}
</style>
