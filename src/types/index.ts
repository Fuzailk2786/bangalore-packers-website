export interface LeadInput {
  name: string;
  email: string;
  phone: string;
  movingFrom: string;
  movingTo: string;
  moveDate: string;
  serviceType: string;
  itemsDescription?: string;
}

export interface CallbackInput {
  phone: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  text: string;
}
