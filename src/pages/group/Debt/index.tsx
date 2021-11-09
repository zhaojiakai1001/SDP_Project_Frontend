import type { FC } from 'react';
import {GridContent, PageLoading} from '@ant-design/pro-layout';
import LineCompare from "./components/LineCompare";
import FunnelChart from "./components/FunnelChart";
import {DebtData} from "./data.d";
import {useRequest} from "umi";
import {fakeChartData} from "./service";
import { Suspense } from 'react';
import {Tabs} from "antd";

const { TabPane } = Tabs;

type DebtProps = {
  debtData: DebtData;
  loading: boolean;
};

const Debt: FC<DebtProps> = () => {

  const { loading, data } = useRequest(fakeChartData)

  return (
    <GridContent>
      <>
        <Tabs>
          <TabPane tab="pubRec" key="pubRec">
            <Suspense fallback={PageLoading}>
              <FunnelChart
                FunnelChartData={data?.PubRecFunnelChartData || []}
                loading={loading}
                catagoryHeight={[0, 1, 1, 2]}
              />
              <LineCompare
                LineCompareChartData={data?.PubRecLineCompareChartData || []}
                loading={loading}
              />
            </Suspense>
          </TabPane>
          <TabPane tab="dti" key="dti">
            <Suspense fallback={PageLoading}>
              <FunnelChart
                FunnelChartData={data?.DtiFunnelChartData || []}
                loading={loading}
                catagoryHeight={[1, 1, 3, 1]}/>
              <LineCompare
                LineCompareChartData={data?.DtiLineCompareChartData || []}
                loading={loading}
              />
            </Suspense>
          </TabPane>
        </Tabs>
      </>
    </GridContent>
  );
};

export default Debt;
