import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <a href="/" className="flex items-center">
        <span className="text-3xl font-bold">
          <span className="text-[#0066CC]">co</span>
          <span className="text-[#0066CC]">necta</span>
        </span>
        <span className="text-3xl font-bold block text-[#0066CC] ml-1">Recife</span>
      </a>
    </div>
  );
};

export default Logo;