import React from 'react';
import { MapPin, Clock } from 'lucide-react';

interface LocationCardProps {
  name: string;
  address: string;
  openingHours: string;
}

const LocationCard: React.FC<LocationCardProps> = ({ name, address, openingHours }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-lg">
      <div className="h-2 bg-[#7ed957]"></div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-[#0047B9] mb-3">{name}</h3>
        <div className="flex items-start mb-2">
          <MapPin size={18} className="text-[#0047B9] mr-2 mt-1" />
          <p className="text-gray-700">{address}</p>
        </div>
        <div className="flex items-start">
          <Clock size={18} className="text-[#0047B9] mr-2 mt-1" />
          <p className="text-gray-700">{openingHours}</p>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;