/**
 * 分类漏斗图
 */
import {Line} from "@ant-design/charts";
import {LineChartDataType} from "../data.d";

const LineChart = ({
                       loading, LineChartData
                   }: {
  LineChartData: LineChartDataType[],
                       loading: boolean
                     }
) => {
  console.log(LineChartData.length)
  return (
    <div style={{display: "flex"}}>
      <Line
        data={LineChartData}
        xField="category"
        yField="count"
        loading={loading}
        slider={{
          start: 0,
          end: 1
        }}
        stepType="hvh"
      />
    </div>
  );

}

export default LineChart
