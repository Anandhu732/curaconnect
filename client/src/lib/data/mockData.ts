import { State, City, Hospital, Doctor, TimeSlot, Booking } from '@/types';

// All 29 Indian States and Union Territories
export const mockStates: State[] = [
  { id: '1', name: 'Andhra Pradesh' },
  { id: '2', name: 'Arunachal Pradesh' },
  { id: '3', name: 'Assam' },
  { id: '4', name: 'Bihar' },
  { id: '5', name: 'Chhattisgarh' },
  { id: '6', name: 'Goa' },
  { id: '7', name: 'Gujarat' },
  { id: '8', name: 'Haryana' },
  { id: '9', name: 'Himachal Pradesh' },
  { id: '10', name: 'Jharkhand' },
  { id: '11', name: 'Karnataka' },
  { id: '12', name: 'Kerala' },
  { id: '13', name: 'Madhya Pradesh' },
  { id: '14', name: 'Maharashtra' },
  { id: '15', name: 'Manipur' },
  { id: '16', name: 'Meghalaya' },
  { id: '17', name: 'Mizoram' },
  { id: '18', name: 'Nagaland' },
  { id: '19', name: 'Odisha' },
  { id: '20', name: 'Punjab' },
  { id: '21', name: 'Rajasthan' },
  { id: '22', name: 'Sikkim' },
  { id: '23', name: 'Tamil Nadu' },
  { id: '24', name: 'Telangana' },
  { id: '25', name: 'Tripura' },
  { id: '26', name: 'Uttar Pradesh' },
  { id: '27', name: 'Uttarakhand' },
  { id: '28', name: 'West Bengal' },
  { id: '29', name: 'Delhi' }
];

