/**
 * 线型对比参考图
 */
import { Line } from "@ant-design/charts";
import {LineCompareChartDataType} from "../data.d";

const LineCompare = ({
  LineCompareChartData,
  loading
}: {
  LineCompareChartData: LineCompareChartDataType[],
  loading: boolean
}) => (
  <Line
    autoFit
    height={400}
    data={LineCompareChartData}
    xField="name"
    yField="value"
    seriesField="category"
    loading={loading}
    slider={{
      start: 0,
      end: 1,
    }}
    legend={{
      position: 'left-top',
    }}
  />
)

export default LineCompare;
