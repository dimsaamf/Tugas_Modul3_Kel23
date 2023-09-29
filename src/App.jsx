import { useState, useEffect } from "react";
import gambarPertama from "./assets/gambar1.png";
import gambarKedua from "./assets/gambar2.png";
import "./App.css";

function GambarKedua() {
    return (
        <>
            <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                <img src={gambarKedua} className="logo" alt="gambar kedua" />
            </a>
        </>
    );
}

function GambarPertama() {
    return (
        <>
            <a href="https://react.dev" target="_blank" rel="noreferrer">
                <img src={gambarPertama} className="logo" alt="gambar pertama" />
            </a>
        </>
    );
}

function App() {
    const [count, setCount] = useState(0);
    const [isten, setIsten] = useState(false);
    const [even, setEven] = useState(null);

    useEffect(() => {
        if (count === 10) {
            setIsten(true);
        } else {
            setIsten(false);
        }
    }, [count]);

    useEffect(() => {
        if (count % 2 === 0) {
            setEven(true);
        } else {
            setEven(false);
        }
    }, [count]);

    return (
        <>
            {even === true ? <GambarKedua /> : <GambarPertama />}
            <h3>Ini counter punya Kelompok 15</h3>
            <div className="card">
            {count === 10 ? <p>Counternya udah 10</p> : <p>{count}</p>}
      {count === 10 ? (
        <button onClick={() => setCount(count - 1)}>-</button>
      ) : (
        <>
          <button onClick={() => setCount(count + 1)}>+</button>
          {count > 0 && <button onClick={() => setCount(count - 1)}>-</button>}
        </>
      )}
            </div>
        </>
    );
}

export default App;