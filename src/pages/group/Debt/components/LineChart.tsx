/**
 * 分类漏斗图
 */
import {Funnel, Line} from "@ant-design/charts";
import {LineChartDataType} from "../data.d";

const LineChart = ({
                       loading, LineChartData
                   }: {
  LineChartData: LineChartDataType[],
                       catagoryHeight: number[],
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
        seriesField="value"
        isTransposed={true}
        height={500}
        loading={loading}
        conversionTag={false}
        interactions={[
          {
            type: 'element-active'
          }
        ]}
        style={{flex: 8, position: "relative", top: 0}}
      />
    </div>
  );

}

export default LineChart
