import { Route, Routes } from "react-router-dom";

import {
  FavoritesPage,
  LegalDocPage,
  LegalHubPage,
  Main,
  MultiFusionPage,
} from "~/components";

export const AppRouter: React.FC = () => (
  <Routes>
    <Route path="/multi" element={<MultiFusionPage />} />
    <Route path="/favorites" element={<FavoritesPage />} />
    <Route path="/legal" element={<LegalHubPage />} />
    <Route path="/legal/:page" element={<LegalDocPage />} />
    <Route path="/:id?" element={<Main />} />
  </Routes>
);
