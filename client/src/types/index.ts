export interface State {
  id: string;
  name: string;
}

export interface City {
  id: string;
  name: string;
  stateId: string;
}

export interface Hospital {
  id: string;
  name: string;
  address: string;
  cityId: string;
  image: string;
  specialties: string[];
  rating: number;
  phone: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  hospitalId: string;
  image: string;
  experience: number;
  rating: number;
  consultationFee: number;
  availability: string[];
}

export interface TimeSlot {
  id: string;
  time: string;
  isAvailable: boolean;
  doctorId: string;
  date: string;
}

export interface Booking {
  id: string;
  patientName: string;
  doctorId: string;
  hospitalId: string;
  slotId: string;
  date: string;
  time: string;
  status: 'confirmed' | 'pending' | 'cancelled' | 'completed';
  consultationFee: number;
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface BookingState {
  selectedStateId?: string;
  selectedCityId?: string;
  selectedHospitalId?: string;
  selectedDoctorId?: string;
  selectedSlotId?: string;
  selectedDate?: string;
}