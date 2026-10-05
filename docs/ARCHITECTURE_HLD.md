# 🏗️ High-Level Architecture (HLD) Document

## 1. Executive System Overview
Viksit's **Bhūnīti-Lab (BhuSaakshya)** is a National Land Policy Observatory designed for empirical policy evaluation, legal dispute intelligence, geospatial digital twin mapping, and generative policy synthesis aligned with India's Viksit Bharat @ 2047 goals.

## 2. System Architecture Flow
```mermaid
flowchart TD
    subgraph Data Sources & Standard Schemas
        LADM[LADM ISO 19152 Spatial Schema]
        OGC[OGC API Features Standard]
        LGD[LGD District GeoJSON Maps]
        COURTS[E-Courts Legal Judgments]
    end

    subgraph Core Platform Infrastructure
        INGEST[Ingestion & Normalization Engine] --> PROC[Domain Services]
        
        subgraph Domain Services
            NLP[DeBERTa-v3 Legal NLP Engine]
            ECON[DiD / SCM Econometric Engine]
            GIS[Leaflet GIS Spatial Engine]
            D3[D3 Force-Directed Network Engine]
            RAG[Gemini 2.4 Vector RAG Copilot]
        end

        PROC --> NLP & ECON & GIS & D3 & RAG

        subgraph Presentation & UI Layer
            HERO[Overview Dashboard]
            TWIN[Policy Twin Workspace]
            MAP[GIS Digital Twin]
            DISP[Dispute Intelligence Console]
            EVID[Evidence Gap Map]
            CHAT[Federated AI Copilot]
            SAND[Innovation API Sandbox]
        end

        NLP --> DISP
        ECON --> TWIN
        GIS --> MAP
        D3 --> EVID
        RAG --> CHAT
        PROC --> HERO & SAND
    end

    subgraph Governance & Output
        RBAC[Role-Based Access Control]
        PDF[jsPDF Cabinet Brief Generator]
        I18N[5-Language i18n Localization Engine]
    end

    TWIN & CHAT --> PDF
    HERO & MAP & DISP --> RBAC
    HERO & CHAT --> I18N
```

## 3. Core Architectural Principles
- **Decoupled Engine Services**: Causal econometric models (DiD, SCM) run independently of visual rendering components.
- **Zero-API Key GIS Architecture**: GIS tiles leverage open Leaflet, Esri World Imagery, and OpenStreetMap basemaps.
- **Privacy-First RAG**: Context vector retrieval uses SHA-256 document hashing for tamper-proof document citation verification.
- **LADM ISO 19152 Compliance**: Spatial units, parties, and rights-restrictions-responsibilities (RRR) conform strictly to international land administration standards.