// Major cities for each state
export const mockCities: City[] = [
  // Andhra Pradesh
  { id: '1', name: 'Visakhapatnam', stateId: '1' },
  { id: '2', name: 'Vijayawada', stateId: '1' },
  { id: '3', name: 'Guntur', stateId: '1' },
  { id: '4', name: 'Nellore', stateId: '1' },

  // Arunachal Pradesh
  { id: '5', name: 'Itanagar', stateId: '2' },
  { id: '6', name: 'Naharlagun', stateId: '2' },

  // Assam
  { id: '7', name: 'Guwahati', stateId: '3' },
  { id: '8', name: 'Dibrugarh', stateId: '3' },
  { id: '9', name: 'Silchar', stateId: '3' },

  // Bihar
  { id: '10', name: 'Patna', stateId: '4' },
  { id: '11', name: 'Gaya', stateId: '4' },
  { id: '12', name: 'Bhagalpur', stateId: '4' },

  // Chhattisgarh
  { id: '13', name: 'Raipur', stateId: '5' },
  { id: '14', name: 'Bhilai', stateId: '5' },
  { id: '15', name: 'Bilaspur', stateId: '5' },

  // Goa
  { id: '16', name: 'Panaji', stateId: '6' },
  { id: '17', name: 'Margao', stateId: '6' },
  { id: '18', name: 'Vasco da Gama', stateId: '6' },

  // Gujarat
  { id: '19', name: 'Ahmedabad', stateId: '7' },
  { id: '20', name: 'Surat', stateId: '7' },
  { id: '21', name: 'Vadodara', stateId: '7' },
  { id: '22', name: 'Rajkot', stateId: '7' },

  // Haryana
  { id: '23', name: 'Gurgaon', stateId: '8' },
  { id: '24', name: 'Faridabad', stateId: '8' },
  { id: '25', name: 'Panipat', stateId: '8' },

  // Himachal Pradesh
  { id: '26', name: 'Shimla', stateId: '9' },
  { id: '27', name: 'Manali', stateId: '9' },
  { id: '28', name: 'Dharamshala', stateId: '9' },

  // Jharkhand
  { id: '29', name: 'Ranchi', stateId: '10' },
  { id: '30', name: 'Jamshedpur', stateId: '10' },
  { id: '31', name: 'Dhanbad', stateId: '10' },

  // Karnataka
  { id: '32', name: 'Bangalore', stateId: '11' },
  { id: '33', name: 'Mysore', stateId: '11' },
  { id: '34', name: 'Mangalore', stateId: '11' },
  { id: '35', name: 'Hubli', stateId: '11' },

  // Kerala
  { id: '36', name: 'Thiruvananthapuram', stateId: '12' },
  { id: '37', name: 'Kochi', stateId: '12' },
  { id: '38', name: 'Calicut', stateId: '12' },
  { id: '39', name: 'Kottayam', stateId: '12' },

  // Madhya Pradesh
  { id: '40', name: 'Bhopal', stateId: '13' },
  { id: '41', name: 'Indore', stateId: '13' },
  { id: '42', name: 'Gwalior', stateId: '13' },
  { id: '43', name: 'Jabalpur', stateId: '13' },

  // Maharashtra
  { id: '44', name: 'Mumbai', stateId: '14' },
  { id: '45', name: 'Pune', stateId: '14' },
  { id: '46', name: 'Nagpur', stateId: '14' },
  { id: '47', name: 'Nashik', stateId: '14' },

  // Manipur
  { id: '48', name: 'Imphal', stateId: '15' },
  { id: '49', name: 'Thoubal', stateId: '15' },

  // Meghalaya
  { id: '50', name: 'Shillong', stateId: '16' },
  { id: '51', name: 'Tura', stateId: '16' },

  // Mizoram
  { id: '52', name: 'Aizawl', stateId: '17' },
  { id: '53', name: 'Lunglei', stateId: '17' },

  // Nagaland
  { id: '54', name: 'Kohima', stateId: '18' },
  { id: '55', name: 'Dimapur', stateId: '18' },

  // Odisha
  { id: '56', name: 'Bhubaneswar', stateId: '19' },
  { id: '57', name: 'Cuttack', stateId: '19' },
  { id: '58', name: 'Rourkela', stateId: '19' },

  // Punjab
  { id: '59', name: 'Ludhiana', stateId: '20' },
  { id: '60', name: 'Amritsar', stateId: '20' },
  { id: '61', name: 'Jalandhar', stateId: '20' },

  // Rajasthan
  { id: '62', name: 'Jaipur', stateId: '21' },
  { id: '63', name: 'Jodhpur', stateId: '21' },
  { id: '64', name: 'Udaipur', stateId: '21' },
  { id: '65', name: 'Kota', stateId: '21' },

  // Sikkim
  { id: '66', name: 'Gangtok', stateId: '22' },
  { id: '67', name: 'Namchi', stateId: '22' },

  // Tamil Nadu
  { id: '68', name: 'Chennai', stateId: '23' },
  { id: '69', name: 'Coimbatore', stateId: '23' },
  { id: '70', name: 'Madurai', stateId: '23' },
  { id: '71', name: 'Salem', stateId: '23' },

  // Telangana
  { id: '72', name: 'Hyderabad', stateId: '24' },
  { id: '73', name: 'Warangal', stateId: '24' },
  { id: '74', name: 'Nizamabad', stateId: '24' },

  // Tripura
  { id: '75', name: 'Agartala', stateId: '25' },
  { id: '76', name: 'Dharmanagar', stateId: '25' },

  // Uttar Pradesh
  { id: '77', name: 'Lucknow', stateId: '26' },
  { id: '78', name: 'Kanpur', stateId: '26' },
  { id: '79', name: 'Agra', stateId: '26' },
  { id: '80', name: 'Varanasi', stateId: '26' },

  // Uttarakhand
  { id: '81', name: 'Dehradun', stateId: '27' },
  { id: '82', name: 'Haridwar', stateId: '27' },
  { id: '83', name: 'Rishikesh', stateId: '27' },

  // West Bengal
  { id: '84', name: 'Kolkata', stateId: '28' },
  { id: '85', name: 'Howrah', stateId: '28' },
  { id: '86', name: 'Durgapur', stateId: '28' },
  { id: '87', name: 'Asansol', stateId: '28' },

  // Delhi
  { id: '88', name: 'New Delhi', stateId: '29' },
  { id: '89', name: 'Dwarka', stateId: '29' },
  { id: '90', name: 'Rohini', stateId: '29' }
];

