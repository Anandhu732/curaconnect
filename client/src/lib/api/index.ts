import { State, City, Hospital, Doctor, TimeSlot, Booking } from '@/types';
import {
  mockStates,
  mockCities,
  mockHospitals,
  mockDoctors,
  mockTimeSlots,
  mockBookings
} from '../data/mockData';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function fetchStates(): Promise<State[]> {
  await delay(500);
  return mockStates;
}

export async function fetchCities(stateId: string): Promise<City[]> {
  await delay(300);
  return mockCities.filter(city => city.stateId === stateId);
}

export async function fetchHospitals(cityId: string): Promise<Hospital[]> {
  await delay(600);
  return mockHospitals.filter(hospital => hospital.cityId === cityId);
}

export async function fetchDoctors(hospitalId: string): Promise<Doctor[]> {
  await delay(400);
  return mockDoctors.filter(doctor => doctor.hospitalId === hospitalId);
}

export async function fetchTimeSlots(doctorId: string, date: string): Promise<TimeSlot[]> {
  await delay(300);
  return mockTimeSlots.filter(slot =>
    slot.doctorId === doctorId && slot.date === date
  );
}

export async function createBooking(bookingData: Omit<Booking, 'id' | 'createdAt'>): Promise<Booking> {
  await delay(800);

  const newBooking: Booking = {
    ...bookingData,
    id: Math.random().toString(36).substr(2, 9),
    createdAt: new Date().toISOString(),
  };

  // In a real app, this would save to backend
  mockBookings.push(newBooking);

  return newBooking;
}

export async function fetchUserBookings(userId: string): Promise<Booking[]> {
  await delay(400);
  // For demo purposes, return all bookings
  // In a real app, filter by userId
  console.log('Fetching bookings for user:', userId);
  return mockBookings;
}

export async function getDoctorById(doctorId: string): Promise<Doctor | null> {
  await delay(200);
  return mockDoctors.find(doctor => doctor.id === doctorId) || null;
}

export async function getHospitalById(hospitalId: string): Promise<Hospital | null> {
  await delay(200);
  return mockHospitals.find(hospital => hospital.id === hospitalId) || null;
}