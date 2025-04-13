const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/5493816097754" 
      className="fixed bottom-4 right-4 z-50"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
        alt="WhatsApp"
        className="w-14 h-14 md:w-16 md:h-16 hover:scale-110 transition-transform"
      />
    </a>
  );
};

export default WhatsappButton;
