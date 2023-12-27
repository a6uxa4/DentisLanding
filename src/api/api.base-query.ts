import { FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const baseQuery = fetchBaseQuery({
  baseUrl: process.env.SERVER_URL,

  prepareHeaders(headers, { getState }: any) {
    const token = getState().auth.user?.token;
    if (token) {
      headers.set(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
      );
      if (!headers.has("Content-Type")) {
        headers.set("Content-Type", "application/json");
      }
      return headers;
    }
  },
});

export const baseQueryWithReauth = async (
  args: FetchArgs | string,
  api: any,
  extraOptions: any
) => {
  const result: any = await baseQuery(args, api, extraOptions);
  if (result?.error?.status === 403 || result?.response?.status === 403) {
  } else if (result?.error?.status === 401 || result?.response?.status) {
  }
  return result;
};
