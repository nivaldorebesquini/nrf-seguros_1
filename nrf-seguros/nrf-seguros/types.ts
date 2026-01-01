export enum ServiceType {
  HEALTH = 'Plano de Saúde',
  VEHICLE = 'Seguro Veicular',
  RESIDENTIAL = 'Seguro Residencial'
}

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  service: ServiceType;
  currentInsurer?: string;
  valueRange?: string;
  policyNotes?: string;
}