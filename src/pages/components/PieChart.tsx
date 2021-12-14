import {FC} from "react";
import {PieChartData} from "@/pages/components/data";
import {Pie} from "@ant-design/charts";

type PieChartProps = {
  pieChartData: PieChartData
}

const PieChart: FC<PieChartProps> = (pieChartData) => {
  // const [total, setTotal] = useState(0);
  // const tmpTotal = pieChartData?.pieChartData?.PieChartData[0]?.value + pieChartData?.pieChartData?.PieChartData[1]?.value + pieChartData?.pieChartData?.PieChartData[2]?.value + pieChartData?.pieChartData?.PieChartData[3]?.value
  // setTotal(tmpTotal)
  return <Pie
    data={pieChartData?.pieChartData?.PieChartData || []}
    angleField='value'
    colorField='category'
    appendPadding={10}
    radius={1}
    innerRadius={0.6}
    statistic={{
      title: false,
      content: {
        style: {
        whiteSpace: 'pre-wrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
      content: pieChartData?.pieChartData?.title,
    },
    }}
  />
}

export default PieChart;
