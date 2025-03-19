'use client';

import { Spinner } from '@/components/ui';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Spinner className="h-16 w-16 text-amber-900/50 mx-auto" />
      <p className="mt-4 text-amber-900/70 text-lg">Cargando...</p>
    </div>
  );
}
