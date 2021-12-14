import type { FC } from 'react';
import {GridContent, PageLoading} from '@ant-design/pro-layout';

import type { RegionData } from './data.d';
// @ts-ignore
import {useRequest} from "umi";
import {Column} from "@ant-design/charts";
import {Suspense, useState} from 'react';
import PieChart from "@/pages/components/PieChart";

let RegionColumnChartData: Record<string, any>[] = []



type RegionProps = {
  regionData: RegionData;
  loading: boolean;
};


const Region: FC<RegionProps> = () => {

  const {data, loading} = useRequest({url: 'http://127.0.0.1:8000/group/region', method: 'post'})
  //console.log(data)

  RegionColumnChartData = []

  data?.forEach((item: any) => {
    for (let i = 0; i < 4; i++) {
      let sum = 0
      item.pubRec[i].amount.forEach((num: any) => {
        sum = sum + num
      })
      const category_text = i === 0? "pubRec=0" : (i === 1? "pubRec=1" : (i === 2? "pubRec<5" : "pubRec>5"))
      const listItem = {
        region: item.addr_state,
        category: category_text,
        value: sum
      }
      RegionColumnChartData.push(listItem)
    }

  })

  const [pieData, setPieData] = useState([]);
  const [pieTitle, setPieTitle] = useState('');

  const onColumnReady = (plot: any) => {
    plot.on('element:click', (...args: any) => {
      const tmp = args[0].data
      console.log(tmp)
      const pData: any[] = []
      setPieTitle(tmp.data?.region)
      let i = 0
      console.log('Re:' + RegionColumnChartData.length)
      RegionColumnChartData.forEach((item: any) => {
        i++;
        if(i > 200) return
        console.log(item)
        if(item.region === tmp.data?.region) {
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
            data={RegionColumnChartData}
            isStack={true}
            xField="region"
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

export default Region;
