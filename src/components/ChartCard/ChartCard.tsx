import { Card, Typography } from "antd"
import type { ReactNode } from "react"
import styles from "./ChartCard.module.scss"

type Props = {
  title: string
  controls?: ReactNode
  children: ReactNode
}

export function ChartCard({ title, controls, children }: Props) {
  return (
    <Card className={styles.chartCard}>
      <div className={styles.container}>
        <Typography.Title level={3} style={{ margin: 0 }}>
          {title}
        </Typography.Title>
        {controls && <div className={styles.controls}>{controls}</div>}
        {children}
      </div>
    </Card>
  )
}
