export function calculateMovingAverage(data: number[]): number[] {
  const result = data.reduce(
    (acc: { pool: number[]; average: number[] }, temp) => {
      acc.pool.push(temp)

      if (acc.pool.length > 3) {
        acc.pool.shift()
      }

      const average =
        acc.pool.reduce((sum, val) => sum + val, 0) / acc.pool.length
      acc.average.push(Math.round(average * 10) / 10)

      return acc
    },
    {
      pool: [],
      average: [],
    }
  )

  return result.average
}
