<template>
  <y-button theme="primary" round loading @click="toggle">对话框</y-button>
  <y-dialog v-model="visible" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const visible = ref(false);

const toggle = () => {
  visible.value = !visible.value;
};

const confirm = () => {};
const cancel = () => {};
</script>
