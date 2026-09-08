# ZFile — Secure Workspace for Your Files 🚀

ZFile is a cutting-edge, next-generation file management and productivity platform designed to bridge the gap between traditional cloud storage and advanced artificial intelligence. Built with a modern technology stack, ZFile empowers teams to seamlessly upload, edit, analyze, and protect their files within a stunning, highly optimized interface.

---

## 🌟 Key Features

### 1. Next-Gen Glassmorphic Interface
ZFile completely abandons the traditional "flat dark mode" in favor of a **Premium Glassmorphic Design System**:
- **Floating Layouts:** The sidebar and main content area exist as floating, rounded modules above a deep radial gradient.
- **Translucency & Blurs:** Leveraging `backdrop-filter: blur()`, UI elements like navigation bars and cards beautifully blend with the underlying background depth.
- **Dynamic Micro-animations:** Every interaction—from hovering over buttons to opening dropdowns—is accompanied by smooth transitions, glowing box shadows, and scale effects.

### 2. Advanced AI Capabilities (`/ai`)
ZFile integrates AI directly into your file workflows:
- **Data Analysis (`/ai/data-analysis`):** Upload CSV, XLSX, or JSON datasets. ZFile's AI detects anomalies, predicts trends, and allows you to chat with your data using natural language prompts.
- **OCR Extraction (`/ai/ocr`):** Drag and drop scanned images or PDFs. ZFile instantly extracts highly accurate text, preserves table structures, and generates digital invoices or documents.

### 3. Studio Tools (`/tools`)
Perform heavy file operations without leaving the browser or downloading external software:
- **PDF Merging (`/tools/pdf/merge`):** Combine multiple PDF documents seamlessly.
- **PDF Splitting (`/tools/pdf/split`):** Extract specific pages or split large PDFs into smaller parts.

### 4. Enterprise-Grade Security & Auditing (`/security` & `/audit`)
We take data protection seriously. ZFile includes a robust management dashboard:
- **Active Sessions:** Track all devices currently logged into your workspace. Instantly revoke access to unknown devices or locations.
- **Audit Logs:** A detailed, searchable table of every action taken in your workspace, logging the user, IP address, and resource accessed.
- **API Key Management:** Generate, view, and revoke secret Developer API Keys (e.g., `zf_live_...`) to integrate ZFile's features into your own applications securely.

### 5. Comprehensive Workspace Settings (`/settings`)
A deeply nested, vertical-tab layout to control every aspect of your experience:
- **General:** Manage workspace name, custom URLs, and initiate account deletion.
- **Notifications:** Fine-tune email alerts for file shares, comments, and security warnings.
- **Appearance:** Toggle Dark/Light modes and select custom accent colors.
- **Billing:** View your current subscription tier (Starter, Pro, Enterprise), payment methods, and invoice history.

---

## 🛠️ Technology Stack

ZFile is built on top of modern web standards, prioritizing speed, developer experience, and maintainability.

- **Core Framework:** [Next.js 16](https://nextjs.org/) (Using the new App Router and Turbopack for ultra-fast HMR).
- **Styling Engine:** [Tailwind CSS v4](https://tailwindcss.com/) (Using the new `@import 'tailwindcss'` engine, dispensing with `tailwind.config.js` for an inline `@theme` configuration).
- **UI Components:** Built custom, referencing [shadcn/ui](https://ui.shadcn.com/) patterns for headless accessibility.
- **Icons:** [Lucide React](https://lucide.dev/).
- **Language:** TypeScript for end-to-end type safety.

---

## 📁 Project Architecture

The codebase follows the Next.js App Router conventions:

```text
ZFile-Frontend/
├── app/
│   ├── (app)/                 # Authenticated Routes (wrapped in AppLayout)
│   │   ├── ai/                # AI features (OCR, Data Analysis)
│   │   ├── audit/             # Audit logs
│   │   ├── pricing/           # Upgrade plans
│   │   ├── security/          # Security dashboard
│   │   ├── settings/          # Nested settings layout & tabs
│   │   └── tools/             # Studio Tools (PDF Merge/Split)
│   ├── admin/                 # Admin Panel Routes (wrapped in AdminLayout)
│   ├── login/                 # Authentication pages
│   ├── register/
│   ├── forgot-password/
│   ├── globals.css            # Global theme variables and glassmorphic classes
│   └── layout.tsx             # Root HTML document and fonts
├── components/
│   ├── AppLayout.tsx          # Floating sidebar and Topbar implementation
│   ├── AdminLayout.tsx
│   └── ui/                    # Reusable primitive UI components
├── public/                    # Static assets (logos, placeholder images)
└── package.json
```

---

## 🚀 Getting Started

Follow these instructions to get a local copy up and running.

### Prerequisites
- [Node.js](https://nodejs.org/en/) (v18 or higher recommended)
- `npm` or `pnpm`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/chienlb/zfile-frontend.git
   cd ZFile-Frontend
   ```

2. **Install all dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   *Note: Next.js will compile the project using Turbopack.*

4. **View the application:**
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000). 
   *If you change global CSS and do not see updates, try clearing the `.next` directory or performing a Hard Refresh (`Cmd + Shift + R`).*

---

## 🤝 Contribution Guidelines

1. Create a new branch for your feature: `git checkout -b feature/your-feature-name`
2. Commit your changes using semantic commit messages.
3. Push to the branch: `git push origin feature/your-feature-name`
4. Open a Pull Request for review.

**Note on Secrets:** Please ensure that no real API Keys (like Stripe `sk_live_...`) are committed. The repository uses GitHub Push Protection to actively scan and block secret leaks.

---

## 📄 License
Private and Confidential. All rights reserved. Do not distribute without permission.
