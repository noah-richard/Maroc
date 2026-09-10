export type SearchCategory = 'stays' | 'cars' | 'restaurants';

export interface StaysSearchForm {
  destination: string;
  checkIn: string;
  checkOut: string;
  guests: number;
}

export interface CarsSearchForm {
  pickupLocation: string;
  pickupDate: string;
  returnDate: string;
  driverAge: string;
}

export interface RestaurantsSearchForm {
  location: string;
  reservationDate: string;
  timeSlot: string;
  guests: number;
}

export type SearchFormData = StaysSearchForm | CarsSearchForm | RestaurantsSearchForm;

export interface CitySuggestion {
  name: string;
  region: string;
  type: 'coastal' | 'mountain' | 'imperial' | 'desert';
  slug?: string;
}
