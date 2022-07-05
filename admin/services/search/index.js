import { baseApi } from "../base-api";

export const searchApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSearchResults: builder.query({
      query: (query) => `search/${query}`,
    }),
  }),
});

export const { getSearchResults } = searchApi;
