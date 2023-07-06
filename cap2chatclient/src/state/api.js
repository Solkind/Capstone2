import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "main",
  tagTypes: [],
  endpoints: (build) => ({
    postAiText: build.mutation({
      query: (payload) => ({
        url: "openai/text",
        method: "POST",
        // headers: {
        //   "Access-control": "text/plain",
        // },
        body: payload,
      }),
    }),
  }),
});

export const { usePostAiTextMutation } = api;
