import { LandParcel, DisputeRecord, PolicyMetric } from '../types/landGovernance.ts';

export const MOCK_PARCELS: LandParcel[] = [
  {
    id: 'PARCEL-001',
    ulpin: 'KA-LGD-29001-987654',
    state: 'Karnataka',
    district: 'Bengaluru Rural',
    taluk: 'Devanahalli',
    village: 'Channarayapatna',
    surveyNumber: '142/2A',
    areaHectares: 4.85,
    ownerName: 'Ramesh Gowda & Bros',
    landUseCategory: 'Agricultural / Mixed',
    status: 'Disputed',
    disputeRiskScore: 0.82,
    coordinates: [
      [13.245, 77.712],
      [13.248, 77.715],
      [13.246, 77.719],
      [13.243, 77.716],
    ],
  },
  {
    id: 'PARCEL-002',
    ulpin: 'MH-LGD-27012-456789',
    state: 'Maharashtra',
    district: 'Pune',
    taluk: 'Haveli',
    village: 'Wagholi',
    surveyNumber: '88/1B',
    areaHectares: 12.40,
    ownerName: 'Industrial Corridor Dev Authority',
    landUseCategory: 'Industrial Infrastructure',
    status: 'Clear',
    disputeRiskScore: 0.12,
    coordinates: [
      [18.578, 73.978],
      [18.582, 73.984],
      [18.579, 73.989],
      [18.575, 73.982],
    ],
  },
];

export const MOCK_DISPUTES: DisputeRecord[] = [
  {
    id: 'DISP-2024-88',
    caseNumber: 'CIV-WP-8902/2023',
    court: 'Karnataka High Court',
    state: 'Karnataka',
    plaintiff: 'State Revenue Department',
    defendant: 'Private Developer Consortium',
    disputeCategory: 'Boundary Encroachment',
    ladmType: 'LA_SpatialUnit Boundary Discrepancy',
    filingYear: 2021,
    status: 'Pending',
    delayRiskScore: 0.89,
    summary: 'Discrepancy between digitized 1965 cadastral survey map and modern SVAMITVA drone boundary vectors.',
  },
];

export const MOCK_POLICY_METRICS: PolicyMetric[] = [
  {
    id: 'POL-01',
    stateName: 'Karnataka',
    policyName: 'Bhoomi Conclusive Titling Reform',
    implementationYear: 2021,
    preTreatmentDisputeRate: 42.5,
    postTreatmentDisputeRate: 28.1,
    attEstimate: -14.4,
    pValue: 0.001,
    parallelTrendVerified: true,
  },
];
