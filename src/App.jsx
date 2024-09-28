import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { base } from "../config";
import MainLayout from "./layouts/MainLayout";

import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
export default function App() {
  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route path={base} element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path={base + "news"} element={<NewsPage />} />
          </Route>,
        ),
      )}
    />
  );
}
