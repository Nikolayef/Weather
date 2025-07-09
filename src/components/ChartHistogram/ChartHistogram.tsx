import { Chart as ChartJS } from "react-chartjs-2"
import { type WeatherData } from "../../hooks/useGetWeather"
import { getHistogramData } from "../../utils/getHistogramData"

export function ChartHistogram({ weatherData }: { weatherData: WeatherData }) {
  const { bars, barLabels } = getHistogramData(weatherData.temperatures)

  const data = {
    labels: barLabels,
    datasets: [
      {
        label: "Количество измерений",
        data: bars,
        backgroundColor: [
          "rgba(54, 162, 235, 0.8)",
          "rgba(74, 237, 62, 0.8)",
          "rgba(237, 226, 15, 0.8)",
          "rgba(254, 81, 254, 0.8)",
          "rgba(15, 126, 237, 0.8)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 0.8)",
          "rgba(74, 237, 62, 0.8)",
          "rgba(237, 226, 15, 0.8)",
          "rgba(237, 15, 237, 0.8)",
          "rgba(15, 126, 237, 0.8)",
        ],
        borderWidth: 1,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Количество измерений",
        },
      },
      x: {
        title: {
          display: true,
          text: "Диапазон температуры",
        },
      },
    },
  }

  return <ChartJS type='bar' data={data} options={options} />
}
