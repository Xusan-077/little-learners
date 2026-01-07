export interface INavLinks {
  label: string;
  path: string;
}

export interface IBenefits {
  id: number;
  title: string;
  description: string;
  image: any;
}

export interface ITestimonials {
  image: any;
  name: string;
  description: string;
}

export interface IFAQData {
  id: number;
  question: string;
  answer: string;
}

export interface INavigate {
  id: number;
  title: string;
  description: string;
  link: string;
}

export interface IMission {
  id: number;
  title: string;
  description: string;
  image: any;
}

export interface IRecognitions {
  id: number;
  image: any;
  title: string;
  description: string;
}

export interface IHistory {
  id: number;
  title: string;
  year: number;
  description: string;
}

export interface IMembers {
  id: number;
  image: any;
  userName: string;
  title: string;
  description: string;
}

export interface IEvents {
  id: number;
  image: any;
  title: string;
  description: string;
}

export interface IAdmissionStep {
  id: number;
  stepNumber: string;
  title: string;
  description: string;
}

export interface IFeatures {
  id: number;
  image: any;
  title: string;
  description: string;
}
