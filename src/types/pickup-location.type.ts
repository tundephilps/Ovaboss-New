export interface PickupLocation {
    id: number;
    title: string;
    phone: string;
    address: string;
    description: string;
    pickUpTime: string;
}

export interface PickupLocationInput {
  id?: number;
  title: string;
  phone: string;
  business_id: number;
  full_address: string;
  description: string;
  pick_up_time: string;
}
