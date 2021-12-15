export type ColumnChartDataType = {
  avgCurBal: string,
  category: string,
  value: number
}

export interface AvgCurBalData {
  AvgCurBalColumnChartData: ColumnChartDataType[]
}
