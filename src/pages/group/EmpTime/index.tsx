import type { FC } from 'react';
import {GridContent, PageLoading} from '@ant-design/pro-layout';

import type { EmpTimeData } from './data.d';
// @ts-ignore
import {useRequest} from "umi";
import {Column} from "@ant-design/charts";
import {Suspense, useState} from 'react';
import PieChart from "@/pages/components/PieChart";

let EmpTimeColumnChartData: Record<string, any>[] = []


type EmpTimeProps = {
  empTimeData: EmpTimeData;
  loading: boolean;
};


const EmpTime: FC<EmpTimeProps> = () => {

  const {data, loading} = useRequest({url: 'http://127.0.0.1:8000/group/empTime', method: 'post'})
  console.log(data)

  EmpTimeColumnChartData = []

  data?.forEach((item: any) => {
    for (let i = 0; i < 4; i++) {
      let sum = 0
      item.pubRec[i].amount.forEach((num: any) => {
        sum = sum + num
      })
      const category_text = i === 0? "pubRec=0" : (i === 1? "pubRec=1" : (i === 2? "pubRec<5" : "pubRec>5"))
      const listItem = {
        empTime: item.emp_length,
        category: category_text,
        value: sum
      }
      EmpTimeColumnChartData.push(listItem)
    }

  })

  const [pieData, setPieData] = useState([]);
  const [pieTitle, setPieTitle] = useState('');

  const onColumnReady = (plot: any) => {
    plot.on('element:click', (...args: any) => {
      const tmp = args[0].data
      console.log(tmp)
      const pData: any[] = []
      setPieTitle(tmp.data?.empTime)
      let i = 0
      EmpTimeColumnChartData.forEach((item: any) => {
        i++;
        if(i > 44) return
        console.log(item)
        if(item.empTime === tmp.data?.empTime) {
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
          <Column
            data={EmpTimeColumnChartData}
            isStack={true}
            xField="empTime"
            yField="value"
            seriesField="category"
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

export default EmpTime;
