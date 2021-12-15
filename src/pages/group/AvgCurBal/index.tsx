import type { FC } from 'react';
import {GridContent, PageLoading} from '@ant-design/pro-layout';

import type { AvgCurBalData } from './data.d';
// @ts-ignore
import {useRequest} from "umi";
import {Column} from "@ant-design/charts";
import {Suspense, useState} from 'react';
import PieChart from "@/pages/components/PieChart";

let AvgCurBalColumnChartData: Record<string, any>[] = []


type AvgCurBalProps = {
  avgCurBalData: AvgCurBalData;
  loading: boolean;
};


const AvgCurBal: FC<AvgCurBalProps> = () => {

  const {data, loading} = useRequest({url: 'http://127.0.0.1:8000/group/avg_cur_bal', method: 'post'})
  console.log(data)

  AvgCurBalColumnChartData = []

  data?.forEach((item: any) => {
    for (let i = 0; i < 4; i++) {
      let sum = 0
      item.pubRec[i].amount.forEach((num: any) => {
        sum = sum + num
      })
      const category_text = i === 0? "低违约风险" : (i === 1? "中违约风险" : (i === 2? "高违约风险" : "极高违约风险"))
      const listItem = {
        avgCurBal: item.avg_cur_bal[0] + "~" + item.avg_cur_bal[1],
        category: category_text,
        value: sum
      }
      AvgCurBalColumnChartData.push(listItem)
    }

  })

  const [pieData, setPieData] = useState([]);
  const [pieTitle, setPieTitle] = useState('');

  const onColumnReady = (plot: any) => {
    plot.on('element:click', (...args: any) => {
      const tmp = args[0].data
      console.log(tmp)
      const pData: any[] = []
      setPieTitle(tmp.data?.avgCurBal)
      let i = 0
      AvgCurBalColumnChartData.forEach((item: any) => {
        i++;
        if(i > 44) return
        console.log(item)
        if(item.avgCurBal === tmp.data?.avgCurBal) {
          pData.push(item)
        }
      })
      i = 0
      console.log(pData)
      // @ts-ignore
      setPieData(pData)
      console.log(pieData)
    })
  }

  return (
    <GridContent>
      <>
        <Suspense fallback={PageLoading}>
          <div style={{display: "flex", padding: 30}}>
            <div style={{padding: 30}}>过去24个月交易统计数据</div>
            <div style={{padding: 30}}>横轴：过去24个月交易单数</div>
            <div style={{padding: 30}}>纵轴：人数</div>
          </div>
          <Column
            data={AvgCurBalColumnChartData}
            isStack={true}
            xField="avgCurBal"
            yField="value"
            seriesField="category"
            maxColumnWidth={50}
            loading={loading}
            slider={{
              start: 0,
              end: 1
            }}
            label={{
              position: 'middle'
            }}
            connectedArea={{
              style: (oldStyle) => {
                return {
                  fill: 'rgba(0,0,0,0.25)',
                  stroke: oldStyle.fill,
                  lineWidth: 0.5,
                };
              },
            }}
            onReady={onColumnReady}
          />
          <PieChart pieChartData={{
            PieChartData: pieData,
            title: pieTitle
          }}/>
        </Suspense>
      </>
    </GridContent>
  );
};

export default AvgCurBal;
