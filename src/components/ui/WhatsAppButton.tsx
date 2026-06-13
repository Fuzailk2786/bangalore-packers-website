"use client";

import React, { useEffect, useState } from "react";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delays display to allow core page elements to render first
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  },);

  if (!isVisible) return null;

  const whatsappUrl = "https://wa.me/919876543210?text=Hello%20Portavo%20Movers%2C%20I%20would%20like%20to%20request%20a%20free%20relocation%20quote%20for%20my%20household%20items.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-emerald-500 text-white p-3.5 rounded-full shadow-2xl hover:bg-emerald-600 transition-all duration-300 transform hover:scale-115 focus:outline-3 focus:outline-offset-4 focus:outline-emerald-500 animate-bounce"
      aria-label="Contact Portavo Packers and Movers on WhatsApp for an Instant Quote"
    >
      <svg 
        className="w-7 h-7 fill-current" 
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.734-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.859-4.42 9.863-9.864.002-2.637-1.03-5.114-2.905-6.99C16.558 1.874 14.09 1.84 11.453 1.84c-5.444 0-9.866 4.421-9.87 9.864 0 1.696.442 3.35 1.284 4.821L1.88 22.111l5.888-1.543z" />
      </svg>
    </a>
  );
}