// Demo hospitals - one per major city
export const mockHospitals: Hospital[] = [
  // Major metros
  {
    id: '1',
    name: 'Apollo Hospital Mumbai',
    address: 'Sahar Road, Andheri East, Mumbai',
    cityId: '44', // Mumbai
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    specialties: ['Cardiology', 'Oncology', 'Neurology', 'Orthopedics'],
    rating: 4.8,
    phone: '+91-22-6767-4444'
  },
  {
    id: '2',
    name: 'Fortis Hospital Bangalore',
    address: '154/9, Bannerghatta Road, Bangalore',
    cityId: '32', // Bangalore
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    specialties: ['Cardiology', 'Gastroenterology', 'Oncology', 'Pulmonology'],
    rating: 4.7,
    phone: '+91-80-6621-4444'
  },
  {
    id: '3',
    name: 'AIIMS New Delhi',
    address: 'Ansari Nagar, New Delhi',
    cityId: '88', // New Delhi
    image: 'https://images.unsplash.com/photo-1519494140681-8b17d830a3e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    specialties: ['All Specialties', 'Emergency Care', 'Super Specialty'],
    rating: 4.9,
    phone: '+91-11-2658-8500'
  },
  {
    id: '4',
    name: 'Apollo Hospital Chennai',
    address: '21, Greams Lane, Off Greams Road, Chennai',
    cityId: '68', // Chennai
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    specialties: ['Heart Surgery', 'Transplant', 'Oncology', 'Neurology'],
    rating: 4.8,
    phone: '+91-44-2829-3333'
  },
  {
    id: '5',
    name: 'Max Hospital Hyderabad',
    address: 'Plot No. 201, Sector 3, Gachibowli, Hyderabad',
    cityId: '72', // Hyderabad
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    specialties: ['Cardiology', 'Neurology', 'Oncology', 'Orthopedics'],
    rating: 4.6,
    phone: '+91-40-6677-4444'
  },
  {
    id: '6',
    name: 'Manipal Hospital Pune',
    address: '#1, Baner Balewadi Road, Pune',
    cityId: '45', // Pune
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    specialties: ['Multi Specialty', 'Emergency Care', 'Diagnostics'],
    rating: 4.5,
    phone: '+91-20-6811-0000'
  },
  {
    id: '7',
    name: 'Sterling Hospital Ahmedabad',
    address: 'Sterling Addlife India Pvt Ltd, Gurukul Road, Ahmedabad',
    cityId: '19', // Ahmedabad
    image: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    specialties: ['Cardiology', 'Neurology', 'Gastroenterology', 'Urology'],
    rating: 4.4,
    phone: '+91-79-6677-0000'
  },
  {
    id: '8',
    name: 'Aster CMI Hospital',
    address: '43/2, New Airport Road, NH-7, Hebbal, Bangalore',
    cityId: '32', // Bangalore
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    specialties: ['Multi Super Specialty', 'Robotic Surgery', 'BMT'],
    rating: 4.7,
    phone: '+91-80-4342-0100'
  }
];

// Mock doctors
export const mockDoctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Rajesh Kumar',
    specialization: 'Cardiologist',
    hospitalId: '1',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    experience: 15,
    rating: 4.8,
    consultationFee: 1000,
    availability: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  },
  {
    id: '2',
    name: 'Dr. Priya Sharma',
    specialization: 'Dermatologist',
    hospitalId: '2',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    experience: 12,
    rating: 4.7,
    consultationFee: 800,
    availability: ['Monday', 'Wednesday', 'Friday', 'Saturday']
  },
  {
    id: '3',
    name: 'Dr. Amit Singh',
    specialization: 'Orthopedic Surgeon',
    hospitalId: '3',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    experience: 18,
    rating: 4.9,
    consultationFee: 1200,
    availability: ['Tuesday', 'Thursday', 'Friday', 'Saturday']
  },
  {
    id: '4',
    name: 'Dr. Sunita Reddy',
    specialization: 'Pediatrician',
    hospitalId: '4',
    image: 'https://images.unsplash.com/photo-1594824475431-47e89e8bc3a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    experience: 10,
    rating: 4.6,
    consultationFee: 700,
    availability: ['Monday', 'Tuesday', 'Thursday', 'Friday']
  }
];

// Mock time slots
export const mockTimeSlots: TimeSlot[] = [
  { id: '1', time: '09:00 AM', isAvailable: true, doctorId: '1', date: '2025-01-15' },
  { id: '2', time: '10:00 AM', isAvailable: false, doctorId: '1', date: '2025-01-15' },
  { id: '3', time: '11:00 AM', isAvailable: true, doctorId: '1', date: '2025-01-15' },
  { id: '4', time: '02:00 PM', isAvailable: true, doctorId: '1', date: '2025-01-15' },
  { id: '5', time: '03:00 PM', isAvailable: true, doctorId: '1', date: '2025-01-15' },
];

// Mock bookings
export const mockBookings: Booking[] = [
  {
    id: '1',
    patientName: 'John Doe',
    doctorId: '1',
    hospitalId: '1',
    slotId: '1',
    date: '2025-01-15',
    time: '09:00 AM',
    status: 'confirmed',
    consultationFee: 1000,
    createdAt: '2025-01-10T10:30:00Z'
  }
];