import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import CrewmateForm from '../components/CrewmateForm.jsx';
import { createCrewmate } from '../services/crewmates.js';
import './FormPages.css';

function CreateCrewmatePage() {
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleCreate = async (values) => {
        try {
            setError('');
            await createCrewmate(values);
            navigate('/crewmates');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <section className="form-page">
            <h2>Recruit a new crewmate</h2>
            {error && <p className="error">{error}</p>}
            <CrewmateForm submitLabel="Create crewmate" onSubmit={handleCreate} />
        </section>
    );
}

export default CreateCrewmatePage;