import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const DatenschutzPage = () => {
  return (
    <div className="min-h-screen bg-[#f9fafb] p-6 flex flex-col items-center justify-start">
      <div className="w-full max-w-2xl">
        <Link
          to="/"
          className="text-blue-600 hover:underline font-medium flex items-center mb-6"
        >
          <ArrowLeft size={18} className="mr-2" />
          Zurück zur Startseite
        </Link>

        <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">
          🔐 Datenschutzerklärung
        </h1>

        <div className="bg-white rounded-2xl shadow-md p-6 border border-slate-200 space-y-4 text-[#475569] text-sm leading-relaxed">
          <p>
            Deine Privatsphäre ist mir wichtig. Diese App speichert keine Daten
            auf einem Server. Alle eingegebenen Informationen, wie z. B. Scans
            oder Tagesanalysen, werden ausschließlich lokal auf deinem Gerät
            gespeichert.
          </p>

          <h2 className="text-lg font-semibold text-[#1e293b] mt-4">
            📡 API-Zugriffe
          </h2>
          <p>
            Die App ruft öffentlich verfügbare Produktinformationen über eine
            externe API ab (Open Food Facts). Dabei werden keine
            personenbezogenen Daten übertragen.
          </p>

          <h2 className="text-lg font-semibold text-[#1e293b] mt-4">
            ✉️ Kontaktdaten (optional)
          </h2>
          <p>
            Du kannst freiwillig deine Kontaktdaten (Name und E-Mail) eingeben,
            damit ich dich für Feedback oder Updates zur App kontaktieren kann.
            Diese Informationen werden nur auf deinen Knopfdruck an meine
            Datenbank übertragen, auf die nur ich Zugang habe.
          </p>

          <h2 className="text-lg font-semibold text-[#1e293b] mt-4">
            🛡️ Keine Registrierung, kein Tracking
          </h2>
          <p>
            Es gibt keine Nutzerkonten, keine Anmeldung und kein Tracking durch
            Drittanbieter (z. B. Google Analytics o. ä.).
          </p>

          <p className="pt-4 italic text-[#64748b]">Letztes Update: Mai 2025</p>
        </div>
      </div>
    </div>
  );
};

export default DatenschutzPage;
