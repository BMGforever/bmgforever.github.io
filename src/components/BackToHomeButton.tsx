import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BackToHomeButton = () => {
  return (
    <Link
      to="/"
      className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition mb-4"
    >
      <ArrowLeft size={18} />
      Zurück zur Startseite
    </Link>
  );
};

export default BackToHomeButton;
