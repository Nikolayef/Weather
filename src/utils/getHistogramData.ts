export const getHistogramData = (temperatures: number[]) => {
  const min = Math.min(...temperatures)
  const max = Math.max(...temperatures)
  const range = max - min
  const barCount = Math.max(Math.ceil(range / 10), 5)
  const barSize = range / barCount

  const bars = new Array(barCount).fill(0)
  const barLabels: string[] = []

  for (let i = 0; i < barCount; i++) {
    const start = min + i * barSize
    const end = min + (i + 1) * barSize
    barLabels.push(`${start.toFixed(1)}°C - ${end.toFixed(1)}°C`)
  }

  temperatures.forEach((temp) => {
    const barIndex = Math.min(Math.floor((temp - min) / barSize), barCount - 1)
    bars[barIndex]++
  })

  return { bars, barLabels }
}
