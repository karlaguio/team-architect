import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CrewmateForm from '../components/CrewmateForm.jsx';
import { fetchCrewmateById, updateCrewmate, deleteCrewmate } from '../services/crewmates.js';
import './FormPages.css';

function EditCrewmatePage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [initialValues, setInitialValues] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        (async () => {
            try {
                const data = await fetchCrewmateById(id);
                setInitialValues(data);
            } catch (err) {
                setError(err.message);
            }
        })();
    }, [id]);

    const handleUpdate = async (values) => {
        await updateCrewmate(id, values);
        navigate(`/crewmates/${id}`);
    };

    const handleDelete = async () => {
        if (!window.confirm('Remove this crewmate from the roster?')) return;
        await deleteCrewmate(id);
        navigate('/crewmates');
    };

    if (error) return <p className="error">{error}</p>;
    if (!initialValues) return <p>Loading crewmate...</p>;

    return (
        <section className="form-page">
            <h2>Edit crewmate</h2>
            <CrewmateForm
                initialValues={initialValues}
                submitLabel="Save changes"
                onSubmit={handleUpdate}
                onDelete={handleDelete}
            />
        </section>
    );
}

export default EditCrewmatePage;