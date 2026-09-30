/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CabsPage from "./pages/CabsPage";
import QueryPage from "./pages/QueryPage";
import DestinationsPage from "./pages/DestinationsPage";
import ItineraryPage from "./pages/ItineraryPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cabs" element={<CabsPage />} />
        <Route path="/guwahati-taxi" element={<CabsPage />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/itinerary" element={<ItineraryPage />} />
        <Route path="/query" element={<QueryPage />} />
      </Routes>
    </Router>
  );
}
