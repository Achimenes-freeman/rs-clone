import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { MainContextProvider } from './context/MainContext/MainContext';
import { TestContextProvider } from './context/TestContext/TestContext';
import themes from './themes.module.scss';
import fonts from './fonts.module.scss';
import './index.scss';
import { PageContextProvider } from './context/PageContext/PageContext';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

document.getElementById('root')?.classList.add(`${themes.defaultTheme}`, `${fonts.robotoMonoFont}`)

root.render(
    <PageContextProvider>
        <MainContextProvider>
            <TestContextProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </TestContextProvider>
        </MainContextProvider>
    </PageContextProvider>
);
