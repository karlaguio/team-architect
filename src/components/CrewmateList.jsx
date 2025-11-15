import { Link } from 'react-router-dom';
import './CrewmateList.css';

function CrewmateList({ crew }) {
    if (crew.length === 0) {
        return <p className="empty-state">No crewmates yet. Recruit your first hero!</p>;
    }

    return (
        <ul className="crewmate-list">
            {crew.map((mate) => (
                <li key={mate.id}>
                    <Link to={`/crewmates/${mate.id}`} className="crewmate-card">
                        <div className="card-header">
                            <h3>{mate.name}</h3>
                            <span>{mate.power_level}</span>
                        </div>
                        <p className="card-meta">
                            {mate.role} • {mate.element}
                        </p>
                        <p className="card-date">
                            Recruited {new Date(mate.created_at).toLocaleString()}
                        </p>
                        <span className="edit-link">View &amp; Edit →</span>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default CrewmateList;