import type { Metadata } from 'next';
import ServiceDetail from '@/components/sections/service-detail';
import { SERVICES } from '@/lib/site';

export const metadata: Metadata = { title: 'Car and Bike Transport', description: SERVICES[2].summary };

export default function VehicleTransportPage() {
  return <ServiceDetail service={SERVICES[2]} />;
}
