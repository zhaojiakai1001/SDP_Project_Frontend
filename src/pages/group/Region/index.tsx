import type { FC } from 'react';
import {GridContent, PageLoading} from '@ant-design/pro-layout';

import type { RegionData } from './data.d';
// @ts-ignore
import {useRequest} from "umi";
import {Column} from "@ant-design/charts";
import { Suspense } from 'react';

const RegionColumnChartData: Record<string, any>[] = []



type RegionProps = {
  regionData: RegionData;
  loading: boolean;
};


const Region: FC<RegionProps> = () => {

  const {data, loading} = useRequest({url: 'http://127.0.0.1:8000/group/region', method: 'post'})
  console.log(data)

  data?.forEach((item: any) => {
    for (let i = 0; i < 4; i++) {
      let sum = 0
      item.pubRec[i].amount.forEach((num: any) => {
        sum = sum + num
      })
      const category_text = i === 0? "第一类" : (i === 1? "第二类" : (i === 2? "第三类" : "第四类"))
      const listItem = {
        region: item.addr_state,
        category: category_text,
        value: sum
      }
      RegionColumnChartData.push(listItem)
    }

  })

  return (
    <GridContent>
      <>
        <Suspense fallback={PageLoading}>
          <Column
            data={RegionColumnChartData}
            isGroup={true}
            xField="region"
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

export default Region;
