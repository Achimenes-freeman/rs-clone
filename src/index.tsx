import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { MainContextProvider } from './context/MainContext/MainContext';
import { TestContextProvider } from './context/TestContext/TestContext';
import './index.scss';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(

        <MainContextProvider>
            <TestContextProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </TestContextProvider>
        </MainContextProvider>

);
