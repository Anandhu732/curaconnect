'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useAuthStore } from '@/store/authStore';
import { Calendar, Clock, MapPin, User, Phone, Plus, FileText } from 'lucide-react';

interface Appointment {
  id: string;
  doctorName: string;
  specialization: string;
  hospitalName: string;
  date: string;
  time: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  consultationFee: number;
}

// Mock appointments data
const mockAppointments: Appointment[] = [
  {
    id: '1',
    doctorName: 'Dr. Rajesh Kumar',
    specialization: 'Cardiologist',
    hospitalName: 'Apollo Hospital',
    date: '2025-01-15',
    time: '10:00 AM',
    status: 'upcoming',
    consultationFee: 1000
  },
  {
    id: '2',
    doctorName: 'Dr. Priya Sharma',
    specialization: 'Dermatologist',
    hospitalName: 'Fortis Hospital',
    date: '2025-01-10',
    time: '2:30 PM',
    status: 'completed',
    consultationFee: 800
  },
  {
    id: '3',
    doctorName: 'Dr. Amit Singh',
    specialization: 'Orthopedic',
    hospitalName: 'Max Healthcare',
    date: '2025-01-05',
    time: '11:15 AM',
    status: 'cancelled',
    consultationFee: 1200
  }
];

export default function DashboardPage() {
  const router = useRouter();
  const { user, isAuthenticated, checkAuth } = useAuthStore();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
    if (!isAuthenticated) {
      router.push('/login?redirect=/dashboard');
      return;
    }

    // Simulate loading appointments
    setTimeout(() => {
      setAppointments(mockAppointments);
      setLoading(false);
    }, 1000);
  }, [isAuthenticated, router, checkAuth]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const upcomingAppointments = appointments.filter(apt => apt.status === 'upcoming');
  const pastAppointments = appointments.filter(apt => apt.status !== 'upcoming');

  if (!isAuthenticated) {
    return null; // Will redirect to login
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">My Dashboard</h1>
              <p className="text-gray-600 mt-1">Welcome back, {user?.name}!</p>
            </div>
            <Button
              onClick={() => router.push('/book')}
              className="mt-4 sm:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl"
            >
              <Plus className="h-5 w-5 mr-2" />
              Book New Appointment
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Upcoming</p>
                  <p className="text-3xl font-bold text-blue-600">{upcomingAppointments.length}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Completed</p>
                  <p className="text-3xl font-bold text-green-600">
                    {appointments.filter(apt => apt.status === 'completed').length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                  <FileText className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Spent</p>
                  <p className="text-3xl font-bold text-purple-600">
                    ₹{appointments.reduce((sum, apt) => sum + apt.consultationFee, 0)}
                  </p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
                  <span className="text-purple-600 font-bold">₹</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Profile Card */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardHeader>
            <h2 className="text-xl font-bold text-gray-800">Profile Information</h2>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <User className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Full Name</p>
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
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-semibold text-gray-800">{user?.email}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Appointments */}
        {upcomingAppointments.length > 0 && (
          <Card className="mb-8 border-0 shadow-lg">
            <CardHeader>
              <h2 className="text-xl font-bold text-gray-800">Upcoming Appointments</h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div className="mb-4 sm:mb-0">
                        <h3 className="text-lg font-bold text-gray-800">{appointment.doctorName}</h3>
                        <p className="text-blue-600 font-medium">{appointment.specialization}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {appointment.hospitalName}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(appointment.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {appointment.time}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(appointment.status)}`}>
                          {appointment.status.toUpperCase()}
                        </span>
                        <p className="font-bold text-gray-800">₹{appointment.consultationFee}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Past Appointments */}
        {pastAppointments.length > 0 && (
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <h2 className="text-xl font-bold text-gray-800">Past Appointments</h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pastAppointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div className="mb-4 sm:mb-0">
                        <h3 className="text-lg font-bold text-gray-800">{appointment.doctorName}</h3>
                        <p className="text-gray-600 font-medium">{appointment.specialization}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {appointment.hospitalName}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(appointment.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {appointment.time}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(appointment.status)}`}>
                          {appointment.status.toUpperCase()}
                        </span>
                        <p className="font-bold text-gray-800">₹{appointment.consultationFee}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Empty State */}
        {loading && (
          <Card className="border-0 shadow-lg">
            <CardContent className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading your appointments...</p>
            </CardContent>
          </Card>
        )}

        {!loading && appointments.length === 0 && (
          <Card className="border-0 shadow-lg">
            <CardContent className="text-center py-12">
              <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">No appointments yet</h3>
              <p className="text-gray-600 mb-6">Book your first appointment to get started with quality healthcare</p>
              <Button
                onClick={() => router.push('/book')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl"
              >
                <Plus className="h-5 w-5 mr-2" />
                Book Your First Appointment
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}