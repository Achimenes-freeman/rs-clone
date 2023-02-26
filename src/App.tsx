// import { useContext } from 'react';
// import { TestComponent } from './components/TestComponent/TestComponent';
// import { TestContext } from './context/TestContext/TestContext';
// import { MainContext } from './context/MainContext/MainContext';
// import { LineChartGeneric } from './generics/LineChartGeneric/LineChartGeneric';
import { BarChartGeneric } from "./generics/BarChartGeneric/BarChartGeneric"

export const App = () => {

    // const {testContext: {printsDynamics}} = useContext(TestContext)
    // const {isFinished} = useContext(MainContext)

    const infoData = [10,13,16,27,34]
    const labelsData = ['0-9', '10-19', '20-29', '30-39', '40-49']

    return (
        <div className='main'>
            {/* {isFinished ? <LineChartGeneric printsDynamics={printsDynamics}/>: <TestComponent/>} */}

            <BarChartGeneric infoData={infoData} labelsData={labelsData}/>
        </div>
    )
}
