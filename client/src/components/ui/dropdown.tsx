import React from 'react';
import { cn } from '@/lib/utils';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ChevronDown, Loader2 } from 'lucide-react';

interface DropdownProps {
  placeholder: string;
  value?: string;
  onValueChange: (value: string) => void;
  options: Array<{ id: string; name: string }>;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

export function Dropdown({
  placeholder,
  value,
  onValueChange,
  options,
  disabled = false,
  loading = false,
  className
}: DropdownProps) {
  return (
    <Select value={value} onValueChange={onValueChange} disabled={disabled || loading}>
      <SelectTrigger className={cn(
        "w-full h-12 text-left bg-white border-2 border-gray-200 rounded-2xl px-4 py-3",
        "hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "transition-all duration-200",
        className
      )}>
        <div className="flex items-center gap-3 w-full">
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin text-gray-500" />
          ) : null}
          <SelectValue placeholder={placeholder} className="text-gray-700" />
        </div>
        <ChevronDown className="h-4 w-4 text-gray-500 ml-auto" />
      </SelectTrigger>
      <SelectContent className="rounded-xl border-2 border-gray-100 shadow-lg">
        {options.map((option) => (
          <SelectItem
            key={option.id}
            value={option.id}
            className="px-4 py-3 cursor-pointer hover:bg-blue-50 focus:bg-blue-50 rounded-lg mx-1"
          >
            {option.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}