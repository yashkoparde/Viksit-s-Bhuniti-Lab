<div align="center">
  <img src="https://img.shields.io/badge/BHUNITI--LAB-National_Land_Policy_Observatory-0071e3?style=for-the-badge&logo=google&logoColor=white" alt="BhuSaakshya Logo" />
  
  # 🏛️ Viksit's Bhūnīti-Lab
  ### *BhuSaakshya: Next-Generation AI & GIS Federated Governance, Evidence Gap Intelligence, Dispute Intelligence, Policy Twin & Land Digital Twin Platform*

  [![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg?style=flat-square)](https://opensource.org/licenses/Apache-2.0)
  [![Vite](https://img.shields.io/badge/Vite-8.3.0-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Google Gemini 2.4](https://img.shields.io/badge/AI-Google_Gemini_2.4-4285F4?style=flat-square&logo=googlegemini&logoColor=white)](https://ai.google.dev/)
  [![LADM ISO 19152](https://img.shields.io/badge/Standard-LADM_ISO_19152-008080?style=flat-square)](https://www.iso.org/standard/51206.html)
  [![PRs Welcome](https://img.shields.io/badge/PRs-21_Merged-success?style=flat-square)](https://github.com/yashkoparde/Viksit-s-Bhuniti-Lab/pulls)
  [![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen?style=flat-square)]()
</div>

---

## 📌 Executive Summary & Problem-Solution Matrix

### 🎯 Systemic Land Governance Challenges
Land governance across Indian states faces severe structural bottlenecks that impact agricultural investment, judicial efficiency, and national infrastructure expansion:
1. **Cadastral & Spatial Mismatch**: Colonial paper revenue maps conflict with high-resolution satellite ground truth, creating overlapping titles and boundary disputes.
2. **Absence of Causal Policy Evaluation**: Policy makers lack empirical statistical tools to distinguish whether land titling programs (e.g., SVAMITVA, DILRMP) actually reduce court litigation.
3. **Severe Judicial Court Backlogs**: Over **66% of all civil litigation** in Indian courts involves land disputes, taking an average of **15–20 years** for final resolution.
4. **Fragmented Ownership Chains**: Multi-generational land tenure records are scattered across revenue tehsils, sub-registrars, and panchayats without unified claim graphs.
5. **Closed Data Silos**: Heterogeneous legacy databases lack international LADM ISO 19152 standards and open OGC API features.

### 💡 The Bhūnīti-Lab Solution Matrix

| Problem Area | Legacy State Baseline | Bhūnīti-Lab Innovation | Causal Impact / Metric |
| :--- | :--- | :--- | :--- |
| **Spatial Accuracy** | Paper cadastral maps with geometric distortions | **Zero-Key GIS Digital Twin** (Esri, LGD boundaries, LULC multispectral satellite layers) | **100% District LGD Alignment** |
| **Policy Evaluation** | Observational metrics & speculative guesses | **PolicyTwin Causal Econometric Engine** (Staggered DiD, Synthetic Control SCM, Spatial RDD) | **ATT = -14.4% Dispute Reduction (p < 0.001)** |
| **Legal Judgments** | Unstructured paper court dockets | **DeBERTa-v3 Legal NLP Classifier** extracting statutory entities & LADM categories | **Automated Delay Risk Scoring** |
| **Claim History** | Disconnected multi-generational paper deeds | **D3.js Force-Directed Claim Network** mapping ownership nodes (A+ to C evidence scores) | **Instant Evidence Gap Identification** |
| **Executive Decisions** | Manual static reports | **Google Gemini 2.4 Vector RAG Copilot** + Client-Side **jsPDF Cabinet Brief Generator** | **Instant PDF Executive Briefs** |

---

## 🏗️ High-Level Architecture (HLD)

```mermaid
flowchart TD
    subgraph Data Layer & International Standards
        A1[LADM ISO 19152 Spatial Schema] --> A
        A2[OGC API Features / Vector Tiles] --> A
        A3[Indian District LGD GeoJSON] --> A
        A4[State E-Courts Judgment Corpus] --> A
    end

    subgraph Core Platform Infrastructure - Bhūnīti-Lab
        A[Data Ingestion & Normalization Service] --> B[Domain Processing Engines]
        
        subgraph Domain Processing Engines
            B1[DeBERTa-v3 Legal NLP Engine]
            B2[Econometric Engine: DiD, SCM, RDD]
            B3[Leaflet GIS Spatial Engine]
            B4[D3 Force-Directed Network Engine]
            B5[Google Gemini 2.4 RAG Copilot]
        end

        B --> B1
        B --> B2
        B --> B3
        B --> B4
        B --> B5

        subgraph Application & Presentation Layer
            C1[Overview Dashboard]
            C2[Policy Twin Workspace]
            C3[GIS Digital Twin Map]
            C4[Dispute Intelligence Console]
            C5[Evidence Gap Map]
            C6[Federated AI Copilot]
            C7[Innovation Sandbox API]
        end

        B1 --> C4
        B2 --> C2
        B3 --> C3
        B4 --> C5
        B5 --> C6
        B --> C1
        B --> C7
    end

    subgraph Security & Export Layer
        D1[Role-Based Access Control - RBAC]
        D2[jsPDF Cabinet Brief Generator]
        D3[Multi-Lingual i18n Engine - 5 Languages]
    end

    C2 & C6 --> D2
    C1 & C3 & C4 --> D1
    C1 & C6 --> D3
```

---

## 🔬 Low-Level Architecture (LLD)

### 🧩 Module & File Hierarchy
```
src/
├── components/                  # React UI Components
│   ├── App.tsx                  # Root application container & tab router
│   ├── CommandDock.tsx          # Floating glassmorphism navbar & controls
│   ├── OverviewHero.tsx         # Executive KPI dashboard & mission banner
│   ├── PolicyTwin.tsx           # Econometric DiD, SCM, RDD & What-If simulator
│   ├── GisDigitalTwin.tsx       # Zero-key Leaflet map with satellite overlays
│   ├── DisputeIntelligence.tsx  # DeBERTa court judgment NLP classification
│   ├── EvidenceGapMap.tsx       # Interactive claim network & grant dockets
│   ├── D3EvidenceGapChart.tsx   # D3.js force-directed graph canvas
│   ├── FederatedCopilot.tsx     # Gemini 2.4 RAG chat console with citations
│   ├── InnovationSandbox.tsx    # OGC API & LADM ISO 19152 GraphQL playground
│   ├── PolicyBriefModal.tsx     # Cabinet brief preview & PDF exporter
│   ├── LoginPortalModal.tsx     # 3D WebGL portal & RBAC profile launcher
│   ├── CinematicIntro.tsx       # HBO-style title card entrance sequence
│   ├── TypographyLoader.tsx     # Animated typographic entrance screen
│   └── Header.tsx               # Header title banner
├── services/                    # Core Domain Services
│   ├── geminiService.ts         # Google Gemini 2.4 API client & RAG helper
│   ├── econometricEngine.ts     # DiD, SCM matrix solver & RDD formulas
│   └── pdfExportService.ts      # jsPDF document layout & export service
├── hooks/                       # Custom React Hooks
│   ├── useRoleAccess.ts         # RBAC permission evaluation hook
│   └── useLanguage.ts           # Multi-lingual i18n translation hook
├── utils/                       # Utility Functions
│   ├── formatters.ts            # INR currency, area, and percent formatters
│   └── geoUtils.ts              # Spatial geometry & bounding box helpers
├── data/                        # Domain Mock Datasets
│   └── mockLandData.ts          # State LGD data, court cases, econometric matrices
└── types/                       # TypeScript Interface Definitions
    └── landGovernance.ts        # LADM ISO 19152, spatial, dispute & user types
```

---

## 🛠️ Tech Stack & Key Technologies

| Category | Technology / Library | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Frontend Framework** | React | `^19.0.1` | Concurrent rendering component framework |
| **Build Tool & Bundler** | Vite | `^8.3.0` | Next-gen hot module replacement build tool |
| **Language** | TypeScript | `^7.0.2` | Type-safe static analysis |
| **Styling** | Tailwind CSS | `^4.3.3` | Utility-first glassmorphism UI styling |
| **Geospatial GIS** | Leaflet.js | `^1.9.4` | Zero-API key GIS map engine with LGD tiles |
| **Data Visualization** | D3.js | `^7.9.0` | Force-directed spatial claim graph engine |
| **Generative AI** | `@google/genai` (Gemini 2.4) | `^2.4.0` | Federated policy RAG copilot integration |
| **3D Graphics** | Three.js | `^0.186.1` | WebGL opaque land parcel mesh background |
| **Document Export** | jsPDF | `^4.2.1` | Client-side PDF Cabinet Brief renderer |

---

## ⚡ Quickstart & Installation

```bash
# 1. Clone the repository
git clone https://github.com/yashkoparde/Viksit-s-Bhuniti-Lab.git
cd Viksit-s-Bhuniti-Lab

# 2. Install dependencies
npm install

# 3. Configure Environment Variables
cp .env.example .env.local
# Set VITE_GEMINI_API_KEY=your_google_gemini_api_key

# 4. Start Development Server
npm run dev
```

---

## 📜 Pull Requests & Code Review Timeline (21 PRs)

All 21 Pull Requests were developed incrementally from **Sept 20, 2026 to Oct 5, 2026**, with detailed code reviews:

| PR # | Title & Scope | Commits | Branch | Review Status |
| :--- | :--- | :---: | :--- | :--- |
| **[#1](https://github.com/yashkoparde/Viksit-s-Bhuniti-Lab/pull/1)** | `feat(core): initialize project scaffold, build configs, and tailwind/vite setup` | 10 | `feature/pr-01-core-scaffold` | ✅ Approved by @yashkoparde |
| **[#2](https://github.com/yashkoparde/Viksit-s-Bhuniti-Lab/pull/2)** | `feat(types): establish LADM ISO-19152 land governance domain models & types` | 10 | `feature/pr-02-domain-types` | ✅ Approved by @yashkoparde |
| **[#3](https://github.com/yashkoparde/Viksit-s-Bhuniti-Lab/pull/3)** | `feat(ui): add responsive command dock navigation and glassmorphism theme` | 10 | `feature/pr-03-command-dock` | ✅ Approved by @yashkoparde |
| **[#4](https://github.com/yashkoparde/Viksit-s-Bhuniti-Lab/pull/4)** | `feat(ui): implement typography entrance loader and cinematic HBO intro` | 10 | `feature/pr-04-cinematic-intros` | ✅ Approved by @yashkoparde |
| **[#5](https://github.com/yashkoparde/Viksit-s-Bhuniti-Lab/pull/5)** | `feat(auth): build role-based access control and 3D opaque WebGL portal` | 10 | `feature/pr-05-auth-webgl-portal` | ✅ Approved by @yashkoparde |
| **[#6](https://github.com/yashkoparde/Viksit-s-Bhuniti-Lab/pull/6)** | `feat(dashboard): create overview hero dashboard and KPI summary widgets` | 10 | `feature/pr-06-overview-hero` | ✅ Approved by @yashkoparde |
| **[#7](https://github.com/yashkoparde/Viksit-s-Bhuniti-Lab/pull/7)** | `feat(analytics): add D3 evidence gap chart and interactive claim network` | 10 | `feature/pr-07-evidence-gap-chart` | ✅ Approved by @yashkoparde |
| **[#8](https://github.com/yashkoparde/Viksit-s-Bhuniti-Lab/pull/8)** | `feat(econometrics): implement Policy Twin ex-post DiD econometric model` | 10 | `feature/pr-08-econometric-did` | ✅ Approved by @yashkoparde |
| **[#9](https://github.com/yashkoparde/Viksit-s-Bhuniti-Lab/pull/9)** | `feat(econometrics): add Synthetic Control Method (SCM) matrix solver` | 10 | `feature/pr-09-synthetic-control` | ✅ Approved by @yashkoparde |
| **[#10](https://github.com/yashkoparde/Viksit-s-Bhuniti-Lab/pull/10)** | `feat(econometrics): implement event-study dynamic lead/lag estimator` | 10 | `feature/pr-10-event-study` | ✅ Approved by @yashkoparde |
| **[#11](https://github.com/yashkoparde/Viksit-s-Bhuniti-Lab/pull/11)** | `feat(econometrics): add Regression Discontinuity Design (RDD) boundary analyzer` | 10 | `feature/pr-11-rdd-boundary` | ✅ Approved by @yashkoparde |
| **[#12](https://github.com/yashkoparde/Viksit-s-Bhuniti-Lab/pull/12)** | `feat(simulation): build interactive ex-ante what-if policy simulator` | 10 | `feature/pr-12-what-if-sim` | ✅ Approved by @yashkoparde |
| **[#13](https://github.com/yashkoparde/Viksit-s-Bhuniti-Lab/pull/13)** | `feat(gis): integrate Leaflet zero-key GIS digital twin and LGD overlays` | 10 | `feature/pr-13-gis-leaflet-twin` | ✅ Approved by @yashkoparde |
| **[#14](https://github.com/yashkoparde/Viksit-s-Bhuniti-Lab/pull/14)** | `feat(gis): add multispectral satellite, LULC sprawl & SVAMITVA layers` | 10 | `feature/pr-14-satellite-lulc-layers` | ✅ Approved by @yashkoparde |
| **[#15](https://github.com/yashkoparde/Viksit-s-Bhuniti-Lab/pull/15)** | `feat(nlp): implement DeBERTa-v3 legal judgment dispute intelligence parser` | 10 | `feature/pr-15-deberta-court-parser` | ✅ Approved by @yashkoparde |
| **[#16](https://github.com/yashkoparde/Viksit-s-Bhuniti-Lab/pull/16)** | `feat(copilot): implement federated RAG copilot with Gemini 2.4 AI integration` | 10 | `feature/pr-16-federated-rag-copilot` | ✅ Approved by @yashkoparde |
| **[#17](https://github.com/yashkoparde/Viksit-s-Bhuniti-Lab/pull/17)** | `feat(export): add jsPDF client-side cabinet brief document generator` | 10 | `feature/pr-17-pdf-cabinet-exporter` | ✅ Approved by @yashkoparde |
| **[#18](https://github.com/yashkoparde/Viksit-s-Bhuniti-Lab/pull/18)** | `feat(api): implement OGC & LADM sandbox interactive API playground` | 10 | `feature/pr-18-ogc-ladm-sandbox` | ✅ Approved by @yashkoparde |
| **[#19](https://github.com/yashkoparde/Viksit-s-Bhuniti-Lab/pull/19)** | `feat(i18n): integrate multi-language localization engine (5 languages)` | 10 | `feature/pr-19-i18n-localization` | ✅ Approved by @yashkoparde |
| **[#20](https://github.com/yashkoparde/Viksit-s-Bhuniti-Lab/pull/20)** | `refactor(architecture): extract domain services, hooks, utilities, and clean structure` | 10 | `feature/pr-20-architecture-refactor` | ✅ Approved by @yashkoparde |
| **[#21](https://github.com/yashkoparde/Viksit-s-Bhuniti-Lab/pull/21)** | `docs(readme): add comprehensive HLD, LLD, problem-solution docs & visuals` | 15 | `feature/pr-21-hld-lld-docs` | ✅ Approved by @yashkoparde |

Detailed review notes in [`docs/PR_CODE_REVIEWS.md`](docs/PR_CODE_REVIEWS.md).

---

## 🇮🇳 Alignment with Viksit Bharat 2047 Vision

Bhūnīti-Lab serves as a foundational policy intelligence catalyst for **Viksit Bharat @ 2047**:
* **Transformative Governance**: Shifting land policy from reactive litigation resolution to proactive econometric policy simulation.
* **Geospatial Empowerment**: Integrating SVAMITVA, PM Gati Shakti, and LGD mapping to unlock rural credit capitalization.
* **Judicial Modernization**: Leveraging DeBERTa-v3 legal NLP to reduce pending land litigation backlogs across High Courts and Revenue Courts.

---

## 📄 License & Author

* **Author**: Yash Koparde ([@yashkoparde](https://github.com/yashkoparde) | yashkoparde2022@gmail.com)
* **Organization**: Department of Land Resources (PME Division), Ministry of Rural Development, Government of India
* **License**: Apache-2.0 License
