<div align="center">

# ⚡ Project FAPEMING — Trilhando o Caminho do Código

### *Empowering K-12 Students with Python, Flet, and Generative AI (Google Gemini)*

[![Python](https://img.shields.io/badge/Python-3.10%2B-blue?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![Flet](https://img.shields.io/badge/UI-Flet_Framework-00D2FF?style=for-the-badge&logo=flutter&logoColor=white)](https://flet.dev/)
[![Google Gemini](https://img.shields.io/badge/AI-Google_Gemini-8E44AD?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)
[![FAPEMING](https://img.shields.io/badge/Sponsor-FAPEMING-green?style=for-the-badge)](https://fapeming.br/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

---

<p align="center">
  <b>An innovative extension research & teaching methodology connecting Problem-Based Learning (PBL), cross-platform app development with Flet, and AI copilot interaction in Basic Education.</b>
</p>

[📚 Lesson Scripts](#-lesson-scripts-roteiros) • [📊 Interactive Slides](#-interactive-slide-presentations) • [🚀 Getting Started](#-getting-started) • [🔬 Research & Impact](#-research--academic-impact)

</div>

---

## 📖 About The Project

**Trilhando o Caminho do Código** (*Tracing the Path of Code*) is an educational extension project funded by **FAPEMING** (Fundação de Amparo à Pesquisa do Estado de Minas Gerais). It brings hands-on computer science, software engineering, and artificial intelligence concepts to elementary and high school students.

Throughout 9 structured workshops, students build real-world multiplatform applications addressing the UN **Sustainable Development Goals (SDGs / ODS)**, guided by university mentors and using **Google Gemini CLI** as a 24/7 AI programming copilot.

---

## ✨ Key Features

- 📝 **9 Complete Lesson Scripts (`Roteiro/`):** Detailed pedagogical guides with timelines, teacher prompts, activity rubrics, and diagnostic forms.
- 🎨 **Interactive HTML5 Slides (`Slides/`):** Glassmorphism dark-mode presentation deck for each lesson with keyboard navigation, progress bars, and instructor notes (N key).
- 🎮 **Sample Arcade Games (`Jogos/`):** Starter Python games (Pac-Man, Flappy Bird, Snake, Tetris, Escape Room, Battleship) to ignite student engagement.
- 🤖 **Generative AI Copilot (Gemini CLI):** Structuring prompts using the **P.R.R.E** (*Papel, Regra, Resposta, Exemplo*) and **P.R.O.M.P.T** frameworks.
- 📱 **Cross-Platform Apps with Flet:** Native-feeling Web, Mobile, and Desktop GUI development in 100% pure Python.
- 🧠 **Context-Aware AI Integration (`GEMINI.md`):** Simple RAG (Retrieval-Augmented Generation) system integrating local markdown rules with Gemini API.

---

## 📚 Lesson Overview

| Lesson | Title | Core Topics | Deliverables / Tools |
| :--- | :--- | :--- | :--- |
| **Aula 01** | **Kickoff, T0 & Prompting** | Project intro, baseline diagnostic (T0), SDG selection, prompt engineering | Gemini CLI, T0 Form, PRRE / PROMPT |
| **Aula 02** | **Variables & Data Types** | Variables, `str`, `int`, `float`, `bool`, `input()`, `print()`, f-strings | Python Basics, School Grade Calculator |
| **Aula 03** | **Control Flow & Decision** | Conditional statements (`if`, `elif`, `else`), relational & logical operators | Loan Validator, Decision Trees |
| **Aula 04** | **Loops & Automation** | `while`, `for`, `range()`, counters, accumulators, flags | Energy Consumption Calculator |
| **Aula 05** | **Data Collections & Lists** | Lists, indexing, methods (`append`, `remove`, `pop`, `len`), iteration | ODS App Task Manager |
| **Aula 06** | **Functions & Modularization** | Modular code with `def`, parameters, `return`, DRY principle | Core Utility Functions Package |
| **Aula 07** | **GUI Development with Flet** | Flet framework, `ft.Text`, `ft.TextField`, `ft.ElevatedButton`, events | Multiplatform App Front-End |
| **Aula 08** | **Integrated Architecture** | Flet + Gemini API + `GEMINI.md` context files (System Instructions) | Full AI-Powered SDG App Prototype |
| **Aula 09** | **Solution Fair & Evaluation** | Live student pitches, Live Code Audit, T1 post-test evaluation | Pitch Presentation, T1 Form, Certification |

---

## 📁 Repository Structure

```text
FAPEMING-Project/
├── arquivos-trilhando/
│   ├── Roteiro/                  # 9 Comprehensive Lesson Markdown Guides
│   │   ├── ROTEIRO AULA 01.md
│   │   ├── ROTEIRO AULA 02.md
│   │   └── ...
│   ├── Slides/                   # Modern Interactive HTML Presentation Engine
│   │   ├── index.html            # Main Portal
│   │   ├── aula-01-slides.html
│   │   ├── ...
│   │   ├── slides-style.css      # Dark Mode Glassmorphism Stylesheet
│   │   └── slides-engine.js      # Key Listener & Speaker Notes Engine
│   ├── Jogos/                    # Educational Python Starter Games
│   │   ├── BatalhaNaval.py
│   │   ├── EscapeRoom.py
│   │   ├── Pac-Man.py
│   │   ├── cobrinha.py
│   │   ├── flappy_bird.py
│   │   └── tetris_tkinter.py
│   ├── Imagens/                  # Visual assets for prompting exercises
│   ├── Vídeos/                   # Sample videos for AI multimodal dynamics
│   └── Roteiro_de_Aula_Aula_01.pdf
└── README.md
```

---

## 🚀 Getting Started

### 1. Viewing the Presentation Slides
Simply open the `index.html` file in any modern web browser:

```bash
# Open in Google Chrome or default browser
# Path: arquivos-trilhando/Slides/index.html
```

#### Keyboard Shortcuts during presentation:
- **`Right Arrow` / `Space`**: Next slide
- **`Left Arrow`**: Previous slide
- **`N`**: Toggle Instructor Speaker Notes panel
- **`F`**: Toggle Fullscreen presentation mode

---

### 2. Running Python Applications & Games
Ensure Python 3.10+ is installed:

```bash
# Install Flet and Google GenAI SDK
pip install flet google-genai

# Run any starter game
python arquivos-trilhando/Jogos/flappy_bird.py
```

---

## 🔬 Research & Academic Impact

This project is structured under an experimental evaluation methodology to measure the **Learning Delta ($\Delta = T1 - T0$)** in basic education computing literacy:

- **Quantifying AI Synergy:** Evaluating student autonomy when using LLMs as tutors versus traditional instruction.
- **Live Code Audit (Auditoria Viva):** Qualitative assessment technique validating authentic code comprehension during project defenses.
- **Publication Goals:** Geared towards High-Impact Journal publications (Qualis A1/A2, JCR Q1/Q2 in Educational Technology).

---

## 🤝 Acknowledgments & Support

Special thanks to:
- **FAPEMING** for funding and research support.
- The mentors, teachers, and K-12 students participating in the extension workshops.

---

<div align="center">
  <sub>Built with ❤️ for educational transformation through code and artificial intelligence.</sub>
</div>
