# Catarina Label AI 🤖⚖️

> **Semi-automated data labeling framework powered by AI, accelerating model training for the legal sector.**

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

## 🚀 Overview

**Catarina Label AI** is a cutting-edge framework born from the **Ceos Project** at the **Federal University of Santa Catarina (UFSC)**. It addresses the critical bottleneck in AI innovation: **data labeling**.

By combining **Foundation Models (LLMs)** for pre-labeling with **Active Learning** strategies and a **Human-in-the-Loop** interface, we reduce the cost and time of creating high-quality datasets for the legal domain by up to **100x**.

### Key Features

*   **🤖 LLM-Powered Pre-Labeling:** Uses "LLM as a Judge" approach to generate initial labels.
*   **🎯 Active Learning:** Intelligently selects the most informative samples for human review.
*   **👨‍💻 Human-in-the-Loop:** Seamless interface for experts to validate and refine AI predictions.
*   **⚡ High Efficiency:** Drastically reduces manual effort compared to traditional annotation.

## 🛠️ Tech Stack

This project is built with a modern, type-safe, and performant stack:

*   **Framework:** [Next.js](https://nextjs.org/) (App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Deployment:** GitHub Pages (Static Export)

## 🏃‍♂️ Getting Started

### Prerequisites

*   Node.js 18+
*   pnpm (recommended) or npm/yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/junhaumhayden/catarina-label-ai.git
    cd catarina-label-ai
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    pnpm dev
    ```

    Open [http://localhost:3000/catarina-label-ai](http://localhost:3000/catarina-label-ai) with your browser to see the result.

## 📦 Build & Deployment

This project is configured for static export to be hosted on GitHub Pages.

To build the project locally:

```bash
pnpm build
```

The static assets will be generated in the `out/` directory.

### GitHub Pages Configuration

The project uses a GitHub Actions workflow (`.github/workflows/nextjs.yml`) to automatically build and deploy to the `gh-pages` environment on every push to `main`.

*   **Base Path:** Configured as `/catarina-label-ai` in `next.config.mjs`.
*   **Image Optimization:** Disabled (`unoptimized: true`) for static export compatibility.

## 👥 The Team

Developed by researchers from the **Federal University of Santa Catarina (UFSC)** within the **Fundo Catarina** and **Ceos Project** initiatives.

*   **Hudson Afonso** - Databases & Data Quality
*   **Paulo Marcos** - Machine Learning & Computational AI
*   **Pedro Henrique** - NLP & Data Integration
*   **Carlos Hayden Jr.** - AI Applied to Health & Data
*   **Francisco Bortolanza** - Data Extraction
*   **Eduardo Cacilha** - Backend & Automation

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <sub>Built with ❤️ in Santa Catarina, Brazil 🇧🇷</sub>
</div>
