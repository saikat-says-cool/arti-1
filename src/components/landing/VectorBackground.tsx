"use client";

import React from 'react';
import {
  Briefcase,
  LineChart,
  Globe,
  Users,
  Target,
  Mail,
  Bot,
  Building,
  Handshake,
  Lightbulb,
  BarChart,
  PieChart,
} from 'lucide-react';

const icons = [
  { Icon: Briefcase, top: '10%', left: '5%', size: 24 },
  { Icon: LineChart, top: '20%', left: '80%', size: 32 },
  { Icon: Globe, top: '70%', left: '10%', size: 28 },
  { Icon: Users, top: '80%', left: '90%', size: 24 },
  { Icon: Target, top: '5%', left: '50%', size: 20 },
  { Icon: Mail, top: '90%', left: '40%', size: 20 },
  { Icon: Bot, top: '50%', left: '50%', size: 40 },
  { Icon: Building, top: '30%', left: '20%', size: 28 },
  { Icon: Handshake, top: '60%', left: '70%', size: 32 },
  { Icon: Lightbulb, top: '40%', left: '95%', size: 24 },
  { Icon: BarChart, top: '95%', left: '5%', size: 28 },
  { Icon: PieChart, top: '5%', left: '90%', size: 20 },
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