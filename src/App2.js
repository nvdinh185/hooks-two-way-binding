import { useState } from 'react';

const courses = [
    {
        id: 1,
        name: 'Javascript'
    },
    {
        id: 2,
        name: 'PHP'
    },
    {
        id: 3,
        name: 'ReactJS'
    }
]

const App = () => {

    const [checked, setChecked] = useState(3);

    const handleSubmit = () => {
        console.log({ id: checked });
    }

    return (
        <div>
            {courses.map(course => (
                <div key={course.id}>
                    <input
                        type='radio'
                        checked={checked == course.id}
                        onChange={(e) => setChecked(course.id)}
                    />
                    {course.name}
                </div>
            ))}

            <button onClick={handleSubmit}>Register</button>
        </div>
    )
}

export default App;