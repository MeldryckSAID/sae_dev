<template>
  <div class="flex justify-end p-2">
    <div class="relative inline-block items-center gap-2 rounded-3xl bg-gris p-7 py-2.5 text-center font-inter font-bold text-red-600">
      <p><slot /></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
