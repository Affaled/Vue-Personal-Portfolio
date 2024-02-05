<script>
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<template>
  <div class="flex h-screen w-screen items-center justify-center py-28">
    <div class="flex w-10/12 flex-col items-center justify-center">
      <div class="flex flex-col items-end">
        <h1 class="font-serif text-9xl uppercase">
          {{ $i18n.t("home.title") }}
        </h1>
        <p class="text-3xl font-light capitalize text-[#a7141e]">
          {{ $i18n.t("home.subtitle") }}
        </p>
      </div>
    </div>
  </div>
</template>
