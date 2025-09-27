import { create } from 'zustand';
import { BookingState, State, City, Hospital, Doctor, TimeSlot, Booking, User } from '@/types';

interface BookingStore extends BookingState {
  // States
  states: State[];
  cities: City[];
  hospitals: Hospital[];
  doctors: Doctor[];
  timeSlots: TimeSlot[];
  bookings: Booking[];

  // Loading states
  isLoading: boolean;
  isLoadingCities: boolean;
  isLoadingHospitals: boolean;
  isLoadingDoctors: boolean;
  isLoadingSlots: boolean;
  isBooking: boolean;

  // Current selections
  selectedState?: State;
  selectedCity?: City;
  selectedHospital?: Hospital;
  selectedDoctor?: Doctor;
  selectedSlot?: TimeSlot;

  // User
  user?: User;

  // Actions
  setStates: (states: State[]) => void;
  setCities: (cities: City[]) => void;
  setHospitals: (hospitals: Hospital[]) => void;
  setDoctors: (doctors: Doctor[]) => void;
  setTimeSlots: (slots: TimeSlot[]) => void;
  setBookings: (bookings: Booking[]) => void;

  setSelectedState: (state: State | undefined) => void;
  setSelectedCity: (city: City | undefined) => void;
  setSelectedHospital: (hospital: Hospital | undefined) => void;
  setSelectedDoctor: (doctor: Doctor | undefined) => void;
  setSelectedSlot: (slot: TimeSlot | undefined) => void;
  setSelectedDate: (date: string | undefined) => void;

  setIsLoading: (loading: boolean) => void;
  setIsLoadingCities: (loading: boolean) => void;
  setIsLoadingHospitals: (loading: boolean) => void;
  setIsLoadingDoctors: (loading: boolean) => void;
  setIsLoadingSlots: (loading: boolean) => void;
  setIsBooking: (loading: boolean) => void;

  setUser: (user: User | undefined) => void;

  // Reset functions
  resetSelection: () => void;
  resetFromState: () => void;
  resetFromCity: () => void;
  resetFromHospital: () => void;
}

export const useBookingStore = create<BookingStore>((set) => ({
  // Initial state
  states: [],
  cities: [],
  hospitals: [],
  doctors: [],
  timeSlots: [],
  bookings: [],

  // Loading states
  isLoading: false,
  isLoadingCities: false,
  isLoadingHospitals: false,
  isLoadingDoctors: false,
  isLoadingSlots: false,
  isBooking: false,

  // Actions
  setStates: (states) => set({ states }),
  setCities: (cities) => set({ cities }),
  setHospitals: (hospitals) => set({ hospitals }),
  setDoctors: (doctors) => set({ doctors }),
  setTimeSlots: (slots) => set({ timeSlots: slots }),
  setBookings: (bookings) => set({ bookings }),

  setSelectedState: (state) => set({ selectedState: state, selectedStateId: state?.id }),
  setSelectedCity: (city) => set({ selectedCity: city, selectedCityId: city?.id }),
  setSelectedHospital: (hospital) => set({ selectedHospital: hospital, selectedHospitalId: hospital?.id }),
  setSelectedDoctor: (doctor) => set({ selectedDoctor: doctor, selectedDoctorId: doctor?.id }),
  setSelectedSlot: (slot) => set({ selectedSlot: slot, selectedSlotId: slot?.id }),
  setSelectedDate: (date) => set({ selectedDate: date }),

  setIsLoading: (loading) => set({ isLoading: loading }),
  setIsLoadingCities: (loading) => set({ isLoadingCities: loading }),
  setIsLoadingHospitals: (loading) => set({ isLoadingHospitals: loading }),
  setIsLoadingDoctors: (loading) => set({ isLoadingDoctors: loading }),
  setIsLoadingSlots: (loading) => set({ isLoadingSlots: loading }),
  setIsBooking: (loading) => set({ isBooking: loading }),

  setUser: (user) => set({ user }),

  // Reset functions
  resetSelection: () => set({
    selectedStateId: undefined,
    selectedCityId: undefined,
    selectedHospitalId: undefined,
    selectedDoctorId: undefined,
    selectedSlotId: undefined,
    selectedDate: undefined,
    selectedState: undefined,
    selectedCity: undefined,
    selectedHospital: undefined,
    selectedDoctor: undefined,
    selectedSlot: undefined,
    cities: [],
    hospitals: [],
    doctors: [],
    timeSlots: []
  }),

  resetFromState: () => set({
    selectedCityId: undefined,
    selectedHospitalId: undefined,
    selectedDoctorId: undefined,
    selectedSlotId: undefined,
    selectedDate: undefined,
    selectedCity: undefined,
    selectedHospital: undefined,
    selectedDoctor: undefined,
    selectedSlot: undefined,
    hospitals: [],
    doctors: [],
    timeSlots: []
  }),

  resetFromCity: () => set({
    selectedHospitalId: undefined,
    selectedDoctorId: undefined,
    selectedSlotId: undefined,
    selectedDate: undefined,
    selectedHospital: undefined,
    selectedDoctor: undefined,
    selectedSlot: undefined,
    doctors: [],
    timeSlots: []
  }),

  resetFromHospital: () => set({
    selectedDoctorId: undefined,
    selectedSlotId: undefined,
    selectedDate: undefined,
    selectedDoctor: undefined,
    selectedSlot: undefined,
    timeSlots: []
  })
}));