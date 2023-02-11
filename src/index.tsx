import ReactDOM from 'react-dom/client';
import { App } from './App';
import { MainContextProvider } from './context/MainContext';
import './index.scss';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <MainContextProvider>
        <App />
    </MainContextProvider>
);
