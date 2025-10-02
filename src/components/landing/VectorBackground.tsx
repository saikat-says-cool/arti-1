"use client";

import React from 'react';
import {
  FaHandshake,
  FaGlobe,
  FaMoneyBillWave,
  FaBuilding,
  FaChartLine,
  FaBullseye,
  FaLightbulb,
  FaUsers,
  FaChartPie,
  FaEnvelope,
} from 'react-icons/fa6';

const icons = [
  { Icon: FaHandshake, top: '10%', left: '5%', size: 28 },
  { Icon: FaGlobe, top: '20%', left: '80%', size: 32 },
  { Icon: FaMoneyBillWave, top: '70%', left: '10%', size: 32 },
  { Icon: FaUsers, top: '80%', left: '90%', size: 28 },
  { Icon: FaBullseye, top: '5%', left: '50%', size: 24 },
  { Icon: FaEnvelope, top: '90%', left: '40%', size: 24 },
  { Icon: FaBuilding, top: '30%', left: '20%', size: 28 },
  { Icon: FaLightbulb, top: '40%', left: '95%', size: 24 },
  { Icon: FaChartLine, top: '95%', left: '5%', size: 28 },
  { Icon: FaChartPie, top: '5%', left: '90%', size: 24 },
];

const VectorBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden opacity-[0.03] pointer-events-none">
      {icons.map(({ Icon, top, left, size }, index) => (
        <Icon
          key={index}
          className="absolute text-foreground"
          style={{
            top,
            left,
            width: `${size * 0.25}rem`,
            height: `${size * 0.25}rem`,
            transform: `translate(-50%, -50%) rotate(${Math.random() * 90 - 45}deg)`,
          }}
        />
      ))}
    </div>
  );
};

export default VectorBackground;