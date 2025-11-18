export default function GoogleMapCard() {
  return (
    <div className="w-full h-96 flex justify-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d645.0065407484609!2d1.2839408019839782!3d43.618496062189145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aeb21b79ae85a7%3A0xc640573520b05009!2sEsp.%20Sainte-Germaine%2C%2031820%20Pibrac!5e1!3m2!1sfr!2sfr!4v1760861252823!5m2!1sfr!2sfr"
        width="100%"
        height="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      >
      </iframe>
    </div>
  );
}
