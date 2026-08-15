# Cloud Bakery — Domain Model

## About the Business

**Cloud Bakery** is a freelance consultancy run by Michiel Bakker, a Cloud & Kubernetes specialist based in the Netherlands. The business serves clients across the spectrum: large enterprises (e.g., ASML), mid-market businesses (MKB), and IT startups.

---

## Core Domains

### Kubernetes & Container Orchestration
Michiel is a certified Kubernetes specialist:
- **CKA** (Certified Kubernetes Administrator)
- **CKS** (Certified Kubernetes Security Specialist)
- **CKAD** (Certified Kubernetes Application Developer)

This is the primary pillar and most visible expertise.

### Google Cloud Platform (GCP)
Deep expertise in GCP infrastructure, architecture, and platform engineering. This is the cloud provider specialty (not AWS, not Azure, not multi-cloud).

### DevOps & CI/CD
Continuous integration/deployment pipelines, infrastructure-as-code, automation, and operational excellence.

---

## Service Model

**Engagement Type**: Time & materials (billable hours/days)

**Why Not Visible on Site**: Dutch tax law (DBA rules) — avoid positioning as a formal "company" with employees or ongoing operations that would trigger employment classification.

**Primary Conversion**: Email inquiry → consultation → engagement

---

## Website Goals

### Primary (Co-equal)
1. **Lead Generation** — capture qualified inbound inquiries from prospects seeking cloud/Kubernetes expertise
2. **Portfolio / Credibility** — demonstrate expertise via certifications, client references, and professional positioning

### Secondary
- Build personal brand as a Kubernetes + GCP specialist
- Support low-volume, high-quality inquiry process (email-based, no large-scale campaigns)

---

## Website Positioning

### Audience
- **Geographic**: Netherlands + Europe (multilingual support)
- **Company Size**: Enterprises to startups
- **Decision Makers**: CTO, VP Engineering, Platform Lead, DevOps Manager
- **Primary Language**: Dutch (default)
- **Secondary Language**: English (via `/en` toggle)

### Key Message
"Cloud & Kubernetes specialist. I architect and operate cloud platforms for enterprises and startups."

---

## Website Structure

**Single-page, minimalist design**

Sections (in order):
1. **Hero** — Name, tagline, email CTA
2. **Expertise** — Three pillars: Kubernetes, GCP, DevOps & CI/CD
3. **Certifications** — CKA, CKS, CKAD (with badges)
4. **Contact** — Simple email link

### Design Principles
- **Minimalist aesthetic** — clean typography, generous whitespace
- **Color Palette** — soft, neutral tones with subtle accent color
- **Dark/Light Toggle** — user preference, corner toggle button
- **No Case Studies** — avoid NDA/DBA complexity; rely on certifications and email referral
- **No Blog** — ship MVP, add later if needed

---

## Technical Foundation

### Stack
- **Static Site Generator**: Hugo (Go-based framework)
- **Hosting**: GitHub Pages (free, simple, Git-native deployment)
- **Domain**: cloudbakery.nl
- **Language Implementation**: Dutch by default (`/nl` or root), English via `/en` URL path
- **Language Toggle**: Button (NL | EN) in navigation

### Repository Structure
```
cloud-bakery-website/
├── docs/
│   ├── context.md          ← This file
│   └── design-brief.md     ← Brand/logo design brief
├── hugo.toml
├── content/
│   ├── _index.nl.md        ← Dutch homepage
│   └── _index.en.md        ← English homepage
├── static/
│   ├── css/
│   ├── images/
│   └── js/
└── themes/
    └── cloud-bakery/       ← Custom minimal theme
```

---

## Success Criteria

- ✅ Single page, ships in days (not weeks)
- ✅ Dark/light theme works smoothly
- ✅ Bilingual (NL/EN) without maintenance burden
- ✅ Email contact link visible and working
- ✅ Certifications clearly displayed
- ✅ Hosted on GitHub Pages, cloudbakery.nl resolves correctly
- ✅ Mobile-responsive (no mobile-specific design, just responsive layout)

---

## Future Decisions (Out of Scope for MVP)

- Blog or thought leadership content
- Case studies or client logos
- Kubestronaut certification (add when obtained)
- Analytics or conversion tracking
- Social links or integrations
- Testimonials or endorsements
