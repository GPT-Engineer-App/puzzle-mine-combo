import React, { useState } from 'react';
import { cn } from "@/lib/utils";

const Tile = ({ letter, shake, hasMine, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const tileClasses = cn(
    "w-20 h-20 flex items-center justify-center text-2xl font-bold rounded-md cursor-pointer transition-all duration-200",
    letter === 'A' && "bg-red-200 hover:bg-red-300",
    letter === 'B' && "bg-blue-200 hover:bg-blue-300",
    letter === 'C' && "bg-green-200 hover:bg-green-300",
    shake && isHovered && "animate-shake"
  );

  return (
    <div 
      className={tileClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {letter}
    </div>
  );
};

export default Tile;