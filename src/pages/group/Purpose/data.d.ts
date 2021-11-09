export type ColumnChartDataType = {
  purpose: string,
  category: string,
  value: number
}

export interface PurposeData {
  PurposeColumnChartData: ColumnChartDataType[]
}
