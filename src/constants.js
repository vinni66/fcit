export const CDN_BASE = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL.slice(0, -1)
  : import.meta.env.BASE_URL;

export const OFFICIAL_LINKS = {
  MAIN_SITE: 'https://www.gmu.ac.in/',
  FCIT_UG: 'https://www.gmu.ac.in/fcitug',
  FCIT_PG: 'https://www.gmu.ac.in/fcitpg',
  FCIT_SCA: 'https://www.gmu.ac.in/FCIT_SCA',
  ADMISSIONS: 'https://gmu.ac.in/admission-card/',
  PROGRAMS: 'https://www.gmu.ac.in/programsoffered',
  CIRCULARS: 'https://www.gmu.ac.in/academics_assessment',
  NOTIFICATIONS: 'https://gmu.ac.in/exam_assess1',
  STUDENT_ERP: 'https://erp.gmit.info/',
  BCA_SYLLABUS: 'https://gmu.ac.in/pdfview_assets/downloadmaterial/School%20of%20Computer%20Applications-Program%20Docs/BCA%20(2025-26%20Scheme).pdf',
  BCA_DS_SYLLABUS: 'https://gmu.ac.in/pdfview_assets/downloadmaterial/School%20of%20Computer%20Science%20-Program%20Docs/BCA-DS%20%282025-26%20Scheme%29.pdf',
  MCA_SYLLABUS: 'https://gmu.ac.in/pdfview_assets/downloadmaterial/School%20of%20Computer%20Applications-Program%20Docs/MCA%20(2025-26%20Scheme).pdf',
};


export const UNIVERSITY_INFO = {
  NAME: 'GM University',
  FACULTY_NAME: 'Faculty of Computing and IT',
  DEAN: 'Prof. Shweta Marigoudar',
  LOCATION: 'P.B. Road, Davanagere - 577006, Karnataka, India',
  PHONE: ['6364259993', '8192233344'],
  EMAIL: 'info@gmu.ac.in',
};
