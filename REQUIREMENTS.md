# KinshipConnect - Project Requirements & Contribution Guide

**Version:** 1.0.0  
**Status:** Active Development

## 1. Project Overview

**KinshipConnect** is a free, open-source genealogy platform dedicated to preserving family heritage without paywalls. Our mission is to democratize family history by providing powerful tools for tree building, record discovery, and community collaboration in a secure, privacy-focused environment.

### Core Pillars
1.  **Forever Free:** No subscription fees for accessing records or building trees.
2.  **Open Source:** Community-driven development and transparent code.
3.  **Privacy First:** User data ownership and granular permission controls.
4.  **Collaboration:** Real-time cooperative editing features for families.

---

## 2. Functional Requirements

### 2.1 User Authentication & Profiles
*   **Registration/Login:** Secure email/password authentication and social login (Google/Apple).
*   **User Profile:** management of personal details, avatar, and account settings.
*   **Dashboard:** Personalized landing view showing recent activity, tree stats, and record hints.

### 2.2 Tree Building (Core)
*   **Node Management:** Ability to Add, Edit, and Delete persons in the tree.
*   **Relationship Mapping:** Support for biological parents, spouses, siblings, and adoptive relationships.
*   **Visual Interface:** Interactive canvas/graph view (Pan & Zoom) to navigate large families.
*   **Quick Actions:** "Add Father/Mother/Child" shortcuts directly from the tree view.
*   **GEDCOM Support:** Full import and export capabilities for standard `.ged` files to ensure data portability.

### 2.3 Record Discovery & Hints
*   **Smart Matching:** Algorithmic matching of tree profiles against the community database and open records (Census, Vital Records).
*   **Hint Review:** Interface to Review, Accept, or Reject record matches.
*   **Search:** Global search functionality for people and historical records.

### 2.4 Collaboration
*   **Invite System:** Email-based invitations with role assignment (Admin, Editor, Viewer).
*   **Permissions:** Granular control over who can see living relatives or edit specific branches.
*   **Activity Log:** Track changes made by collaborators (Audit trail).

### 2.5 Media & Memories
*   **Gallery:** Upload and tag photos/documents to specific people.
*   **Stories:** Rich-text editor for writing biographical stories or memories.

---

## 3. Technology Stack

KinshipConnect utilizes a modern, performance-oriented frontend stack.

*   **Runtime:** Browser (ESNext)
*   **Framework:** [React v19](https://react.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Routing:** [React Router v7](https://reactrouter.com/)
*   **Build Tool:** Vite (implied via ESM structure)
*   **Icons:** Material Symbols & Material Icons
*   **Fonts:** Google Fonts (Playfair Display, Source Sans Pro)

---

## 4. Coding & Development Standards

To maintain a high-quality codebase, all contributors are expected to adhere to the following standards.

### 4.1 TypeScript Guidelines
*   **Strict Typing:** Avoid `any` at all costs. Use `unknown` if the type is truly ambiguous, then narrow it.
*   **Interfaces over Types:** Use `interface` for object definitions and `type` for unions/intersections.
*   **Props:** Define distinct interfaces for Component Props (e.g., `interface AppNavbarProps { ... }`).

### 4.2 React Best Practices
*   **Functional Components:** Use functional components with Hooks. Class components are not permitted.
*   **Composition:** Break large pages into smaller, reusable components located in `src/components`.
*   **Hooks:** Logic that involves side effects or state management should be extracted into custom hooks (`src/hooks`).
*   **Rendering:** Ensure components are idempotent and handle loading/error states gracefully.

### 4.3 CSS & Styling (Tailwind)
*   **Utility-First:** Use utility classes directly in `className`.
*   **Configuration:** Do not hardcode hex values in components. Use the variables defined in `tailwind.config` (e.g., `text-primary`, `bg-background-light`).
*   **Dark Mode:** All components **must** support dark mode using the `dark:` modifier.
*   **Responsiveness:** Mobile-first approach. Use `md:`, `lg:` breakpoints to scale up.

### 4.4 File Structure
```
/
├── components/         # Reusable UI components (Buttons, Navbars, Cards)
├── pages/              # Route-level components (Dashboard, LandingPage)
├── hooks/              # Custom React hooks
├── services/           # API integration and business logic
├── types/              # Global TypeScript interfaces
├── utils/              # Helper functions and formatters
├── App.tsx             # Main Layout and Router
├── index.tsx           # Entry point
└── tailwind.config.js  # Design system configuration
```

---

## 5. Design System & UI/UX

### 5.1 Color Palette
*   **Primary (Green):** `#4a7729` - Used for primary actions, branding, and success states.
*   **Secondary (Dark Blue):** `#2c3e50` - Used for text and secondary headers.
*   **Accent (Blue):** `#0077c5` - Used for links, informational highlights, and buttons.
*   **Backgrounds:**
    *   Light: `#f8f7f2` (Warm Paper)
    *   Dark: `#1a202c` (Slate)

### 5.2 Typography
*   **Headings:** *Playfair Display* (Serif). Elegant, historical feel.
*   **Body:** *Source Sans Pro* (Sans-serif). Clean, legible for dense data.

### 5.3 Accessibility (A11y)
*   **Semantic HTML:** Use `<nav>`, `<main>`, `<aside>`, `<header>`, and `<footer>`.
*   **Forms:** All inputs must have associated labels (visible or `aria-label`).
*   **Contrast:** Ensure text meets WCAG AA standards against backgrounds.
*   **Keyboard Nav:** All interactive elements must be focusable.

---

## 6. Contribution Guidelines

We welcome contributions from the community!

1.  **Fork & Clone:** Fork the repository and clone it locally.
2.  **Branching:** Create a new branch for your feature or fix.
    *   Format: `feature/name-of-feature` or `fix/issue-description`.
3.  **Commit Messages:** Use Conventional Commits.
    *   `feat: add photo upload modal`
    *   `fix: correct z-index on navbar`
    *   `docs: update readme`
4.  **Pull Requests:**
    *   Describe the change clearly.
    *   Include screenshots for UI changes.
    *   Ensure all types pass checks.

### Notes for Maintainers
*   Review PRs for adherence to the design system (check dark mode!).
*   Ensure no new dependencies are added without discussion.
*   Prioritize performance: The tree view must remain performant with 100+ nodes.

---

*Thank you for helping us build the future of open genealogy.*
