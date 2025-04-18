import { useState } from 'react';
import { pdf } from '@react-pdf/renderer';
import { Download } from 'lucide-react';
import { LeanCanvasPDF } from './LeanCanvasPDF';

const fields = [
  { id: 'problem', label: 'Problem' },
  { id: 'solution', label: 'Lösung' },
  { id: 'metrics', label: 'Schlüsselmetriken' },
  { id: 'unique', label: 'Alleinstellungsmerkmal' },
  { id: 'channels', label: 'Kanäle' },
  { id: 'customer', label: 'Kundensegmente' },
  { id: 'revenue', label: 'Einnahmequellen' },
  { id: 'cost', label: 'Kostenstruktur' },
  { id: 'advantage', label: 'Unfairer Vorteil' },
];

const LeanCanvasForm = () => {
  const [fieldValues, setFieldValues] = useState<Record<string, string>>({});

  const handleExport = async () => {
    const blob = await pdf(
      <LeanCanvasPDF data={fieldValues} />
    ).toBlob();

    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#f1f5f9] p-4">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
        Lean Canvas
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full bg-[#ffffff] p-6 rounded-2xl shadow-xl">
        {fields.map((field) => (
          <div
            key={field.id}
            className="flex flex-col border border-[#e2e8f0] rounded-xl p-4 shadow-sm bg-[#f8fafc]"
          >
            <label
              htmlFor={`canvas-${field.id}`}
              className="text-[#334155] font-semibold mb-2"
            >
              {field.label}
            </label>
            <textarea
              id={`canvas-${field.id}`}
              className="resize-none bg-[#ffffff] border border-[#cbd5e1] rounded-md p-3 text-sm text-[#1e293b] min-h-[80px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Schreibe hier..."
              value={fieldValues[field.id] || ''}
              onChange={(e) =>
                setFieldValues((prev) => ({
                  ...prev,
                  [field.id]: e.target.value,
                }))
              }
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={handleExport}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium shadow-md transition"
        >
          <Download size={18} />
          PDF anzeigen
        </button>
      </div>
    </div>
  );
};

export default LeanCanvasForm;
