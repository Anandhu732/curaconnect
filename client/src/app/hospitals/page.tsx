'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { HospitalCard } from '@/components/ui/custom-cards';
import { useBookingStore } from '@/store/bookingStore';
import { fetchHospitals } from '@/lib/api';
import { ArrowLeft, MapPin, Loader2 } from 'lucide-react';

export default function HospitalsPage() {
  const router = useRouter();
  const {
    hospitals,
    selectedCity,
    selectedHospital,
    isLoadingHospitals,
    setHospitals,
    setSelectedHospital,
    setIsLoadingHospitals,
  } = useBookingStore();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!selectedCity) {
      router.push('/');
      return;
    }

    const loadHospitals = async () => {
      try {
        setIsLoadingHospitals(true);
        const hospitalsData = await fetchHospitals(selectedCity.id);
        setHospitals(hospitalsData);
      } catch (error) {
        console.error('Error fetching hospitals:', error);
      } finally {
        setIsLoadingHospitals(false);
      }
    };

    loadHospitals();
  }, [selectedCity, router, setHospitals, setIsLoadingHospitals]);

  const handleHospitalSelect = (hospitalId: string) => {
    const hospital = hospitals.find(h => h.id === hospitalId);
    if (hospital) {
      setSelectedHospital(hospital);
      router.push('/doctors');
    }
  };

  const handleBack = () => {
    router.push('/');
  };

  if (!mounted) return null;

  if (!selectedCity) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-4">Please select a city first</p>
          <Button onClick={() => router.push('/')}>Go to Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleBack}
            className="text-gray-600 hover:text-blue-600"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Hospitals in {selectedCity.name}</h1>
            <div className="flex items-center gap-2 mt-1">
              <MapPin className="h-4 w-4 text-gray-500" />
              <p className="text-gray-600">Select a hospital to find doctors</p>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {isLoadingHospitals && (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <Loader2 className="h-8 w-8 animate-spin text-blue-600 mx-auto mb-4" />
              <p className="text-gray-600">Loading hospitals...</p>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!isLoadingHospitals && hospitals.length === 0 && (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No hospitals found</h3>
            <p className="text-gray-600 mb-6">
              We couldn&apos;t find any hospitals in {selectedCity.name}. Please try another city.
            </p>
            <Button onClick={handleBack}>
              Choose Different City
            </Button>
          </div>
        )}

        {/* Hospitals Grid */}
        {!isLoadingHospitals && hospitals.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hospitals.map((hospital) => (
              <HospitalCard
                key={hospital.id}
                name={hospital.name}
                address={hospital.address}
                specialties={hospital.specialties}
                rating={hospital.rating}
                phone={hospital.phone}
                image={hospital.image}
                onClick={() => handleHospitalSelect(hospital.id)}
                className={selectedHospital?.id === hospital.id ? 'ring-2 ring-blue-500' : ''}
              />
            ))}
          </div>
        )}

        {/* Continue Button */}
        {selectedHospital && (
          <div className="fixed bottom-6 left-6 right-6 md:static md:mt-8 md:flex md:justify-center">
            <Button
              onClick={() => router.push('/doctors')}
              className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-2xl px-8 py-3"
            >
              View Doctors at {selectedHospital.name}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}