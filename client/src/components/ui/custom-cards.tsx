import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Card as ShadcnCard, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Phone } from 'lucide-react';

interface HospitalCardProps {
  name: string;
  address: string;
  specialties: string[];
  rating: number;
  phone: string;
  image?: string;
  onClick: () => void;
  className?: string;
}

export function HospitalCard({
  name,
  address,
  specialties,
  rating,
  phone,
  image,
  onClick,
  className
}: HospitalCardProps) {
  return (
    <ShadcnCard
      className={cn(
        "cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
        "border-0 bg-gradient-to-br from-white to-blue-50/30 rounded-2xl overflow-hidden",
        "shadow-lg hover:shadow-2xl",
        className
      )}
      onClick={onClick}
    >
      <div className="aspect-video w-full bg-gradient-to-br from-blue-100 to-blue-200 relative overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-blue-400 text-4xl font-bold opacity-50">
              {name.split(' ').map(word => word[0]).join('').slice(0, 2)}
            </div>
          </div>
        )}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
          <Star className="h-3 w-3 text-yellow-500 fill-current" />
          <span className="text-sm font-medium text-gray-700">{rating}</span>
        </div>
      </div>

      <CardContent className="p-5">
        <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-1">{name}</h3>

        <div className="flex items-start gap-2 mb-3">
          <MapPin className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-gray-600 line-clamp-2">{address}</p>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <Phone className="h-4 w-4 text-gray-500" />
          <p className="text-sm text-gray-600">{phone}</p>
        </div>

        <div className="flex flex-wrap gap-1">
          {specialties.slice(0, 3).map((specialty, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-xs bg-blue-100 text-blue-700 hover:bg-blue-200 rounded-full px-2 py-1"
            >
              {specialty}
            </Badge>
          ))}
          {specialties.length > 3 && (
            <Badge
              variant="outline"
              className="text-xs text-gray-500 border-gray-300 rounded-full px-2 py-1"
            >
              +{specialties.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>
    </ShadcnCard>
  );
}

interface DoctorCardProps {
  name: string;
  specialization: string;
  experience: number;
  rating: number;
  consultationFee: number;
  image?: string;
  availability?: string[];
  onClick: () => void;
  className?: string;
}

export function DoctorCard({
  name,
  specialization,
  experience,
  rating,
  consultationFee,
  image,
  availability,
  onClick,
  className
}: DoctorCardProps) {
  return (
    <ShadcnCard
      className={cn(
        "cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
        "border-0 bg-gradient-to-br from-white to-green-50/30 rounded-2xl overflow-hidden",
        "shadow-lg hover:shadow-2xl",
        className
      )}
      onClick={onClick}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center overflow-hidden flex-shrink-0">
            {image ? (
              <Image
                src={image}
                alt={name}
                width={64}
                height={64}
                className="w-full h-full object-cover rounded-2xl"
              />
            ) : (
              <div className="text-green-600 text-xl font-bold">
                {name.split(' ').map(word => word[0]).join('').slice(0, 2)}
              </div>
            )}
          </div>

          <div className="flex-1">
            <h3 className="font-bold text-lg text-gray-800 mb-1">{name}</h3>
            <p className="text-blue-600 font-medium text-sm mb-1">{specialization}</p>
            <p className="text-gray-500 text-sm">{experience} years experience</p>
          </div>

          <div className="flex items-center gap-1 bg-yellow-50 rounded-full px-2 py-1">
            <Star className="h-3 w-3 text-yellow-500 fill-current" />
            <span className="text-sm font-medium text-gray-700">{rating}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0 px-6 pb-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 mb-1">Consultation Fee</p>
            <p className="font-bold text-lg text-green-600">₹{consultationFee}</p>
          </div>

          {availability && availability.length > 0 && (
            <div className="text-right">
              <p className="text-sm text-gray-500 mb-1">Available</p>
              <div className="flex gap-1">
                {availability.slice(0, 3).map((day, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-xs text-green-600 border-green-300 rounded-full px-2 py-0.5"
                  >
                    {day}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </ShadcnCard>
  );
}