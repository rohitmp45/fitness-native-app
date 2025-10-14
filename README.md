# React Native Boilerplate with Expo SDK 52

🚀 **Modern React Native boilerplate with Expo SDK 52, TypeScript, NativeWind, and best practices** ⚡️

## ✨ Features

### Core Technologies
- ⚡ [Expo SDK 52](https://expo.dev) - We are using EXPO SDK 52 as expo 53 is not full compaitable 
- ⚛️ [React Native 0.76](https://reactnative.dev) - Latest stable React Native version
- 🔥 [TypeScript 5.3](https://www.typescriptlang.org) - Full type safety and modern TypeScript features
- 🎨 [NativeWind 2.0](https://www.nativewind.dev) - Tailwind CSS for React Native
- 📱 [Expo Router v4](https://expo.github.io/router) - File-based routing with typed routes

### Developer Experience
- 🔍 [ESLint 8.55](https://eslint.org) - Code quality and consistency
- 🎨 [Prettier 3.1](https://prettier.io) - Automatic code formatting
- 🧪 [Jest 29.7](https://jestjs.io) & [React Testing Library](https://testing-library.com) - Comprehensive testing
- 🔗 [Husky](https://typicode.github.io/husky) - Git hooks for quality assurance
- 📦 [lint-staged](https://github.com/okonet/lint-staged) - Run linters on staged files

### Modern Features
- 🌙 **Dark Mode Support** - Automatic theme switching
- 📱 **Cross-Platform** - iOS, Android, and Web support
- ⚡ **Fast Refresh** - Instant updates during development
- 🔧 **Hot Reload** - Real-time code changes


## 🚀 Quick Start

### Prerequisites
- **Node.js**: 18.0.0 or higher (LTS recommended)
- **npm**: 8.0.0 or higher
- **Git**: Latest version

### Installation
```bash
# Clone the boilerplate
git clone <your-repo-url>
cd react-native-boilerplate

# Install dependencies
npm install

# Start development
npm start
```

### Platform-Specific Commands
```bash
# iOS (macOS only)
npm run dev:ios

# Android
npm run dev:android

# Web
npm run web
```

## ✅ Verification

Run the verification script to ensure everything is working:

```bash
./scripts/verify-boilerplate.sh
```

**Expected Results:**
- ✅ TypeScript compilation successful
- ✅ ESLint passed
- ✅ Prettier formatting successful
- ✅ Expo CLI working
- ✅ All packages compatible

## 📦 Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start Expo development server |
| `npm run dev:ios` | Run on iOS simulator |
| `npm run dev:android` | Run on Android emulator |
| `npm run web` | Run on web browser |
| `npm run check-types` | TypeScript type checking |
| `npm run lint` | ESLint code quality check |
| `npm run format` | Prettier code formatting |
| `npm run format:full` | Full formatting with ESLint |
| `npm test` | Run Jest tests |
| `npm run clean` | Clean build artifacts |

## 🏗️ Project Structure

```
react-native-boilerplate/
├── app/                    # Expo Router pages
│   ├── _layout.tsx        # Root layout
│   └── index.tsx          # Home page
├── src/
│   ├── templates/         # Reusable components
│   └── types/            # TypeScript types
├── assets/               # Images, fonts, etc.
├── docs/                # Documentation
├── scripts/             # Setup and utility scripts
└── e2e/                # End-to-end tests
```

##   Styling with NativeWind
 



## 🔧 Configuration

### TypeScript
- **Strict mode** enabled
- **Path aliases** configured (`@/` for `src/`)
- **Modern ES2022** features

### ESLint
- **Airbnb** style guide
- **TypeScript** support
- **React Native** specific rules
- **Prettier** integration

### Prettier
- **Consistent formatting** across the project
- **Git hooks** integration
- **Editor integration** ready

## 🚀 Development Workflow

### Code Quality
```bash
# Check code quality
npm run lint

# Format code
npm run format

# Type checking
npm run check-types
```

### Git Workflow & Commit Checks

#### 🔍 **Current Status: Pre-commit Hooks DISABLED**
Your boilerplate currently has **pre-commit hooks disabled** to allow direct commits.

#### ✅ **Direct Commits (Current Setup)**
```bash
git add .
git commit -m "Your commit message"
# ✅ Commits immediately without any checks
```

#### 🔧 **Manual Quality Checks (When Needed)**
```bash
# Run checks manually when you want to verify code quality
npm run lint          # ESLint code quality check
npm run check-types   # TypeScript type checking
npm run format        # Prettier code formatting
npm run format:full   # Full formatting with ESLint
```
 
*Node.js: 18.19.0 | Expo SDK: 52.0.0 | React Native: 0.76.9*


