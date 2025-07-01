export interface BookingCardTypes {
  address: string;
  city: string;
  state: string;
  slot: Date;
  status: 'Allotted' | 'Not-Allotted' | 'Cancelled' | 'Completed';
  price: number;
}
