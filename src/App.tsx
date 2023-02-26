import { useContext } from 'react';
import { TestComponent } from './components/TestComponent/TestComponent';
import { MainContext } from './context/MainContext/MainContext';

export const App = () => {

    const {isFinished} = useContext(MainContext)

    return (
        <div className='main'>
            {isFinished ? 'done': <TestComponent/>}
        </div>
    )
}
