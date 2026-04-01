export interface Experience {
  id: number;
  date: string;
  position: string;
  company: string | null;
  project: string;
  contract: ContractType;
}

export type ContractType =
  | "Freelance"
  | "Entrepreneuriat"
  | "CDI"
  | "CDD"
  | "Consultant"
  | "Stage"
  | "Projet Personnel";
