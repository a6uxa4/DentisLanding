export interface appointmentsProps {
  firstName: string;
  lastName: string;
  userId: null | { fullName: string; id: number };
  phoneNumber: string;
  startDate: string;
  startTime: string;
  endTime: string;
  recordType: null | { value: string; label: string };
}
