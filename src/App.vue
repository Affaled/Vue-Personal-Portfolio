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
  <div class="flex h-screen w-full pb-20">
    <ContactAside />
    <main
      class="flex h-screen w-screen justify-center pb-20 pt-28 text-lg font-light"
    >
      <router-view />
    </main>
  </div>
</template>
