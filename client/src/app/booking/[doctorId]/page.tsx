'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useAuthStore } from '@/store/authStore';
import { useBookingStore } from '@/store/bookingStore';
import {
  Calendar,
  Clock,
  MapPin,
  Star,
  ArrowLeft,
  User,
  Phone,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface TimeSlot {
  id: string;
  time: string;
  isAvailable: boolean;
}

interface BookingConfirmation {
  appointmentId: string;
  doctorName: string;
  hospitalName: string;
  date: string;
  time: string;
  fee: number;
}

const timeSlots: TimeSlot[] = [
  { id: '1', time: '9:00 AM', isAvailable: true },
  { id: '2', time: '9:30 AM', isAvailable: false },
  { id: '3', time: '10:00 AM', isAvailable: true },
  { id: '4', time: '10:30 AM', isAvailable: true },
  { id: '5', time: '11:00 AM', isAvailable: false },
  { id: '6', time: '11:30 AM', isAvailable: true },
  { id: '7', time: '2:00 PM', isAvailable: true },
  { id: '8', time: '2:30 PM', isAvailable: true },
  { id: '9', time: '3:00 PM', isAvailable: false },
  { id: '10', time: '3:30 PM', isAvailable: true },
  { id: '11', time: '4:00 PM', isAvailable: true },
  { id: '12', time: '4:30 PM', isAvailable: true },
];

export default function BookingPage() {
  const params = useParams();
  const router = useRouter();
  const { user, isAuthenticated, checkAuth } = useAuthStore();
  const { selectedDoctor, selectedHospital } = useBookingStore();

  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [loading, setLoading] = useState(false);
  const [confirmation, setConfirmation] = useState<BookingConfirmation | null>(null);
  const [error, setError] = useState<string>('');

  // Generate next 7 days for date selection
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();

    for (let i = 1; i <= 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push({
        value: date.toISOString().split('T')[0],
        label: date.toLocaleDateString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric'
        })
      });
    }
    return dates;
  };

  const availableDates = getAvailableDates();

  useEffect(() => {
    checkAuth();
    if (!isAuthenticated) {
      router.push(`/login?redirect=/booking/${params.doctorId}`);
      return;
    }

    // If no doctor selected, redirect to book page
    if (!selectedDoctor) {
      router.push('/book');
      return;
    }

    // Set default date to tomorrow
    if (availableDates.length > 0) {
      setSelectedDate(availableDates[0].value);
    }
  }, [isAuthenticated, selectedDoctor, router, params.doctorId, availableDates, checkAuth]);

  const handleSlotSelect = (slot: TimeSlot) => {
    if (slot.isAvailable) {
      setSelectedSlot(slot);
      setError('');
    }
  };

  const handleBookingConfirm = async () => {
    if (!selectedDate || !selectedSlot || !selectedDoctor || !selectedHospital || !user) {
      setError('Please select a date and time slot');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Simulate booking API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      const bookingConfirmation: BookingConfirmation = {
        appointmentId: `APT${Date.now()}`,
        doctorName: selectedDoctor.name,
        hospitalName: selectedHospital.name,
        date: selectedDate,
        time: selectedSlot.time,
        fee: selectedDoctor.consultationFee
      };

      setConfirmation(bookingConfirmation);
    } catch {
      setError('Failed to book appointment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated || !selectedDoctor) {
    return null; // Will redirect
  }

  // Show confirmation screen
  if (confirmation) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>

              <h1 className="text-2xl font-bold text-gray-800 mb-2">Booking Confirmed!</h1>
              <p className="text-gray-600 mb-8">Your appointment has been successfully booked</p>

              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6 mb-8 text-left">
                <h2 className="text-lg font-bold text-gray-800 mb-4">Appointment Details</h2>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <User className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Doctor</p>
                      <p className="font-semibold text-gray-800">{confirmation.doctorName}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Hospital</p>
                      <p className="font-semibold text-gray-800">{confirmation.hospitalName}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Date</p>
                      <p className="font-semibold text-gray-800">
                        {new Date(confirmation.date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Time</p>
                      <p className="font-semibold text-gray-800">{confirmation.time}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-green-600 font-bold">₹</span>
                    <div>
                      <p className="text-sm text-gray-600">Consultation Fee</p>
                      <p className="font-semibold text-gray-800">₹{confirmation.fee}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <p className="text-sm text-blue-800">
                    <strong>Appointment ID:</strong> {confirmation.appointmentId}
                  </p>
                  <p className="text-sm text-blue-600 mt-1">
                    Please save this ID for your records. You can view all your appointments in the dashboard.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => router.push('/dashboard')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl"
                >
                  View Dashboard
                </Button>
                <Button
                  onClick={() => router.push('/book')}
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-2xl"
                >
                  Book Another
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-8">
          <Button
            onClick={() => router.push('/doctors')}
            variant="outline"
            className="mb-4 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-2xl"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Doctors
          </Button>

          <h1 className="text-3xl font-bold text-gray-800">Book Appointment</h1>
          <p className="text-gray-600 mt-1">Select your preferred date and time</p>
        </div>

        {/* Doctor Info Card */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-800 mb-2">{selectedDoctor.name}</h2>
                <p className="text-blue-600 font-medium mb-2">{selectedDoctor.specialization}</p>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {selectedHospital?.name}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    {selectedDoctor.rating}
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{selectedDoctor.experience} years experience</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-800">₹{selectedDoctor.consultationFee}</p>
                <p className="text-sm text-gray-600">Consultation Fee</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Date Selection */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardHeader>
            <h3 className="text-lg font-bold text-gray-800">Select Date</h3>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
              {availableDates.map((date) => (
                <button
                  key={date.value}
                  onClick={() => setSelectedDate(date.value)}
                  className={`p-3 rounded-2xl border text-center transition-all ${
                    selectedDate === date.value
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300'
                  }`}
                >
                  <p className="text-sm font-medium">{date.label}</p>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Time Slot Selection */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardHeader>
            <h3 className="text-lg font-bold text-gray-800">Select Time Slot</h3>
            <p className="text-sm text-gray-600">Available slots for {new Date(selectedDate).toLocaleDateString()}</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {timeSlots.map((slot) => (
                <button
                  key={slot.id}
                  onClick={() => handleSlotSelect(slot)}
                  disabled={!slot.isAvailable}
                  className={`p-3 rounded-2xl border text-center transition-all ${
                    !slot.isAvailable
                      ? 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed'
                      : selectedSlot?.id === slot.id
                      ? 'bg-green-600 text-white border-green-600'
                      : 'bg-white border-gray-300 text-gray-700 hover:bg-green-50 hover:border-green-300'
                  }`}
                >
                  <p className="font-medium">{slot.time}</p>
                  {!slot.isAvailable && (
                    <p className="text-xs mt-1">Booked</p>
                  )}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Patient Info */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardHeader>
            <h3 className="text-lg font-bold text-gray-800">Patient Information</h3>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <User className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Patient Name</p>
                  <p className="font-semibold text-gray-800">{user?.name}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Phone Number</p>
                  <p className="font-semibold text-gray-800">{user?.phone}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Error Message */}
        {error && (
          <Card className="mb-8 border-red-200 shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 text-red-600">
                <AlertCircle className="h-5 w-5" />
                <p className="font-medium">{error}</p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Confirm Booking */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-gray-800">Confirm Appointment</h3>
                <p className="text-sm text-gray-600">
                  {selectedDate && selectedSlot ?
                    `${new Date(selectedDate).toLocaleDateString()} at ${selectedSlot.time}` :
                    'Please select date and time'
                  }
                </p>
              </div>
              <Button
                onClick={handleBookingConfirm}
                disabled={!selectedDate || !selectedSlot || loading}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-2xl disabled:bg-gray-300"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Booking...
                  </div>
                ) : (
                  `Confirm & Pay ₹${selectedDoctor.consultationFee}`
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}