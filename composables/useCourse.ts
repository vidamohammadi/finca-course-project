import { ref } from 'vue';
import type {ApiCourse} from "../types/api";

const course = ref<ApiCourse | null>(null);

export const useCourse = () => {
    const fetchCourse = async () => {
        if (!course.value) {
            const res = await fetch('/data.json');
            course.value = await res.json();
        }
    };

    return { course, fetchCourse };
};
