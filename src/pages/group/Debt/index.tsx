import type { FC } from 'react';
import {GridContent, PageLoading} from '@ant-design/pro-layout';
import FunnelChart from "./components/FunnelChart";
import type {DebtData} from "./data.d";
// @ts-ignore
import {useRequest} from "umi";
import { Suspense } from 'react';
import {Tabs} from "antd";
import {Column} from "@ant-design/charts";

const { TabPane } = Tabs;

const PubRecFunnelChartData: { category: any; count: any; }[] = []
const DtiColumnChartData: Record<string, any>[] = []

type DebtProps = {
  debtData: DebtData;
  loading: boolean;
};

const Debt: FC<DebtProps> = () => {

  const pubRecRes = useRequest({url: 'http://127.0.0.1:8000/group/pubRec', method: 'post'})
  const pubRecData = pubRecRes?.data
  const pubRecLoading = pubRecRes?.loading

  const dtiRes = useRequest({url: 'http://127.0.0.1:8000/group/dti', method: 'post'})
  const dtiData = dtiRes?.data
  const dtiLoading = dtiRes?.loading

  console.log(pubRecData)
  console.log(dtiData)

  pubRecData?.forEach((item: any) => {
    item.pubRec.forEach((iitem: any, index: any) => {
      const listItem = {
        category: iitem,
        count: item.amount[index]
      }
      PubRecFunnelChartData.push(listItem)
    })
  })

  dtiData?.forEach((item: any) => {
    for (let i = 0; i < 4; i++) {
      let sum = 0
      item.pubRec[i].amount.forEach((num: any) => {
        sum = sum + num
      })
      const category_text = i === 0? "第一类" : (i === 1? "第二类" : (i === 2? "第三类" : "第四类"))
      const listItem = {
        dti: item.dti[0] + "~" + item.dti[1],
        category: category_text,
        value: sum
      }
      DtiColumnChartData.push(listItem)
    }

  })

  return (
    <GridContent>
      <>
        <Tabs>
          <TabPane tab="pubRec" key="pubRec">
            <Suspense fallback={PageLoading}>
              <FunnelChart
                FunnelChartData={PubRecFunnelChartData || []}
                loading={pubRecLoading}
                catagoryHeight={[0, 1, 1, 2]}
              />
            </Suspense>
          </TabPane>
          <TabPane tab="dti" key="dti">
            <Suspense fallback={PageLoading}>
              <Column
                data={DtiColumnChartData}
                isGroup={true}
                xField="dti"
                yField="value"
                seriesField="category"
                loading={dtiLoading}
                slider={{
                  start: 0,
                  end: 1
                }}
              />
            </Suspense>
          </TabPane>
        </Tabs>
      </>
    </GridContent>
  );
};

export default Debt;
