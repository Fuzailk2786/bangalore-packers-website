export default function WhatsAppButton() {
  const message = encodeURIComponent("Hi Apex Logistics, I want an estimate quote to shift my household goods.");
  return (
    <a 
      href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${message}`}
      className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-2xl transition transform hover:scale-105 flex items-center justify-center"
      target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
    >
      <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.488 1.449 5.413 1.451 5.428 0 9.845-4.394 9.848-9.799.002-2.618-1.018-5.08-2.873-6.938C17.117 2.01 14.654.99 12.01.99c-5.435 0-9.85 4.397-9.854 9.801-.001 1.926.501 3.81 1.456 5.414l-.991 3.616 3.702-.977z" />
      </svg>
    </a>
  );
}