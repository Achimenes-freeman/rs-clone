import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Filler,
    Tooltip,
    Legend,
  } from 'chart.js';
import {Line} from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Filler,
    Tooltip,
    Legend
);

export const LineChartGeneric = (props: {printsDynamics: Array<number>}) => {
    const {printsDynamics} = props;


    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top' as const,
            }
        },
        
    };

    const labels = printsDynamics.map((item, index) => index + 1)

    const data = {
        labels,
        datasets: [
            {
                label: 'WPM Dynamic',
                data: printsDynamics,
                borderColor: '#e2b533',
                pointBackgroundColor: '#e2b533',
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                fill: 'origin',
                tension: 0.4
            },
        ],
    };

    return <Line data={data} options={options}/>
}
