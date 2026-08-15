import { jsPDF } from 'jspdf';
import { PERSONAL_INFO, SKILL_CATEGORIES, PROJECTS, RESEARCH_ITEMS, INTERNSHIPS, EDUCATION, CERTIFICATIONS } from '../data/portfolioData';

export const downloadResumePdf = () => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 14;
  const contentWidth = pageWidth - margin * 2;
  let y = 14;

  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - 12) {
      doc.addPage();
      y = 14;
    }
  };

  // Header / Name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(15, 23, 42); // slate-900
  doc.text(PERSONAL_INFO.name.toUpperCase(), margin, y);
  y += 5.5;

  // Subtitle
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(79, 70, 229); // indigo-600
  doc.text('SOFTWARE ENGINEER  |  FULL STACK DEVELOPER  |  4x PATENT CO-INVENTOR', margin, y);
  y += 4.5;

  // Contact Row
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105); // slate-600
  const contactText = `Email: ${PERSONAL_INFO.email}  |  Phone: ${PERSONAL_INFO.phone}  |  Location: ${PERSONAL_INFO.location}`;
  doc.text(contactText, margin, y);
  y += 4;

  const linksText = `LinkedIn: ${PERSONAL_INFO.linkedin}  |  GitHub: ${PERSONAL_INFO.github}  |  Portfolio: dimmika-portfolio.dev`;
  doc.text(linksText, margin, y);
  y += 5;

  // Divider
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.4);
  doc.line(margin, y, pageWidth - margin, y);
  y += 4;

  // Helper for Section Titles
  const addSectionTitle = (title: string) => {
    checkPageBreak(8);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(30, 41, 59); // slate-800
    doc.text(title.toUpperCase(), margin, y);
    y += 1.5;
    doc.setDrawColor(99, 102, 241); // indigo-500
    doc.setLineWidth(0.6);
    doc.line(margin, y, margin + 28, y);
    y += 4;
  };

  // Executive Summary
  addSectionTitle('Professional Summary');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(51, 65, 85);
  const bioLines = doc.splitTextToSize(
    'B.Tech Computer Engineering student at SAGE University (CGPA 8.35 | Top 10% of class) with 24+ certifications across AWS, GenAI, Web Dev & IoT. Co-inventor on 4 Indian Patent Applications (AI Raag synthesis, Digital Twin physical asset control, and cryptographic tamper-evident monitoring) and co-author of an accepted Wiley Scrivener book chapter. Experienced in React.js, Next.js 16, Node.js, Python, Supabase, and cloud services.',
    contentWidth
  );
  doc.text(bioLines, margin, y);
  y += bioLines.length * 3.6 + 2.5;

  // Technical Skills
  addSectionTitle('Technical Skills');
  doc.setFontSize(8);
  const skillLines = [
    { label: 'Frontend', text: 'React.js, Next.js 16, JavaScript (ES6+), TypeScript, HTML5, CSS3, Tailwind CSS v4, Redux, Tone.js, Web Audio API' },
    { label: 'Backend & APIs', text: 'Node.js, Express.js, RESTful APIs, JWT Authentication, Python, Cryptographic Ledgers, MQTT/HTTP' },
    { label: 'Databases & Analytics', text: 'Supabase (PostgreSQL), MongoDB Atlas, SQL Server, Power BI, Tableau, Pandas, NumPy' },
    { label: 'AI, Cloud & DevOps', text: 'Groq AI (Llama 3), OpenAI & Gemini APIs, Agentic AI, AWS Cloud Practitioner, Amazon Location Service, Make.com' },
    { label: 'Tools & Practices', text: 'Git, GitHub, VS Code, Figma, Vercel, Netlify, Agile SDLC, CI/CD, Microservices' }
  ];

  skillLines.forEach((s) => {
    checkPageBreak(4.5);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    doc.text(`• ${s.label}: `, margin, y);
    const labelWidth = doc.getTextWidth(`• ${s.label}: `);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    const textLines = doc.splitTextToSize(s.text, contentWidth - labelWidth);
    doc.text(textLines, margin + labelWidth, y);
    y += textLines.length * 3.6;
  });
  y += 2.5;

  // Patents & Intellectual Property
  addSectionTitle('Indian Patents & Scholarly Research');
  RESEARCH_ITEMS.forEach((res) => {
    checkPageBreak(12);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    const titleText = `${res.title} (${res.referenceId})`;
    const splitTitle = doc.splitTextToSize(titleText, contentWidth - 26);
    doc.text(splitTitle, margin, y);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(79, 70, 229);
    doc.text(res.date.split('•')[0].trim(), pageWidth - margin, y, { align: 'right' });
    y += splitTitle.length * 3.6;

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(7.5);
    doc.setTextColor(71, 85, 105);
    doc.text(`Co-Inventors: ${res.coAuthors.join(', ')} | ${res.applicant || res.organization}`, margin + 2, y);
    y += 3.5;

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    const desc = doc.splitTextToSize(`• Abstract: ${res.description.substring(0, 160)}...`, contentWidth - 4);
    doc.text(desc, margin + 2, y);
    y += desc.length * 3.4 + 1.5;
  });
  y += 2;

  // Industry Internships
  addSectionTitle('Industry Internship Experience');
  INTERNSHIPS.forEach((intern) => {
    checkPageBreak(14);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    doc.text(`${intern.role} — ${intern.company}`, margin, y);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(71, 85, 105);
    doc.text(intern.period, pageWidth - margin, y, { align: 'right' });
    y += 3.8;

    if (intern.certificateId) {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7.5);
      doc.setTextColor(16, 185, 129); // emerald-600
      doc.text(`Certificate ID: ${intern.certificateId}`, margin + 2, y);
      y += 3.5;
    }

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(51, 65, 85);
    intern.bulletPoints.slice(0, 2).forEach((bp) => {
      const splitBp = doc.splitTextToSize(`• ${bp}`, contentWidth - 4);
      doc.text(splitBp, margin + 2, y);
      y += splitBp.length * 3.3;
    });
    y += 1.5;
  });

  // Featured Engineering Projects
  addSectionTitle('Featured Software Projects');
  PROJECTS.forEach((proj) => {
    checkPageBreak(12);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    doc.text(`${proj.title} | ${proj.subtitle}`, margin, y);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(79, 70, 229);
    doc.text(proj.role, pageWidth - margin, y, { align: 'right' });
    y += 3.6;

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(7.5);
    doc.setTextColor(100, 116, 139);
    doc.text(`Tech Stack: ${proj.techStack.join(', ')}`, margin + 2, y);
    y += 3.4;

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    const pDesc = doc.splitTextToSize(`• ${proj.bulletPoints[0]}`, contentWidth - 4);
    doc.text(pDesc, margin + 2, y);
    y += pDesc.length * 3.3 + 1.5;
  });

  // Education
  addSectionTitle('Education');
  checkPageBreak(10);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text(`${EDUCATION.degree} in ${EDUCATION.field}`, margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(71, 85, 105);
  doc.text(EDUCATION.period, pageWidth - margin, y, { align: 'right' });
  y += 3.6;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(51, 65, 85);
  doc.text(`${EDUCATION.institution}, ${EDUCATION.location} | CGPA: ${EDUCATION.cgpa} (Top 10% of Engineering Cohort)`, margin + 2, y);
  y += 4.5;

  // Selected Honors & Certifications
  addSectionTitle('Key Certifications (24+ Total)');
  checkPageBreak(12);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(51, 65, 85);
  const certHighlights = [
    '• AWS Cloud Practitioner Essentials & Amazon Location Service (AWS, 2026)',
    '• GenAI Powered Data Analytics Job Simulation (Tata / Forage, 2026)',
    '• AI Factory — AI/ML API Solution Completion (Lablab.ai, Cert ID: CMSR96WHV01FPS601E9ZPG8JN)',
    '• Next-Gen UAS: AI/ML for Drones (IIT Indore & MeitY, 40+ Hrs)',
    '• Green Hydrogen Junior Technician Electrolyzer (NCVET Grade B, 330 Hrs)',
    '• Build Your Own Static Website & 25 Under 5 Milestone (NxtWave CCBP 4.0)'
  ];
  certHighlights.forEach((ch) => {
    doc.text(ch, margin + 2, y);
    y += 3.4;
  });

  // Save the PDF
  doc.save('Dimmika_Rajak_SWE_Resume.pdf');
};
