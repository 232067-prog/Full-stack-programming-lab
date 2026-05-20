'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function RouteEffects() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.__hotspringInit === 'function') {
      window.__hotspringInit();
    }
  }, [pathname]);

  return null;
}
