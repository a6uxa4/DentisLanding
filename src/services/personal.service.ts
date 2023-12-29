import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "../api/api.base-query";

const personalService = createApi({
  reducerPath: "personalApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getPersonal: builder.query<any, void>({
      query: () => "/calendars/users",
    }),
  }),
});

export default personalService;

export const { useGetPersonalQuery } = personalService;
