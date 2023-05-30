import { apiSlice } from "./apiSlice";
const GRADES_URL = "/api/grades";

export const gradeApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        gradesPerCourse: builder.mutation({
            query: (id) => ({
                url: `${GRADES_URL}/${id}`,
                method: "GET",
            }),
        })
    }),
});

export const { useGradesPerCourseMutation } = gradeApiSlice;