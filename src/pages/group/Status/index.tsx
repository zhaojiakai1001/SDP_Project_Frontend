import type { FC } from 'react';
import {GridContent, PageLoading} from '@ant-design/pro-layout';

import type { StatusData } from './data.d';
import {useRequest} from "umi";
import {fakeChartData} from "./service";
import {Column} from "@ant-design/charts";
import { Suspense } from 'react';

const StatusColumnChartData = [
  {
    status: "加总",
    category: "一类",
    value: 2345
  },
  {
    status: "加总",
    category: "二类",
    value: 3456
  },
  {
    status: "加总",
    category: "三类",
    value: 1235
  },
  {
    status: "加总",
    category: "四类",
    value: 245
  },
  {
    status: "0",
    category: "一类",
    value: 523
  },
  {
    status: "0",
    category: "二类",
    value: 1224
  },
  {
    status: "0",
    category: "三类",
    value: 24
  },
  {
    status: "0",
    category: "四类",
    value: 125
  },
  {
    status: "1",
    category: "一类",
    value: 682
  },
  {
    status: "1",
    category: "二类",
    value: 23
  },
  {
    status: "1",
    category: "三类",
    value: 242
  },
  {
    status: "1",
    category: "四类",
    value: 123
  },
  {
    status: "2",
    category: "一类",
    value: 151
  },
  {
    status: "2",
    category: "二类",
    value: 145
  },
  {
    status: "2",
    category: "三类",
    value: 3314
  },
  {
    status: "2",
    category: "四类",
    value: 256
  }
]

type StatusProps = {
  statusData: StatusData;
  loading: boolean;
};


const Status: FC<StatusProps> = () => {

  const { loading, data } = useRequest(fakeChartData)

  console.log(data)

  return (
    <GridContent>
      <>
        <Suspense fallback={PageLoading}>
          <Column
            data={StatusColumnChartData}
            isGroup={true}
            xField="status"
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

export default Status;
