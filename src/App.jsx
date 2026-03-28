import { Navigate, Route, Routes } from "react-router-dom";
import { categoryPages, homeData, quickLinkPages } from "./data/helpData";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import QuickLinkPage from "./pages/QuickLinkPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage data={homeData} />} />
      {categoryPages.map((page) => (
        <Route
          key={page.slug}
          path={`/${page.slug}`}
          element={<CategoryPage page={page} />}
        />
      ))}
      {quickLinkPages.map((page) => (
        <Route
          key={page.slug}
          path={`/${page.slug}`}
          element={<QuickLinkPage page={page} />}
        />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
