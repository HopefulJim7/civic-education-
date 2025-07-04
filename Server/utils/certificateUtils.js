import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';
import axios from 'axios';

export const generateCertificate = async ({ name, topic, score, avatarUrl }) => {
  const doc = new PDFDocument({ size: 'A4', layout: 'landscape' });
  const filename = `${name.replace(/\s+/g, '_')}-${topic.replace(/\s+/g, '_')}.pdf`;
  const filePath = path.join('certificates', filename);

  doc.pipe(fs.createWriteStream(filePath));
  doc.image('assets/certificate-template.jpg', 0, 0, { width: doc.page.width });

  if (avatarUrl) {
    const response = await axios.get(avatarUrl, { responseType: 'arraybuffer' });
    fs.writeFileSync('temp-avatar.png', response.data);
    doc.circle(100, 150, 40).clip().image('temp-avatar.png', 60, 110, { width: 80 }).restore();
  }

  doc.fontSize(28).text('Certificate of Completion', { align: 'center' });
  doc.moveDown();
  doc.fontSize(18).text(`${name} completed`, { align: 'center' });
  doc.font('Helvetica-Bold').text(`"${topic}"`, { align: 'center' });
  doc.font('Helvetica').text(`Final Score: ${score}%`, { align: 'center' });
  doc.moveDown();
  doc.text(`Issued: ${new Date().toLocaleDateString()}`, { align: 'center' });
  doc.image('assets/stamp.png', 500, 360, { width: 100 });
  doc.end();

  return filePath;
};