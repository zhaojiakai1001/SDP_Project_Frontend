import type { FC } from 'react';
import {GridContent, PageLoading} from '@ant-design/pro-layout';

import type { EmpTimeData } from './data.d';
// @ts-ignore
import {useRequest} from "umi";
import {Column} from "@ant-design/charts";
import { Suspense } from 'react';

const EmpTimeColumnChartData: Record<string, any>[] = []



type EmpTimeProps = {
  empTimeData: EmpTimeData;
  loading: boolean;
};


const EmpTime: FC<EmpTimeProps> = () => {

  const {data, loading} = useRequest({url: 'http://127.0.0.1:8000/group/empTime', method: 'post'})
  console.log(data)

  data?.forEach((item: any) => {
    for (let i = 0; i < 4; i++) {
      let sum = 0
      item.pubRec[i].amount.forEach((num: any) => {
        sum = sum + num
      })
      const category_text = i === 0? "第一类" : (i === 1? "第二类" : (i === 2? "第三类" : "第四类"))
      const listItem = {
        empTime: item.emp_length,
        category: category_text,
        value: sum
      }
      EmpTimeColumnChartData.push(listItem)
    }

  })

  return (
    <GridContent>
      <>
        <Suspense fallback={PageLoading}>
          <Column
            data={EmpTimeColumnChartData}
            isGroup={true}
            xField="empTime"
            yField="value"
            seriesField="category"
            loading={loading}
            slider={{
              start: 0,
              end: 1
            }}
          />
        </Suspense>
      </>
    </GridContent>
  );
};

export default EmpTime;
