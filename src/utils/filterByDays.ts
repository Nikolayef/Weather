export function filterData(
  data: { dates: string[]; temperatures: number[]; humidities: number[] },
  days: number
) {
  const today = new Date()
  const start = today.getDate()
  const end = start + days - 1
  const filteredIndexes = data?.dates
    .map((d: string, i: number) => {
      const day = parseInt(d.slice(3, 5), 10)
      if (day >= start && day <= end) return i
      return null
    })
    .filter((i: number | null): i is number => i !== null)
  return {
    dates: filteredIndexes?.map((i: number) => data.dates[i]),
    temperatures: filteredIndexes?.map((i: number) => data.temperatures[i]),
    humidities: filteredIndexes?.map((i: number) => data.humidities[i]),
  }
}
