<script setup>
import {useCourse} from "../composables/useCourse.js";

const { course, fetchCourse } = useCourse();
await fetchCourse();
</script>

<template>

  <div>{{course}}</div>

</template>


<style scoped>

</style>