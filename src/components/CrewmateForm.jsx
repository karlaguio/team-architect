import { useState } from 'react';
import './CrewmateForm.css';

const roles = ['Strategist', 'Bruiser', 'Support', 'Sniper'];
const elements = ['Arcane', 'Tech', 'Nature', 'Shadow'];
const powerLevels = ['Novice', 'Elite', 'Legendary'];

function CrewmateForm({ initialValues, onSubmit, onDelete, submitLabel }) {
    const [formState, setFormState] = useState({
        name: '',
        role: roles[0],
        element: elements[0],
        power_level: powerLevels[0],
        bio: '',
        ...initialValues,
    });

    const handleChange = (field) => (event) => {
        setFormState((prev) => ({ ...prev, [field]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(formState);
    };

    return (
        <form className="crewmate-form" onSubmit={handleSubmit}>
            <label>
                Name
                <input value={formState.name} onChange={handleChange('name')} required />
            </label>

            <fieldset>
                <legend>Role</legend>
                <div className="option-row">
                    {roles.map((role) => (
                        <button
                            key={role}
                            type="button"
                            className={formState.role === role ? 'selected' : ''}
                            onClick={() => setFormState((prev) => ({ ...prev, role }))}
                        >
                            {role}
                        </button>
                    ))}
                </div>
            </fieldset>

            <fieldset>
                <legend>Element</legend>
                <div className="option-row">
                    {elements.map((element) => (
                        <button
                            key={element}
                            type="button"
                            className={formState.element === element ? 'selected' : ''}
                            onClick={() => setFormState((prev) => ({ ...prev, element }))}
                        >
                            {element}
                        </button>
                    ))}
                </div>
            </fieldset>

            <fieldset>
                <legend>Power Level</legend>
                <div className="option-row">
                    {powerLevels.map((power) => (
                        <button
                            key={power}
                            type="button"
                            className={formState.power_level === power ? 'selected' : ''}
                            onClick={() => setFormState((prev) => ({ ...prev, power_level: power }))}
                        >
                            {power}
                        </button>
                    ))}
                </div>
            </fieldset>

            <label>
                Bio
                <textarea
                    rows="4"
                    value={formState.bio}
                    onChange={handleChange('bio')}
                    placeholder="Lore, strengths, signature moves..."
                />
            </label>

            <div className="form-actions">
                <button type="submit">{submitLabel}</button>
                {onDelete && (
                    <button type="button" className="danger" onClick={onDelete}>
                        Delete crewmate
                    </button>
                )}
            </div>
        </form>
    );
}

export default CrewmateForm;