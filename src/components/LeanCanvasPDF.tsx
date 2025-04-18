import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    padding: 40,
    fontSize: 10,
    flexDirection: 'column',
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 24,
    paddingBottom: 12,
    borderBottom: '1pt solid #e2e8f0',
  },
  titlePrimary: {
    fontSize: 20,
    color: '#1e293b',
    fontWeight: 'medium',
  },
  titleEmphasized: {
    fontSize: 24,
    color: '#3b82f6',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 10,
    color: '#64748b',
    marginTop: 4,
  },
  canvasWrapper: {
    width: '100%',
    border: '1pt solid #e2e8f0',
    padding: 10,
    borderRadius: 6,
    backgroundColor: '#f8fafc',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: 6,
  },
  canvasBox: {
    width: '30%',
    maxHeight: 110,
    padding: 6,
    borderRadius: 6,
    backgroundColor: '#ffffff',
    border: '1pt solid #dbeafe',
    overflow: 'hidden',
    justifyContent: 'flex-start',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 10,
    marginBottom: 4,
    color: '#2563eb',
  },
  footer: {
    marginTop: 20,
    fontSize: 9,
    color: '#64748b',
    textAlign: 'center',
    borderTop: '1pt solid #e2e8f0',
    paddingTop: 10,
  },
});

// 🧠 Hilfsfunktion für automatische Schriftgröße
const getFontSize = (text: string): number => {
  const length = text.trim().length;
  if (length > 1000) return 3.5;
  if (length > 800) return 5.5;
  if (length > 600) return 6;
  if (length > 400) return 7;
  if (length > 250) return 8;
  return 9;
};

type Props = {
  data: Record<string, string>;
};

export const LeanCanvasPDF = ({ data }: Props) => (
  <Document>
    <Page size="A4" orientation="landscape" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text>
          <Text style={styles.titlePrimary}>Alex’ </Text>
          <Text style={styles.titleEmphasized}>Lean Canvas</Text>
          <Text style={styles.titlePrimary}> Export</Text>
        </Text>
        <Text style={styles.subtitle}>
          www.alex-startup-spielplatz.de · Exportiert am {new Date().toLocaleDateString()}
        </Text>
      </View>

      {/* Canvas */}
      <View style={styles.canvasWrapper}>
        {Object.entries(data)
          .filter(([_, value]) => value.trim().length > 0)
          .map(([id, value]) => (
            <View key={id} style={styles.canvasBox}>
              <Text style={styles.label}>{id}</Text>
              <Text
                style={{
                  fontSize: getFontSize(value),
                  color: '#1e293b',
                  lineHeight: 1.3,
                }}
              >
                {value}
              </Text>
            </View>
          ))}
      </View>

      {/* Footer */}
      <Text style={styles.footer}>
        Erstellt mit Alex’ Startup Spielplatz – Einfach, pragmatisch, kein Quatsch.
      </Text>
    </Page>
  </Document>
);
