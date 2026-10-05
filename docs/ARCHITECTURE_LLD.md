# 🔬 Low-Level Architecture (LLD) Document

## 1. Low-Level Component Hierarchy & Data Flow

```
src/
├── components/
│   ├── App.tsx                  # Tab navigation router & state provider
│   ├── CommandDock.tsx          # Floating tactile navbar & i18n controls
│   ├── OverviewHero.tsx         # High-level KPI widgets & quick navigation
│   ├── PolicyTwin.tsx           # DiD, SCM, RDD & ex-ante what-if policy simulator
│   ├── GisDigitalTwin.tsx       # Leaflet map, LGD boundaries, satellite layers
│   ├── DisputeIntelligence.tsx  # DeBERTa-v3 court judgment NLP classification
│   ├── EvidenceGapMap.tsx       # Systematic review grant dockets
│   ├── D3EvidenceGapChart.tsx   # D3.js force-directed claim network SVG canvas
│   ├── FederatedCopilot.tsx     # Gemini 2.4 vector RAG copilot console
│   ├── InnovationSandbox.tsx    # OGC API & LADM GraphQL endpoint playground
│   ├── PolicyBriefModal.tsx     # Executive brief preview & jsPDF exporter
│   ├── LoginPortalModal.tsx     # 3D WebGL Three.js portal & RBAC selector
│   ├── CinematicIntro.tsx       # HBO-style title card intro sequence
│   └── TypographyLoader.tsx     # Animated entrance screen
├── services/
│   ├── geminiService.ts         # Google Gemini 2.4 API client
│   ├── econometricEngine.ts     # DiD estimator & Synthetic Control solver
│   └── pdfExportService.ts      # Client-side jsPDF brief renderer
├── hooks/
│   ├── useRoleAccess.ts         # Role permission evaluation hook
│   └── useLanguage.ts           # i18n translation hook
├── utils/
│   ├── formatters.ts            # INR, hectare & percent formatters
│   └── geoUtils.ts              # Spatial bounding box utilities
├── data/
│   └── mockLandData.ts          # State LGD, court cases, econometric matrices
└── types/
    └── landGovernance.ts        # Domain TypeScript definitions
```

## 2. Statistical & Econometric Formulas (LLD)

### 2.1 Staggered Difference-in-Differences (DiD)
The Average Treatment Effect on the Treated ($\text{ATT}$) is calculated as:
$$\text{ATT} = (\bar{Y}_{\text{post, treated}} - \bar{Y}_{\text{pre, treated}}) - (\bar{Y}_{\text{post, control}} - \bar{Y}_{\text{pre, control}})$$

### 2.2 Synthetic Control Method (SCM)
For a treated unit $i=1$ and donor units $j=2 \dots J+1$, donor weights $W = (w_2, \dots, w_{J+1})'$ are chosen to minimize:
$$\| X_1 - X_0 W \|_V = \sqrt{(X_1 - X_0 W)' V (X_1 - X_0 W)}$$
subject to $w_j \ge 0$ and $\sum_{j=2}^{J+1} w_j = 1$.

### 2.3 DeBERTa-v3 Legal Judgment Classifier
Court text features are parsed and classified into LADM ISO 19152 categories:
- `Boundary Discrepancy` (LADM LA_SpatialUnit)
- `Inheritance / Succession Claim` (LADM LA_Party)
- `Tenancy / Lease Dispute` (LADM LA_RRR - Responsibility/Right)
- `Encumbrance / Mortgage Dispute` (LADM LA_Mortgage)
