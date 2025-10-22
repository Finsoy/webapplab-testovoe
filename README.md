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

## 📱 Usage

### Desktop Interface

1. **Browse Suppliers**: View all available suppliers in a grid layout
2. **Filter Results**: Use the filter panel to narrow down results by:
   - Category (Автотовары, Аксессуары, Дом и сад, etc.)
   - City (Москва, Санкт-Петербург, etc.)
   - Rating
   - Other criteria
3. **Search**: Use the search bar to find specific suppliers
4. **Favorites**: Click the heart icon to add/remove suppliers from favorites
5. **Theme Toggle**: Switch between light and dark themes using the theme switcher

### Mobile Interface

1. **Mobile Search**: Navigate to `/mobile-search` for mobile-optimized search
2. **Touch-Friendly**: All interactions are optimized for touch devices
3. **Responsive Layout**: Automatic layout adaptation for different screen sizes

### Key Features

- **Infinite Scroll**: Click "Показать еще" to load more suppliers
- **Real-time Filtering**: Filters update results instantly
- **Favorites Management**: View and manage your favorite suppliers in the "Избранные" tab
- **Theme Persistence**: Your theme preference is saved across sessions

## 🎨 Theming

The application supports both light and dark themes:

- **Light Theme**: Clean, bright interface for daytime use
- **Dark Theme**: Easy on the eyes for low-light environments
- **Automatic Persistence**: Theme choice is saved in browser storage

## 🔧 Configuration

### Environment Variables

No environment variables are required for basic functionality. The app uses a mock API server for development.

### API Configuration

The app is configured to work with the mock API server running on port 3001. To use a real API:

1. Update the base URL in `src/api/axios.ts`
2. Modify the API endpoints in `src/api/` files
3. Update the data types in `src/entities/card/types.ts`

## 🧪 Development

### Code Style

- **ESLint**: Configured with React and TypeScript rules
- **Prettier**: Automatic code formatting
- **TypeScript**: Strict type checking enabled

### Adding New Features

1. **Components**: Add to appropriate layer in `src/`
2. **API**: Extend `src/api/` with new endpoints
3. **Types**: Define types in `src/shared/types/` or entity-specific folders
4. **Styling**: Use SCSS modules for component-specific styles

### State Management

- **Global State**: Use Zustand stores in `src/store/`
- **Server State**: Use TanStack Query for API data
- **Local State**: Use React hooks for component state

## 📦 Build and Deployment

### Production Build

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Deployment

The app can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist/` folder
- **GitHub Pages**: Use GitHub Actions for automatic deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Ant Design](https://ant.design/) for the UI component library
- [TanStack Query](https://tanstack.com/query) for data fetching
- [Vite](https://vitejs.dev/) for the build tool
- [React Router](https://reactrouter.com/) for routing
