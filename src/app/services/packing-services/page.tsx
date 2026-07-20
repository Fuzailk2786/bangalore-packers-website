import type { Metadata } from 'next';
import ServiceDetail from '@/components/sections/service-detail';
import { SERVICES } from '@/lib/site';

export const metadata: Metadata = { title: 'Packing and Unpacking Services', description: SERVICES[3].summary };

export default function PackingServicesPage() {
  return <ServiceDetail service={SERVICES[3]} />;
}
