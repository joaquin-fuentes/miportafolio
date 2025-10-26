const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/5493816097754"
      className="fixed bottom-4 right-4 z-50 group"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
        <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse"></div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
          alt="WhatsApp"
          className="relative w-14 h-14 md:w-16 md:h-16 hover:scale-110 transition-all duration-300 group-hover:rotate-12"
        />
      </div>
    </a>
  );
};

export default WhatsappButton;
