import { useState } from 'react';

const App = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        console.log({
            name,
            email
        });
    }

    return (
        <div>
            <div>
                <label>Name:</label>
                <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type='text'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <button onClick={handleSubmit}>Register</button>
        </div>
    )
}

export default App;