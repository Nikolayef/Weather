import { type ILineProps } from "../../chart"
import { type WeatherData } from "../../hooks/useGetWeather"
import { Chart as ChartJS } from "react-chartjs-2"
import { calculateMovingAverage } from "../../utils/calculateMovingAverage"

export function ChartMovingAverage({
  weatherData,
}: {
  weatherData: WeatherData
}) {
  const movingAverageData = calculateMovingAverage(weatherData.temperatures)

  const data: ILineProps["data"] = {
    labels: weatherData.dates,
    datasets: [
      {
        label: "Температура",
        data: weatherData.temperatures,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.1)",
        tension: 0.4,
        pointRadius: 3,
      },
      {
        label: `Скользящая средняя`,
        data: movingAverageData,
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "rgba(54, 162, 235, 0.1)",
        tension: 0.4,
        pointRadius: 4,
        borderWidth: 2,
      },
    ],
  }

  const options: ILineProps["options"] = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "Температура (°C)",
        },
      },
      x: {
        title: {
          display: true,
          text: "Время",
        },
      },
    },
  }

  return <ChartJS type='line' data={data} options={options} />
}
