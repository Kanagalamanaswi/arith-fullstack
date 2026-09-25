import { useState } from 'react';
import { NODE_URL } from './data';
import { callAPI } from './callapi';

function App() {

    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [result, setResult] = useState(null);

    const handleAdd = () => {

        if (!value1 || !value2) {
            alert("Please enter both numbers");
            return;
        }

        const payload = {
            value1: value1,
            value2: value2
        };

        const url = `${NODE_URL}/add`;

        callAPI("POST", url, payload, (res) => {

            if (res.status === "success") {
                setResult(res.result);
            }

        });
    };

    const handleSubtract = () => {

        if (!value1 || !value2) {
            alert("Please enter both numbers");
            return;
        }

        const url = `${NODE_URL}/subtract/${value1}/${value2}`;

        callAPI("GET", url, null, (res) => {

            if (res.status === "success") {
                setResult(res.result);
            }

        });
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>

            <h2>Arithmetic Calculator (Full-Stack)</h2>

            <div>
                <label>Value 1: </label>

                <input
                    type="number"
                    value={value1}
                    onChange={(e) => setValue1(e.target.value)}
                />
            </div>

            <br />

            <div>
                <label>Value 2: </label>

                <input
                    type="number"
                    value={value2}
                    onChange={(e) => setValue2(e.target.value)}
                />
            </div>

            <br />

            <button onClick={handleAdd}>
                Add (POST)
            </button>

            {' '}

            <button onClick={handleSubtract}>
                Subtract (GET)
            </button>

            <hr />

            <h3>
                Result: {result !== null ? result : 'N/A'}
            </h3>

        </div>
    );
}

export default App;