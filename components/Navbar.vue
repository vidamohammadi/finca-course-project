<script setup lang="ts">
import { useCourse } from '../composables/useCourse'

const { course, fetchCourse } = useCourse()
await fetchCourse()
</script>

<template>
  <v-row>
    <v-col cols="4">
      <v-btn>
        <v-icon>mdi-crown</v-icon>
        TRY PRO
      </v-btn>
    </v-col>
    <v-col cols="8" v-if="course">
      <v-icon>mdi-chevron-left</v-icon>
      {{ course?.name }}
    </v-col>
  </v-row>
</template>
