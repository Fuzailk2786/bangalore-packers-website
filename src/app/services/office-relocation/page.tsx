import type { Metadata } from 'next';
import ServiceDetail from '@/components/sections/service-detail';
import { SERVICES } from '@/lib/site';

export const metadata: Metadata = { title: 'Office Relocation in Bangalore', description: SERVICES[1].summary };

export default function OfficeRelocationPage() {
  return <ServiceDetail service={SERVICES[1]} />;
}
