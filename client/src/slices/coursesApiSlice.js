import {apiSlice} from "./apiSlice.js";

const COURSES_URL = "/api/courses";

export const coursesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    courses: builder.mutation({
      query: () => ({
        url: `${COURSES_URL}/`,
        method: "GET",
      }),
    }),
  }),
});

export const { useCoursesMutation } = coursesApiSlice;
