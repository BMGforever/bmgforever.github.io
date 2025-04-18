import BackToHomeButton from "../components/BackToHomeButton";
import DailyAnalysis from "../components/DailyAnalysis";

const DailyAnalysisPage = () => {
  return (
    <div className="min-h-screen bg-[#f1f5f9] px-4 py-6">
      <div className="max-w-screen-xl mx-auto">
        <BackToHomeButton />
        <DailyAnalysis />
      </div>
    </div>
  );
};

export default DailyAnalysisPage;
