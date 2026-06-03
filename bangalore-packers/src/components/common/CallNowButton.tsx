export default function CallNowButton() {
  return (
    <a 
      href="tel:+919876543210" 
      className="md:hidden fixed bottom-0 left-0 w-1/2 bg-blue-700 hover:bg-blue-800 text-white text-center py-3.5 font-bold z-40 border-r border-blue-800 shadow-inner tracking-wide flex items-center justify-center gap-2"
    >
      📞 Call Now
    </a>
  );
}