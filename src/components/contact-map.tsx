export default function ContactMap() {
  return (
    <div className="w-full h-[340px] rounded-xl overflow-hidden shadow">
      <iframe
        title="Jacob detailing - Auto detailing Toruń"
        src="https://maps.google.com/maps?q=Jacob%20Detailing%20-%20Auto%20Detailing%20Toru%C5%84,%20ul.%20Lipnowska%2025/29,%2087-100%20Toru%C5%84&t=&z=14&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
