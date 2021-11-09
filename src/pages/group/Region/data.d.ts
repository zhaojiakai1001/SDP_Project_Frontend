export type ColumnChartDataType = {
  region: string,
  category: string,
  value: number
}

export interface RegionData {
  RegionColumnChartData: ColumnChartDataType[]
}
