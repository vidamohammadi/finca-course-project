<script setup>
import {useCourse} from "../composables/useCourse.js";

const { course, fetchCourse } = useCourse();
await fetchCourse();
</script>

<template>
  <v-row v-if="course">
    <v-col cols="4">
      <v-btn>
        <v-icon size="20" color="white">mdi-penguin</v-icon>
        TRY PRO
      </v-btn>
    </v-col>
    <v-col cols="8">
      <v-icon>mdi-chevron-left</v-icon>
      {{ course.name }}
    </v-col>
  </v-row>
</template>
