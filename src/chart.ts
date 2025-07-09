import {
  type ChartOptions,
  type ChartData,
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  PointElement,
  LineElement,
  BarController,
  LineController,
  LinearScale,
  Filler,
  Title,
  BarElement,
} from "chart.js"

export const registerChartJS = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    Filler,
    BarController,
    LineController
  )
}
export interface ILineProps {
  options: ChartOptions<"line">
  data: ChartData<"line">
}

export interface IBarProps {
  options: ChartOptions<"bar">
  data: ChartData<"bar">
}

export type ChartType = "line" | "bar"
