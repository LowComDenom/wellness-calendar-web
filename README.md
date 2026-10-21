**Documentation in main repo : https://github.com/LowComDenom/wellness-calendar**

## Program Structure

The frontend starts in `src/main.jsx`, mounts `App.jsx`, and organizes the user experience into the shared layout and feature screens. Context modules provide account and user-data state; helper modules contain authentication, note CRUD, search, and statistics operations.

```mermaid
flowchart TD
    Entry[main.jsx] --> App[App.jsx: route tree]
    App --> Shell[Layout and navigation]
    Shell --> Screens[Feature screens]
    Screens --> Calendar[Calendar: year, month, day]
    Calendar --> Notes[Notes: create, preview, detail, forms]
    Calendar --> Goals[Goals: create, list, detail, weekly summary]
    Screens --> User[User: login, register, settings, stats]
    Screens --> Timeline[Timeline and weekly summary]
    Shell --> SearchUI[Search]
    AccountContext[Account context] --> Auth[Authentication helpers]
    UserDataContext[User data context] --> DataHelpers[Note CRUD, search, stats helpers]
    Shell -. uses .-> AccountContext
    Shell -. uses .-> UserDataContext
    Screens -. consume .-> UserDataContext
    SearchUI -. uses .-> DataHelpers
    Backend((Backend / storage)) <--> Auth
    Backend <--> DataHelpers
```

## Template Notes

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
