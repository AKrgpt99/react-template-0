import { baseApi } from "../base-api";

export const themeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTheme: builder.query({
      query: () => `theme`,
    }),
  }),
});

export const { useGetThemeQuery } = themeApi;
