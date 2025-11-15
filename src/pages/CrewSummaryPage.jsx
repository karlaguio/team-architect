import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CrewmateList from '../components/CrewmateList.jsx';
import { fetchCrewmates } from '../services/crewmates.js';
import './CrewSummaryPage.css';

function CrewSummaryPage() {
    const [crew, setCrew] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const data = await fetchCrewmates();
                setCrew(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    return (
        <section className="summary-page">
            <header>
                <h2>Your Strike Team</h2>
                <Link className="primary-link" to="/crewmates/new">
                    + Recruit new crewmate
                </Link>
            </header>

            {loading && <p>Loading roster...</p>}
            {error && <p className="error">{error}</p>}
            {!loading && !error && <CrewmateList crew={crew} />}
        </section>
    );
}

export default CrewSummaryPage;