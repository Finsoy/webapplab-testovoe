# WebAppLab Test Project

A modern React application built with TypeScript, featuring a supplier directory with filtering, search, and favorites functionality. The app includes both desktop and mobile-optimized interfaces with dark/light theme support.

## 🚀 Features

- **Supplier Directory**: Browse and search through a comprehensive list of suppliers
- **Advanced Filtering**: Filter by category, city, rating, and other criteria
- **Favorites System**: Save and manage favorite suppliers
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Theme Support**: Dark and light theme switching
- **Real-time Search**: Debounced search with instant results
- **Infinite Scroll**: Load more suppliers with pagination
- **Modern UI**: Built with Ant Design components and custom styling

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **UI Library**: Ant Design
- **State Management**: Zustand
- **Data Fetching**: TanStack Query (React Query)
- **Routing**: React Router v7
- **Styling**: SCSS with CSS Modules
- **HTTP Client**: Axios
- **Mock API**: JSON Server
- **Code Quality**: ESLint, Prettier

## 📁 Project Structure

```
src/
├── api/                    # API layer and mock data
├── app/                    # App configuration and providers
├── entities/               # Business entities (Card)
├── pages/                  # Page components
├── shared/                 # Shared utilities and components
│   ├── assets/            # Icons and images
│   ├── constants/         # App constants
│   ├── hooks/             # Custom hooks
│   ├── router/            # Router utilities
│   ├── types/             # TypeScript types
│   └── ui-kit/            # Reusable UI components
├── store/                  # Global state management
└── widgets/                # Complex UI components
    ├── CardList/          # Supplier cards display
    ├── DrawerCard/        # Individual card component
    ├── Filters/           # Filtering system
    ├── Header/            # App header
    ├── Footer/            # App footer
    ├── Layout/            # Layout components
    ├── Search/            # Search functionality
    └── ThemeSwitcher/     # Theme toggle
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd webapplab-testovoe
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the mock API server** (in a separate terminal)

   ```bash
   npm run mock
   ```

   This will start JSON Server on `http://localhost:3001`

4. **Start the development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run mock` - Start mock API server
