import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const BarChartGeneric = (props: {infoData: Array<number>, labelsData: Array<number|string>}) => {
    const {infoData, labelsData} = props

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top' as const,
            }
        },
        
    };


    const data = {
        labels: labelsData,
        datasets: [
            {
                label: 'score by WPM',
                data: infoData,
                backgroundColor: '#e2b533',
            },
        ],
    };

    return <Bar data={data} options={options}/>
}