/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-absolute-path */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import reactLogo from '../../assets/react.svg';
import viteLogo from '/vite.svg';
import '../../App.css';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank" rel="noreferrer">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <h1>Vite + React</h1>
      <div className="card">
        <button type="button" onClick={() => setCount((param) => param + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ul>
        <Link to="/about">About | </Link>
        <Link to="/contact"> Contact | </Link>
        <Link to="/faq"> Faq</Link>
      </ul>
    </div>
  );
}

export default Home;
