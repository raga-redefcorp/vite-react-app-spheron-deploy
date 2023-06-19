import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const env_name = import.meta.env.VITE_ENV_NAME

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Env Name: {env_name}</p>
        <p>
          <button onClick={() => setCount(count => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
};

export default App;
