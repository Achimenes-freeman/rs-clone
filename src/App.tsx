import { useContext } from 'react';
import { TestComponent } from './components/TestComponent/TestComponent';
import { MainContext } from './context/MainContext/MainContext';

import { Result } from './components/Result/Result';

export const App = () => {

    const {isFinished} = useContext(MainContext)

    return (
        <div className='main'>
            {isFinished ? <Result/>: <TestComponent/>}
        </div>
    )
}
