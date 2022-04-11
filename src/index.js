import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import "./styles/Components.css";
import "./styles/View.css";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);