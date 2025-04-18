import BackToHomeButton from "../components/BackToHomeButton";
import LeanCanvasForm from "../components/LeanCanvasForm";

const LeanCanvasPage = () => {
  return (
    <div className="min-h-screen bg-[#f1f5f9] px-4 py-6">
      <div className="max-w-screen-xl mx-auto">
        <BackToHomeButton />
        <LeanCanvasForm />
      </div>
    </div>
  );
};


export default LeanCanvasPage;
