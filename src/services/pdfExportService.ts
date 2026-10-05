import { jsPDF } from 'jspdf';

export interface PolicyBriefData {
  title: string;
  state: string;
  executiveSummary: string;
  recommendations: string[];
  preparedBy: string;
  date: string;
}

export function generateCabinetPolicyBriefPDF(data: PolicyBriefData): void {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  doc.setFillColor(7, 7, 9);
  doc.rect(0, 0, 210, 30, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.text('GOVERNMENT OF INDIA - CABINET POLICY BRIEF', 15, 18);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text(`Department of Land Resources (PME Division) | Date: ${data.date}`, 15, 25);
  doc.save(`Cabinet_Policy_Brief_${data.state.replace(/\s+/g, '_')}.pdf`);
}
