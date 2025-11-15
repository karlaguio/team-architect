import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import CrewSummaryPage from './pages/CrewSummaryPage.jsx';
import CreateCrewmatePage from './pages/CreateCrewmatePage.jsx';
import CrewmateDetailPage from './pages/CrewmateDetailPage.jsx';
import EditCrewmatePage from './pages/EditCrewmatePage.jsx';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/crewmates" replace />} />
        <Route path="/crewmates" element={<CrewSummaryPage />} />
        <Route path="/crewmates/new" element={<CreateCrewmatePage />} />
        <Route path="/crewmates/:id" element={<CrewmateDetailPage />} />
        <Route path="/crewmates/:id/edit" element={<EditCrewmatePage />} />
      </Route>
    </Routes>
  );
}

export default App;