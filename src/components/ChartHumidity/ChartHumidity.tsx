import { type ILineProps } from "../../chart"
import { type WeatherData } from "../../hooks/useGetWeather"
import { Chart as ChartJS } from "react-chartjs-2"

export function ChartHumidity({ weatherData }: { weatherData: WeatherData }) {
  const data: ILineProps["data"] = {
    labels: weatherData.dates,
    datasets: [
      {
        label: "Температура",
        data: weatherData.temperatures,
        borderColor: "rgb(255, 84, 84)",
        tension: 0.4,
        yAxisID: "y",
      },
      {
        label: "Влажность",
        data: weatherData.humidities,
        borderColor: "rgb(99, 234, 255)",
        tension: 0.4,
        yAxisID: "y1",
      },
    ],
  }

  const options: ILineProps["options"] = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
        title: {
          display: true,
          text: "Температура (°C)",
        },
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        title: {
          display: true,
          text: "Влажность (%)",
        },
      },
    },
  }

  return <ChartJS type='line' data={data} options={options} />
}
