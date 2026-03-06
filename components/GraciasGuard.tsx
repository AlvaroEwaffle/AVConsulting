'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function GraciasGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('av_lead_captured') === '1') {
      setAllowed(true);
    } else {
      router.replace('/');
    }
  }, [router]);

  if (!allowed) return null;
  return <>{children}</>;
}
