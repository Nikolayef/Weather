import { type ILineProps, type IBarProps, type ChartType } from "../../chart"
import { type WeatherData } from "../../hooks/useGetWeather"
import { Chart as ChartJS } from "react-chartjs-2"

export function ChartTemperature({
  weatherData,
  chartType = "line",
}: {
  weatherData: WeatherData
  chartType?: ChartType
}) {
  if (chartType === "line") {
    const data: ILineProps["data"] = {
      labels: weatherData.dates,
      datasets: [
        {
          label: "Температура",
          data: weatherData.temperatures,
          borderColor: "rgb(255, 99, 132)",
          tension: 0.4,
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
    }

    return <ChartJS type='line' data={data} options={options} />
  }

  const data: IBarProps["data"] = {
    labels: weatherData.dates,
    datasets: [
      {
        label: "Температура",
        data: weatherData.temperatures,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 1,
      },
    ],
  }

  const options: IBarProps["options"] = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  }

  return <ChartJS type='bar' data={data} options={options} />
}
