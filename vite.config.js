import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import pkg from "./package.json";

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    plugins: [
      react(),
      federation({
        name: "navbar-app",
        filename: "remoteEntry.js",
        exposes: {
          "./Navbar": "./src/App.jsx",
        },
        shared: {
          react: {
            version: pkg.dependencies.react,
          },
          "react-dom": {
            version: pkg.dependencies["react-dom"],
          },
          "react-router-dom": {
            version: pkg.dependencies["react-router-dom"],
          },
          "react-query": {
            version: pkg.dependencies["react-query"],
          },
          "react-redux": {
            version: pkg.dependencies["react-redux"],
          },
          "@reduxjs/toolkit": {
            version: pkg.dependencies["@reduxjs/toolkit"],
          },
          "@emotion/react": {
            version: pkg.dependencies["@emotion/react"],
          },
          "@headlessui/react": {
            version: pkg.dependencies["@headlessui/react"],
          },
          "@ebay/nice-modal-react": {
            version: pkg.dependencies["@ebay/nice-modal-react"],
          },
          "@mantine/core": {
            version: pkg.dependencies["@mantine/core"],
          },
          "@mantine/dates": {
            version: pkg.dependencies["@mantine/dates"],
          },
          "@mantine/dropzone": {
            version: pkg.dependencies["@mantine/dropzone"],
          },
          "@mantine/form": {
            version: pkg.dependencies["@mantine/form"],
          },
          "@mantine/hooks": {
            version: pkg.dependencies["@mantine/hooks"],
          },
        },
      }),
    ],
    build: {
      target: "esnext", // needed to final build
    },
    server: {
      port: 5001,
      proxy: {
        "/api/employees/v1": {
          target: process.env.VITE_API_EMPLOYEES_SERVICE_URL,
          changeOrigin: true,
          secure: false,
          rewrite: (path) =>
            path.replace(/^\/api\/employees\/v1/, ""),
        },
        "/api/groups/v1": {
          target: process.env.VITE_API_GROUPS_SERVICE_URL,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api\/groups\/v1/, ""),
        },
        "/api/repository/v1": {
          target: process.env.VITE_API_REPOSITORY_SERVICE_URL,
          changeOrigin: true,
          secure: false,
          rewrite: (path) =>
            path.replace(/^\/api\/repository\/v1/, ""),
        },
        "/api/cms/v1": {
          target: process.env.VITE_API_CMS_SERVICE_URL,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api\/cms\/v1/, ""),
        },
        "/api/course/v1": {
          target: process.env.VITE_API_COURSE_SERVICE_URL,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api\/course\/v1/, ""),
        },
        "/api/signature/v1": {
          target: process.env.VITE_API_SIGNATURE_SERVICE_URL,
          changeOrigin: true,
          secure: false,
          rewrite: (path) =>
            path.replace(/^\/api\/signature\/v1/, ""),
        },
        "/api/positions/v1": {
          target: process.env.VITE_API_POSITIONS_SERVICE_URL,
          changeOrigin: true,
          secure: true,
          rewrite: (path) =>
            path.replace(/^\/api\/positions\/v1/, ""),
        },
        "/api/hq/v1": {
          target: process.env.VITE_API_HQ_SERVICE_URL,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api\/hq\/v1/, ""),
        },
        "/api/kmap/v1": {
          target: process.env.VITE_API_KMAP_SERVICE_URL,
          changeOrigin: true,
          secure: true,
          rewrite: (path) => path.replace(/^\/api\/kmap\/v1/, ""),
        },
        "/api/auth/v1": {
          target: process.env.VITE_API_AUTH_SERVICE_URL,
          changeOrigin: true,
          secure: true,
          rewrite: (path) => path.replace(/^\/api\/auth\/v1/, ""),
        },
        "/api/social/v1": {
          target: process.env.VITE_API_SOCIAL_SERVICE_URL,
          changeOrigin: true,
          secure: true,
          rewrite: (path) => path.replace(/^\/api\/social\/v1/, ""),
        },
        "/api/gamification/v1": {
          target: process.env.VITE_API_GAMIFICATION_SERVICE_URL,
          changeOrigin: true,
          secure: true,
          rewrite: (path) =>
            path.replace(/^\/api\/gamification\/v1/, ""),
        },
        "/api/notifications/v1": {
          target: process.env.VITE_API_NOTIFICATIONS_SERVICE_URL,
          changeOrigin: true,
          secure: false,
          ws: true,
          rewrite: (path) =>
            path.replace(/^\/api\/notifications\/v1/, ""),
        },
        "/api/mytravel/v1": {
          target: process.env.VITE_API_MYTRAVEL_SERVICE_URL,
          changeOrigin: true,
          secure: false,
          ws: true,
          rewrite: (path) => path.replace(/^\/api\/mytravel\/v1/, ""),
        },
        "/api/search-engine/v1": {
          target: process.env.VITE_API_SEARCH_ENGINE_SERVICE_URL,
          changeOrigin: true,
          secure: true,
          rewrite: (path) =>
            path.replace(/^\/api\/search-engine\/v1/, ""),
        },
        "/api/daily-quiz/v1": {
          target: process.env.VITE_API_DAILY_QUIZ_SERVICE_URL,
          changeOrigin: true,
          secure: true,
          rewrite: (path) =>
            path.replace(/^\/api\/daily-quiz\/v1/, ""),
        },
      },
    },
  });
};
