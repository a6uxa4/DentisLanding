import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "../api/api.base-query";

const appointmentService = createApi({
  reducerPath: "appointmentApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    postAppointment: builder.mutation<any, any>({
      query: (body) => {
        return {
          url: "/calendars/onlineRecord",
          method: "POST",
          body: body,
        };
      },
    }),
  }),
});

export default appointmentService;

export const { usePostAppointmentMutation } = appointmentService;
