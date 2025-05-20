import { Link } from "react-router-dom";
import { FileText, BookOpen } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectPath = sessionStorage.getItem("redirectPath");
    if (redirectPath) {
      sessionStorage.removeItem("redirectPath");
      navigate(redirectPath);
    }
  }, []);
  return (
    <div className="min-h-screen bg-[#f9fafb] flex flex-col items-center justify-center p-6">
      {/* Intro */}
      <div className="max-w-2xl text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          Alex’ Startup-Spielplatz 🧠
        </h1>
        <p className="text-[#334155] text-lg">
          Ich tue mich schwer, ein gutes Problem für ein Startup zu finden, also
          habe ich diese Seite gebaut, um gezielt darin besser zu werden. Hier
          sammle, analysiere und lerne ich – strukturiert mit Lean Canvas und
          täglichen Challenges.
        </p>
      </div>

      {/* Lean Startup Arbeitsstil */}
      <div className="w-full max-w-4xl mb-16">
        <div className="bg-white border-l-4 border-blue-500 rounded-2xl shadow-md p-6 md:p-8 text-[#475569]">
          <div className="flex items-start gap-4 mb-4">
            <div className="text-3xl text-blue-600">🛠️</div>
            <h2 className="text-2xl font-bold text-[#1e293b]">
              Wie ich an Ideen arbeite
            </h2>
          </div>
          <p className="leading-relaxed mb-4">
            Ich halte nichts davon, eine Idee monatelang im Kopf zu drehen, ohne
            sie zu testen{" "}
            <span className="text-blue-500">(durch leidige Erfahrung)</span>.
            Ich will schnell rausfinden, was funktioniert – und was nicht.
          </p>
          <p className="leading-relaxed mb-4">
            Deshalb arbeite ich mit dem{" "}
            <strong className="text-blue-600">Lean-Startup-Ansatz</strong>: Ich
            baue etwas Kleines, zeige es jemandem, lerne daraus – und mache
            weiter. Ohne Drama, ohne Perfektion.
          </p>
          <p className="italic text-blue-600 font-medium">
            Weniger planen, mehr machen.
          </p>
        </div>
      </div>

      {/* Navigation zu Tools */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {/* Lean Canvas Card */}
        <Link
          to="/canvas"
          className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition flex flex-col items-start border border-slate-200 hover:border-blue-500"
        >
          <FileText
            size={36}
            className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-200"
          />
          <h2 className="text-xl font-semibold text-[#1e293b] mb-2">
            Lean Canvas ausfüllen
          </h2>
          <p className="text-[#475569]">
            Entwickle strukturiert Geschäftsmodelle mit dem Lean Canvas.
            Exportiere dein Modell als PDF.
          </p>
        </Link>

        {/* Hausaufgabe Card */}
        <Link
          to="/analyse"
          className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition flex flex-col items-start border border-slate-200 hover:border-blue-500"
        >
          <BookOpen
            size={36}
            className="text-green-600 mb-4 group-hover:scale-110 transition-transform duration-200"
          />
          <h2 className="text-xl font-semibold text-[#1e293b] mb-2">
            Tägliche Startup-Analyse
          </h2>
          <p className="text-[#475569]">
            Untersuche täglich ein Startup: Warum hat es funktioniert – und
            warum vorher nicht?
          </p>
        </Link>
      </div>
      {/* Meine Projekte */}
      <div className="mt-20 w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-[#1e293b] mb-6 text-center">
          Meine Projekte
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Self-Check App */}
          <a
            href="/mvps/self-check/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition flex flex-col items-start border border-slate-200 hover:border-blue-500"
          >
            <span className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-200">
              ❤️
            </span>
            <h3 className="text-xl font-semibold text-[#1e293b] mb-2">
              Meine Hypochonder App – Self-Check App
            </h3>
            <p className="text-[#475569]">
              Eine minimalistische App für regelmäßige Selbstuntersuchungen –
              sich zu stressen ist viel zu anstrengend.
            </p>
          </a>

          {/* Kalorientracker */}
          <Link
            to="/kalorientracker"
            className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition flex flex-col items-start border border-slate-200 hover:border-blue-500"
          >
            <span className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-200">
              📱
            </span>
            <h3 className="text-xl font-semibold text-[#1e293b] mb-2">
              Mein Kalorien-Tracker
            </h3>
            <p className="text-[#475569]">
              Android-App zum Scannen & Tracken von Lebensmitteln. Weil
              MyFitnesPal ganz schöne kacke geworden ist{" "}
              <strong className="text-blue-600">Jetzt testen</strong>
            </p>
          </Link>
        </div>
      </div>

      {/* Kontakt-Sektion */}
      <div className="mt-16 w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-md p-6 md:p-8 text-[#475569] text-center">
        <h2 className="text-2xl font-bold text-[#1e293b] mb-2">
          Du willst zu mir Kontakt aufnehmen?
        </h2>
        <p className="mb-4">
          Schreib mir gern per E-Mail – ich freue mich über Austausch!
        </p>
        <a
          href="#"
          onClick={() =>
            (window.location.href =
              "mailto:" + ["kontakt", "alexandersimon.de"].join("@"))
          }
          className="text-blue-600 hover:text-blue-800 hover:underline font-medium transition"
        >
          kontakt [at] alexandersimon.de
        </a>
      </div>
    </div>
  );
};

export default Home;
