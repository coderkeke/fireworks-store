<template>
  <div class="back-top">
    <img src="~@/assets/img/backTop/backTop.png" />
  </div>
</template>

<script>
import { log } from "util";
export default {
  name: "BackTop"
};
</script>

<style scoped>
.back-top {
  position: fixed;
  right: 8px;
  bottom: 55px;
}

.back-top img {
  width: 43px;
  height: 43px;
}
</style>
