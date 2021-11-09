export type LineCompareChartDataType = {
  name: string,
  category: string,
  value: number
}

export type FunnelChartDataType = {
  category: string, // 按数量分类
  count: number
}

export interface DebtData {
  PubRecLineCompareChartData: LineCompareChartDataType[],
  PubRecFunnelChartData: FunnelChartDataType[],
  DtiLineCompareChartData: LineCompareChartDataType[],
  DtiFunnelChartData: FunnelChartDataType[]
}
