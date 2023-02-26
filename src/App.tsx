import { useContext } from 'react';
import { TestComponent } from './components/TestComponent/TestComponent';
import { TestContext } from './context/TestContext/TestContext';
import { MainContext } from './context/MainContext/MainContext';
import { LineChartGeneric } from './generics/LineChartGeneric/LineChartGeneric';

export const App = () => {

    const {testContext: {printsDynamics}} = useContext(TestContext)
    const {isFinished} = useContext(MainContext)

    return (
        <div className='main'>
            {isFinished ? <LineChartGeneric printsDynamics={printsDynamics}/>: <TestComponent/>}
        </div>
    )
}
