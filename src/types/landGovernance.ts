export type UserRole = 'official' | 'judiciary' | 'surveyor' | 'researcher' | 'public';
export type LanguageCode = 'en' | 'hi' | 'kn' | 'ta' | 'mr';

export interface UserProfile {
  id: string;
  name: string;
  role: UserRole;
  designation: string;
  department: string;
  accessLevel: string;
  avatar: string;
  permissions: string[];
}

export interface LandParcel {
  id: string;
  ulpin: string;
  state: string;
  district: string;
  taluk: string;
  village: string;
  surveyNumber: string;
  areaHectares: number;
  ownerName: string;
  landUseCategory: string;
  status: 'Clear' | 'Disputed' | 'Pending Verification' | 'Encroached';
  disputeRiskScore: number;
  coordinates: [number, number][];
}

export interface DisputeRecord {
  id: string;
  caseNumber: string;
  court: string;
  state: string;
  plaintiff: string;
  defendant: string;
  disputeCategory: string;
  ladmType: string;
  filingYear: number;
  status: 'Pending' | 'Resolved' | 'Under Appeal';
  delayRiskScore: number;
  summary: string;
}

export interface PolicyMetric {
  id: string;
  stateName: string;
  policyName: string;
  implementationYear: number;
  preTreatmentDisputeRate: number;
  postTreatmentDisputeRate: number;
  attEstimate: number;
  pValue: number;
  parallelTrendVerified: boolean;
}

export interface EvidenceNode {
  id: string;
  title: string;
  category: string;
  evidenceStrength: 'A+' | 'A' | 'B' | 'C';
  grantDocketId: string;
  confidenceScore: number;
  summary: string;
}
