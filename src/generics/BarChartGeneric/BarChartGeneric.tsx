import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Tick
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

export const BarChartGeneric = (props: {infoData: Array<number>, labelsData: Array<number|string>, title: string}) => {
    const {infoData, labelsData, title} = props

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
              display: true,
              title: {
                display: true
              }
            },
            y: {
                ticks: {
                    callback: (value: string|number, index: number, ticks:Array<Tick>) => value === ticks.at(-1)?.value ? value : null
                },
                grid: {
                    drawTicks: false,
                },
                display: true,
                title: {
                    display: true,
                    text: title,
                    font:{
                        size: 16
                    }
                },
            }
        }
    };


    const data = {
        labels: labelsData,
        datasets: [
            {
                label: title,
                data: infoData,
                backgroundColor: '#e2b533',
            },
        ],
    };

    return <Bar data={data} options={options}/>
}