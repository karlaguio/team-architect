import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchCrewmateById } from '../services/crewmates.js';
import './CrewmateDetailPage.css';

function CrewmateDetailPage() {
    const { id } = useParams();
    const [crewmate, setCrewmate] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        (async () => {
            try {
                const data = await fetchCrewmateById(id);
                setCrewmate(data);
            } catch (err) {
                setError(err.message);
            }
        })();
    }, [id]);

    if (error) return <p className="error">{error}</p>;
    if (!crewmate) return <p>Loading crewmate...</p>;

    return (
        <section className="detail-page">
            <header>
                <h2>{crewmate.name}</h2>
                <Link to={`/crewmates/${id}/edit`} className="primary-link">
                    Edit crewmate
                </Link>
            </header>

            <dl>
                <div>
                    <dt>Role</dt>
                    <dd>{crewmate.role}</dd>
                </div>
                <div>
                    <dt>Element</dt>
                    <dd>{crewmate.element}</dd>
                </div>
                <div>
                    <dt>Power Level</dt>
                    <dd>{crewmate.power_level}</dd>
                </div>
                <div>
                    <dt>Bio</dt>
                    <dd>{crewmate.bio || 'No bio yet.'}</dd>
                </div>
                <div>
                    <dt>Recruited</dt>
                    <dd>{new Date(crewmate.created_at).toLocaleString()}</dd>
                </div>
            </dl>
        </section>
    );
}

export default CrewmateDetailPage;