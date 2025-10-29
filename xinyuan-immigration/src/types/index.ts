export interface Service {
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  nameEn: string;
  role: string;
  roleEn: string;
  content: string;
  contentEn: string;
  rating: number;
}

export interface FAQ {
  question: string;
  questionEn: string;
  answer: string;
  answerEn: string;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}
