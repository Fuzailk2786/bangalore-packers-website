import type { Metadata } from 'next';
import ServiceDetail from '@/components/sections/service-detail';
import { SERVICES } from '@/lib/site';

export const metadata: Metadata = { title: 'International Relocation from Bangalore', description: SERVICES[4].summary };

export default function InternationalRelocationPage() {
  return <ServiceDetail service={SERVICES[4]} />;
}
