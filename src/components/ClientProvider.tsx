// src/components/ClientProvider.tsx
'use client';

import { SessionProvider } from 'next-auth/react';
import Header from './Header';

interface ClientProviderProps {
  children: React.ReactNode;
}

export default function ClientProvider({ children }: ClientProviderProps) {
  return (
    <SessionProvider>
      <Header child={children}/>
      
    </SessionProvider>
  );
}
