import appointmentService from "@/services/appoinment.service";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [appointmentService.reducerPath]: appointmentService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appointmentService.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
