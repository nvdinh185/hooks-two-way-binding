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

    const [checked, setChecked] = useState([]);

    const handleChecked = (id) => {
        if (!checked.includes(id)) {
            let checkArr = [...checked];
            checkArr.push(id);
            setChecked(checkArr);
        } else {
            let checkArr = checked.filter(item => item != id);
            setChecked(checkArr);
        }
    }

    const handleSubmit = () => {
        console.log({ ids: checked });
    }

    return (
        <div>
            {courses.map(course => (
                <div key={course.id}>
                    <input
                        type='checkbox'
                        checked={checked.includes(course.id)}
                        onChange={(e) => handleChecked(course.id)}
                    />
                    {course.name}
                </div>
            ))}

            <button onClick={handleSubmit}>Register</button>
        </div>
    )
}

export default App;