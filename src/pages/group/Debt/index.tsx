import type { FC } from 'react';
import {GridContent, PageLoading} from '@ant-design/pro-layout';
import type {DebtData} from "./data.d";
// @ts-ignore
import {useRequest} from "umi";
import {Suspense, useState} from 'react';
import {Column} from "@ant-design/charts";
import PieChart from "@/pages/components/PieChart";

let DtiColumnChartData: Record<string, any>[] = []

type DebtProps = {
  debtData: DebtData;
  loading: boolean;
};

const Debt: FC<DebtProps> = () => {

  const dtiRes = useRequest({url: 'http://127.0.0.1:8000/group/dti', method: 'post'})
  const dtiData = dtiRes?.data
  const dtiLoading = dtiRes?.loading

  console.log(dtiData)

  DtiColumnChartData = []

  dtiData?.forEach((item: any) => {
    for (let i = 0; i < 4; i++) {
      let sum = 0
      item.pubRec[i].amount.forEach((num: any) => {
        sum = sum + num
      })
      const category_text = i === 0? "低违约风险" : (i === 1? "中违约风险" : (i === 2? "高违约风险" : "极高违约风险"))
      const listItem = {
        dti: item.dti[0] + "~" + item.dti[1],
        category: category_text,
        value: sum
      }
      DtiColumnChartData.push(listItem)
    }

  })

  const [pieData, setPieData] = useState([]);
  const [pieTitle, setPieTitle] = useState('');

  const onColumnReady = (plot: any) => {
    plot.on('element:click', (...args: any) => {
      const tmp = args[0].data
      console.log(tmp)
      const pData: any[] = []
      setPieTitle(tmp.data?.dti)
      let i = 0
      DtiColumnChartData.forEach((item: any) => {
        i++;
        if(i > 24) return
        console.log(item)
        if(item.dti === tmp.data?.dti) {
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
                <div style={{padding: 30}}>债务收入比统计数据</div>
                <div style={{padding: 30}}>横轴：债务收入比dti值</div>
                <div style={{padding: 30}}>纵轴：人数</div>
              </div>

              <Column
                data={DtiColumnChartData}
                isStack={true}
                xField="dti"
                yField="value"
                seriesField="category"
                maxColumnWidth={50}
                loading={dtiLoading}
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

export default Debt;
