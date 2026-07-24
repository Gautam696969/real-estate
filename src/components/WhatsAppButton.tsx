const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/12247723760"
      className="fixed bottom-3 left-3 w-[50px] h-[50px] bg-gold-600 rounded-full flex items-center justify-center z-[2147483647] shadow-[0_5px_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-110 hover:shadow-[0_8px_25px_rgba(37,211,102,0.4)]"
      target="_blank"
      aria-label="WhatsApp Chat"
    >
      <i className="fa-brands fa-whatsapp text-white text-3xl"></i>
    </a>
  );
};

export default WhatsAppButton;
