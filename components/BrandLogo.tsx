'use client';

/**
 * BrandLogo - Componente de logo de marca
 * 
 * Logo minimalista que se usa estratégicamente para dar sensación de marca premium/luxury
 */

import Image from 'next/image';
import { motion } from 'framer-motion';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  animate?: boolean;
}

export default function BrandLogo({ 
  size = 'md', 
  className = '',
  animate = false 
}: BrandLogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  const LogoComponent = (
    <div className={`${sizeClasses[size]} ${className} relative`}>
      <Image
        src="/icono.png"
        alt="Álvaro Villena"
        fill
        className="object-contain"
        priority
      />
    </div>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
      >
        {LogoComponent}
      </motion.div>
    );
  }

  return LogoComponent;
}
