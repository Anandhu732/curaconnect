import React from 'react';
import { cn } from '@/lib/utils';
import { TimeSlot } from '@/types';
import { Clock, Check } from 'lucide-react';

interface SlotSelectorProps {
  slots: TimeSlot[];
  selectedSlotId?: string;
  onSlotSelect: (slot: TimeSlot) => void;
  loading?: boolean;
  className?: string;
}

export function SlotSelector({
  slots,
  selectedSlotId,
  onSlotSelect,
  loading = false,
  className
}: SlotSelectorProps) {
  if (loading) {
    return (
      <div className={cn("space-y-4", className)}>
        <div className="flex items-center gap-2 mb-4">
          <Clock className="h-5 w-5 text-gray-500" />
          <h3 className="text-lg font-semibold text-gray-800">Available Time Slots</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="h-12 bg-gray-100 rounded-xl animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  if (slots.length === 0) {
    return (
      <div className={cn("text-center py-8", className)}>
        <Clock className="h-12 w-12 text-gray-400 mx-auto mb-3" />
        <p className="text-gray-500 mb-2">No slots available</p>
        <p className="text-sm text-gray-400">Please try selecting a different date</p>
      </div>
    );
  }

  const availableSlots = slots.filter(slot => slot.isAvailable);
  const unavailableSlots = slots.filter(slot => !slot.isAvailable);

  return (
    <div className={cn("space-y-6", className)}>
      <div className="flex items-center gap-2">
        <Clock className="h-5 w-5 text-gray-500" />
        <h3 className="text-lg font-semibold text-gray-800">Available Time Slots</h3>
      </div>

      {availableSlots.length > 0 && (
        <div>
          <h4 className="text-sm font-medium text-green-600 mb-3">Available</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {availableSlots.map((slot) => (
              <button
                key={slot.id}
                onClick={() => onSlotSelect(slot)}
                className={cn(
                  "relative p-3 text-sm font-medium rounded-xl border-2 transition-all duration-200",
                  "hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                  selectedSlotId === slot.id
                    ? "border-blue-500 bg-blue-50 text-blue-700"
                    : "border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50"
                )}
              >
                <div className="flex items-center justify-center gap-2">
                  {selectedSlotId === slot.id && (
                    <Check className="h-4 w-4" />
                  )}
                  <span>{slot.time}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {unavailableSlots.length > 0 && (
        <div>
          <h4 className="text-sm font-medium text-gray-400 mb-3">Unavailable</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {unavailableSlots.map((slot) => (
              <div
                key={slot.id}
                className="p-3 text-sm font-medium rounded-xl border-2 border-gray-100 bg-gray-50 text-gray-400 cursor-not-allowed"
              >
                <div className="flex items-center justify-center">
                  <span>{slot.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}