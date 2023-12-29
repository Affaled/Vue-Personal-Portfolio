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
    <main>
      <router-view />
    </main>
  </div>
</template>
