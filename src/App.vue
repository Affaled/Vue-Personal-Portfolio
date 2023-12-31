<script>
import { defineComponent } from "vue";
import Header from "./components/Header.vue";
import ContactAside from "./components/ContactAside.vue";
export default defineComponent({
  components: { Header, ContactAside },
});
</script>

<template>
  <Header />
  <main class="flex h-screen w-screen">
    <ContactAside />
    <transition name="slide-fade" mode="out-in">
      <router-view />
    </transition>
  </main>
</template>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
