import { baseApi } from "../base-api";

export const menusApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllMenus: builder.query({
      query: () => `menus`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllMenusQuery } = menusApi;
