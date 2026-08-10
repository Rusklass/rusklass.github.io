---
title: "Primer Design Tool"
date: "2026-01-15"
excerpt: "A specialized bioinformatics web application for automated design, thermodynamic evaluation, and optimization of stem-loop reverse transcription (RT) primers and quantitative PCR (qPCR) primers tailored for microRNA detection."
tags: ["Python","FastAPI","Docker","Bioinformatics"]
link: "https://pdt.olik.fans/"
logo: "/logoPrimerDesignTool-removebg.png"
---

The [**Primer Design Tool**](https://pdt.olik.fans/) was developed to address a critical bottleneck in standard RT-qPCR laboratory workflows.

By automating the primer design process, the application significantly accelerates experiment planning and eliminates the risk of manual analytical errors, ensuring robust reproducibility across the laboratory.

### Key Features
- **Workflow Automation:** Replaces manual primer design steps with an automated algorithmic pipeline tailored for complex molecular workflows.
- **Robust Backend:** Powered by **Python** and **FastAPI**, implementing strict data sanitization and input validation protocols to handle biological sequences.
- **Cross-platform Portability:** The entire application infrastructure is containerized using **Docker** and successfully deployed into a scalable cloud environment.

### My Role
I executed the entire software development lifecycle (SDLC) independently, demonstrating total engineering ownership from the initial assessment of user-needs and prototyping, through rigorous testing, and finally to production deployment.

### Technologies Used:

#### Backend
- **Language & Framework:** Python 3, FastAPI & uvicorn
- **Data Access & Storage:** SQLite with FTS5 full-text search index, managed via aiosqlite and SQLAlchemy 2.0 (async engine)

#### Background Tasks & Caching: 
- **Celery** with Redis (supports fallback to eager synchronous mode when Redis is offline)
- **Rate Limiting & Security:** JWT authentication (python-jose), password hashing (passlib/bcrypt), and endpoint rate limiting (slowapi)

#### Bioinformatics Core
- **RNA Structure Prediction:** ViennaRNA library (RNAfold wrapper with mock fallback when unavailable on host)
- **Thermodynamic Modeling:** Custom Nearest-Neighbor (NN) thermodynamic and hairpin generation algorithms

#### Frontend
- **Templating:** Server-rendered Jinja2 templates
- **Styling & Interactivity:** Vanilla CSS, JavaScript / jQuery
- **Visualization:** Forna (D3.js-based visualization engine for interactive RNA secondary structure layouts)

#### Architecture & Testing
- **Pattern:** Hexagonal Architecture with abstract interfaces for repositories and services
- **Testing:** pytest, pytest-asyncio unit and integration test suite