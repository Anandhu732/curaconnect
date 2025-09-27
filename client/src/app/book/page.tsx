'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Dropdown } from '@/components/ui/dropdown';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useBookingStore } from '@/store/bookingStore';
import { fetchStates, fetchCities } from '@/lib/api';
import { ArrowRight, ArrowLeft, MapPin, Building } from 'lucide-react';

export default function BookPage() {
  const router = useRouter();
  const {
    states,
    cities,
    selectedState,
    selectedCity,
    isLoading,
    isLoadingCities,
    setStates,
    setCities,
    setSelectedState,
    setSelectedCity,
    setIsLoading,
    setIsLoadingCities,
    resetSelection,
  } = useBookingStore();

  const [mounted, setMounted] = useState(false);

  const loadStates = useCallback(async () => {
    try {
      setIsLoading(true);
      const statesData = await fetchStates();
      setStates(statesData);
    } catch (error) {
      console.error('Error fetching states:', error);
    } finally {
      setIsLoading(false);
    }
  }, [setIsLoading, setStates]);

  useEffect(() => {
    setMounted(true);
    resetSelection();
    loadStates();
  }, [resetSelection, loadStates]);

  const loadCities = async (stateId: string) => {
    try {
      setIsLoadingCities(true);
      const citiesData = await fetchCities(stateId);
      setCities(citiesData);
    } catch (error) {
      console.error('Error fetching cities:', error);
    } finally {
      setIsLoadingCities(false);
    }
  };

  const handleStateChange = (stateId: string) => {
    const state = states.find(s => s.id === stateId);
    if (state) {
      setSelectedState(state);
      setSelectedCity(undefined);
      setCities([]);
      loadCities(stateId);
    }
  };

  const handleCityChange = (cityId: string) => {
    const city = cities.find(c => c.id === cityId);
    if (city) {
      setSelectedCity(city);
    }
  };

  const handleNext = () => {
    if (selectedCity) {
      router.push('/hospitals');
    }
  };

  const handleBack = () => {
    router.push('/');
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back Button */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={handleBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </div>

        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
              <MapPin className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Book Your Appointment</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select your location to find the best hospitals and doctors near you
          </p>
        </div>

        {/* Progress Steps */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                1
              </div>
              <span className="ml-2 text-blue-600 font-semibold">Select Location</span>
            </div>
            <div className="flex-1 h-0.5 bg-gray-200 mx-4"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 font-bold text-sm">
                2
              </div>
              <span className="ml-2 text-gray-400">Choose Hospital</span>
            </div>
            <div className="flex-1 h-0.5 bg-gray-200 mx-4"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 font-bold text-sm">
                3
              </div>
              <span className="ml-2 text-gray-400">Select Doctor</span>
            </div>
          </div>
        </div>

        {/* Selection Card */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm shadow-2xl border-0 rounded-3xl">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-4">
                <Building className="h-12 w-12 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Find Healthcare Near You</h2>
              <p className="text-gray-600">Start by selecting your state and city</p>
            </CardHeader>

            <CardContent className="space-y-8 pb-8">
              {/* Step 1: Select State */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">Select State</h3>
                    <p className="text-sm text-gray-500">Choose your state from the list</p>
                  </div>
                </div>
                <div className="ml-13">
                  <Dropdown
                    placeholder="Choose your state"
                    value={selectedState?.id}
                    onValueChange={handleStateChange}
                    options={states}
                    loading={isLoading}
                  />
                </div>
              </div>

              {/* Step 2: Select City */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${selectedState ? 'bg-blue-100' : 'bg-gray-100'
                    }`}>
                    <span className={`font-bold ${selectedState ? 'text-blue-600' : 'text-gray-400'
                      }`}>2</span>
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg ${selectedState ? 'text-gray-800' : 'text-gray-400'
                      }`}>Select City</h3>
                    <p className={`text-sm ${selectedState ? 'text-gray-500' : 'text-gray-300'
                      }`}>
                      {selectedState ? 'Choose your city' : 'Please select a state first'}
                    </p>
                  </div>
                </div>
                <div className="ml-13">
                  <Dropdown
                    placeholder="Choose your city"
                    value={selectedCity?.id}
                    onValueChange={handleCityChange}
                    options={cities}
                    disabled={!selectedState}
                    loading={isLoadingCities}
                  />
                </div>
              </div>

              {/* Current Selection Summary */}
              {(selectedState || selectedCity) && (
                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                  <h4 className="font-semibold text-gray-800 mb-3">Your Selection</h4>
                  <div className="space-y-2">
                    {selectedState && (
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">State:</span>
                        <span className="font-medium text-blue-600">{selectedState.name}</span>
                      </div>
                    )}
                    {selectedCity && (
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">City:</span>
                        <span className="font-medium text-blue-600">{selectedCity.name}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Next Button */}
              <div className="pt-4">
                <Button
                  onClick={handleNext}
                  disabled={!selectedCity}
                  className="w-full h-14 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-2xl text-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  {selectedCity ? 'Find Hospitals' : 'Select Location First'}
                  {selectedCity && <ArrowRight className="ml-2 h-5 w-5" />}
                </Button>
              </div>

              {/* Help Text */}
              <div className="text-center">
                <p className="text-sm text-gray-500">
                  Need help? Contact us at{' '}
                  <a href="tel:+919876543210" className="text-blue-600 hover:underline">
                    +91 9876543210
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}