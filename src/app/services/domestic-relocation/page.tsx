import type { Metadata } from 'next';
import ServiceDetail from '@/components/sections/service-detail';
import { SERVICES } from '@/lib/site';

export const metadata: Metadata = { title: 'Home and Domestic Relocation', description: SERVICES[0].summary };

export default function DomesticRelocationPage() {
  return <ServiceDetail service={SERVICES[0]} />;
}
