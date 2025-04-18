import { useEffect, useState } from "react";
import { Plus, Save, Trash2, Pencil } from "lucide-react";

const columns = [
  { key: "startup", label: "🏷 Startup", exportLabel: "Startup" },
  { key: "model", label: "💡 Geschäftsmodell", exportLabel: "Geschäftsmodell" },
  { key: "gap", label: "🎯 Marktlücke", exportLabel: "Marktlücke" },
  { key: "whyNotBefore", label: "❓ Warum hat das vorher niemand gemacht?", exportLabel: "Warum vorher niemand?" },
  { key: "persona", label: "👥 Zielgruppe / Persona", exportLabel: "Zielgruppe / Persona" },
  { key: "firstEuro", label: "💶 Wie wurden die ersten € verdient?", exportLabel: "Wie wurden die ersten € verdient?" },
  { key: "learning", label: "🧠 Persönliches Learning", exportLabel: "Persönliches Learning" },
];

type AnalysisEntry = {
  id: string;
  startup: string;
  model: string;
  gap: string;
  whyNotBefore: string;
  persona: string;
  firstEuro: string;
  learning: string;
};

const LOCAL_KEY = "startup_analysis_entries_v1";

function loadEntries(): AnalysisEntry[] {
  const raw = localStorage.getItem(LOCAL_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function saveEntries(entries: AnalysisEntry[]) {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(entries));
}

const emptyEntry = (): AnalysisEntry => ({
  id: crypto.randomUUID(),
  startup: "",
  model: "",
  gap: "",
  whyNotBefore: "",
  persona: "",
  firstEuro: "",
  learning: "",
});

const DailyAnalysis = () => {
  const [entries, setEntries] = useState<AnalysisEntry[]>([]);
  const [editId, setEditId] = useState<string | null>(null);
  const [draft, setDraft] = useState<AnalysisEntry>(emptyEntry());

  useEffect(() => {
    setEntries(loadEntries());
  }, []);

  const startEdit = (entry: AnalysisEntry) => {
    setEditId(entry.id);
    setDraft({ ...entry });
  };

  const handleSave = () => {
    if (!draft.startup.trim() || !draft.model.trim() || !draft.gap.trim()) return;

    const newEntries = editId
      ? entries.map((e) => (e.id === editId ? { ...draft } : e))
      : [...entries, { ...draft }];

    setEntries(newEntries);
    saveEntries(newEntries);
    setEditId(null);
    setDraft(emptyEntry());
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Eintrag wirklich löschen?")) {
      const filtered = entries.filter((e) => e.id !== id);
      setEntries(filtered);
      saveEntries(filtered);
    }
  };

  function exportToCSV(entries: AnalysisEntry[]) {
    if (entries.length === 0) return;

    const headers = columns.map((col) => `"${col.exportLabel}"`);
    const rows = entries.map((entry) =>
      columns
        .map((col) => {
          const value = (entry as any)[col.key] || "";
          return `"${value.replace(/"/g, '""')}"`;
        })
        .join(",")
    );

    const csvContent = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const filename = `startup_analysen_export_${new Date().toISOString().slice(0, 10)}.csv`;

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const handleDeleteAll = () => {
  if (window.confirm("Willst du wirklich alle Einträge löschen? Das kann nicht rückgängig gemacht werden.")) {
    setEntries([]);
    saveEntries([]);
  }
};


  return (
    <div className="min-h-screen bg-[#f1f5f9] p-4 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
        Tägliche Startup-Analyse
      </h1>
      <div className="w-full max-w-7xl bg-white rounded-2xl shadow-xl p-6 overflow-x-auto">
        <table className="w-full text-sm border-separate border-spacing-y-2">
          <thead>
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="text-left text-[#334155] font-semibold pb-2"
                >
                  {col.label}
                </th>
              ))}
              <th className="w-[50px]"></th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry) =>
              editId === entry.id ? (
                <tr key={entry.id} className="bg-[#f8fafc] rounded-lg">
                  {columns.map((col) => (
                    <td key={col.key} className="p-2">
                      <textarea
                        className="w-full bg-white border border-[#cbd5e1] rounded-md p-2 text-[#1e293b] resize-none"
                        value={(draft as any)[col.key]}
                        onChange={(e) =>
                          setDraft((d) => ({
                            ...d,
                            [col.key]: e.target.value,
                          }))
                        }
                        rows={2}
                      />
                    </td>
                  ))}
                  <td className="p-2 align-middle">
                    <div className="flex items-center justify-center h-full">
                      <button
                        className="bg-green-600 hover:bg-green-700 text-white rounded-md p-2"
                        title="Speichern"
                        onClick={handleSave}
                      >
                        <Save size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ) : (
                <tr key={entry.id} className="hover:bg-[#f1f5f9] transition">
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      className="p-2 max-w-[250px] whitespace-pre-line align-top"
                    >
                      {(entry as any)[col.key]}
                    </td>
                  ))}
                  <td className="p-2 flex flex-col items-center gap-2 justify-center">
                    <button
                      className="bg-blue-600 hover:bg-blue-700 text-white rounded-md p-2"
                      title="Bearbeiten"
                      onClick={() => startEdit(entry)}
                    >
                      <Pencil size={16} />
                    </button>
                    <button
                      className="bg-red-600 hover:bg-red-700 text-white rounded-md p-2"
                      title="Löschen"
                      onClick={() => handleDelete(entry.id)}
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              )
            )}

            {/* Neue Zeile */}
            {editId === null && (
              <tr className="bg-[#f8fafc] rounded-lg">
                {columns.map((col) => (
                  <td key={col.key} className="p-2">
                    <textarea
                      className="w-full bg-white border border-[#cbd5e1] rounded-md p-2 text-[#1e293b] resize-none"
                      value={(draft as any)[col.key]}
                      onChange={(e) =>
                        setDraft((d) => ({
                          ...d,
                          [col.key]: e.target.value,
                        }))
                      }
                      rows={2}
                    />
                  </td>
                ))}
                <td className="p-2 align-middle">
                  <div className="flex items-center justify-center h-full">
                    <button
                      className="bg-green-600 hover:bg-green-700 text-white rounded-md p-2"
                      title="Hinzufügen"
                      onClick={handleSave}
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>

       <div className="mt-6 flex justify-between flex-wrap gap-4 items-center">
  <button
    onClick={handleDeleteAll}
    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium shadow-md transition"
  >
    Alle Einträge löschen
  </button>

  <button
    onClick={() => exportToCSV(entries)}
    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium shadow-md transition"
  >
    Als CSV exportieren
  </button>
</div>

      </div>
    </div>
  );
};

export default DailyAnalysis;
