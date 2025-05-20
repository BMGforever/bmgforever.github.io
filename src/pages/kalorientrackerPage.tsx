import { ArrowLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";

const KalorienTrackerPage = () => {
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
          📱 Kalorien-Tracker (Beta)
        </h1>

        <p className="text-[#334155] text-center mb-6">
          Teste die App zum Scannen & Tracken von Lebensmitteln. Die App ist in
          Entwicklung – du kannst sie als Android-Nutzer direkt ausprobieren.
        </p>

        <div className="bg-white rounded-2xl shadow-md p-6 mb-8 border border-blue-200">
          <h2 className="text-xl font-semibold text-[#1e293b] mb-3">
            ⬇️ APK herunterladen
          </h2>
          <a
            href="/downloads/release-build.apk"
            className="inline-flex items-center bg-blue-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            <Download size={20} className="mr-2" />
            Jetzt herunterladen(Schwöre ist keine Malware)
          </a>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 border border-slate-200">
          <h2 className="text-xl font-semibold text-[#1e293b] mb-3">
            📖 So installierst du die App
          </h2>
          <ol className="list-decimal pl-6 space-y-2 text-[#475569]">
            <li>
              APK-Datei über den Button oben auf dein Android-Gerät laden.
            </li>
            <li>
              Öffne die Datei. Android zeigt eine Sicherheitswarnung wegen
              „unbekannter Quelle“.
            </li>
            <li>
              Tippe auf <strong>„Installieren trotzdem erlauben“</strong> bzw.
              aktiviere die Berechtigung in den Einstellungen.
            </li>
            <li>Nach der Installation kannst du die App ganz normal öffnen.</li>
          </ol>
        </div>

        <div className="mt-8 text-sm text-center text-[#64748b]">
          Die App speichert alle Daten nur lokal auf deinem Gerät. Keine
          Registrierung, kein Cloud-Sync.
        </div>
      </div>
    </div>
  );
};

export default KalorienTrackerPage;
