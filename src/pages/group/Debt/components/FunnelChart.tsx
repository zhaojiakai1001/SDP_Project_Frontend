/**
 * 分类漏斗图
 */
import { Funnel } from "@ant-design/charts";
import {FunnelChartDataType} from "../data.d";

const FunnelChart = ({
  loading, FunnelChartData, catagoryHeight
}: {
  FunnelChartData: FunnelChartDataType[],
  catagoryHeight: number[],
  loading: boolean
  }
) => {
  console.log(FunnelChartData.length)
  return (
    <div style={{display: "flex"}}>
      <div style={{flex: 1}}>
        <div style={{marginTop: 30 + 60 * catagoryHeight[0]}}>一类</div>
        <div style={{marginTop: 60 * catagoryHeight[1]}}>二类</div>
        <div style={{marginTop: 60 * catagoryHeight[2]}}>三类</div>
        <div style={{marginTop: 60 * catagoryHeight[3]}}>四类</div>
      </div>
      <Funnel
        data={FunnelChartData}
        xField="category"
        yField="count"
        shape="funnel"
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

export default FunnelChart
