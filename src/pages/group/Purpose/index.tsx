import type { FC } from 'react';
import {GridContent, PageLoading} from '@ant-design/pro-layout';

import type { PurposeData } from './data.d';
import {useRequest} from "umi";
import {fakeChartData} from "./service";
import {Column} from "@ant-design/charts";
import { Suspense } from 'react';

const PurposeColumnChartData = [
  {
    purpose: "加总",
    category: "一类",
    value: 2345
  },
  {
    purpose: "加总",
    category: "二类",
    value: 3456
  },
  {
    purpose: "加总",
    category: "三类",
    value: 1235
  },
  {
    purpose: "加总",
    category: "四类",
    value: 245
  },
  {
    purpose: "0",
    category: "一类",
    value: 523
  },
  {
    purpose: "0",
    category: "二类",
    value: 1224
  },
  {
    purpose: "0",
    category: "三类",
    value: 24
  },
  {
    purpose: "0",
    category: "四类",
    value: 125
  },
  {
    purpose: "1",
    category: "一类",
    value: 682
  },
  {
    purpose: "1",
    category: "二类",
    value: 23
  },
  {
    purpose: "1",
    category: "三类",
    value: 242
  },
  {
    purpose: "1",
    category: "四类",
    value: 123
  },
  {
    purpose: "2",
    category: "一类",
    value: 151
  },
  {
    purpose: "2",
    category: "二类",
    value: 145
  },
  {
    purpose: "2",
    category: "三类",
    value: 3314
  },
  {
    purpose: "2",
    category: "四类",
    value: 256
  },
  {
    purpose: "3",
    category: "一类",
    value: 523
  },
  {
    purpose: "3",
    category: "二类",
    value: 1224
  },
  {
    purpose: "3",
    category: "三类",
    value: 24
  },
  {
    purpose: "3",
    category: "四类",
    value: 125
  },
  {
    purpose: "4",
    category: "一类",
    value: 682
  },
  {
    purpose: "4",
    category: "二类",
    value: 23
  },
  {
    purpose: "4",
    category: "三类",
    value: 242
  },
  {
    purpose: "4",
    category: "四类",
    value: 123
  },
  {
    purpose: "5",
    category: "一类",
    value: 151
  },
  {
    purpose: "5",
    category: "二类",
    value: 145
  },
  {
    purpose: "5",
    category: "三类",
    value: 3314
  },
  {
    purpose: "5",
    category: "四类",
    value: 256
  },
  {
    purpose: "6",
    category: "一类",
    value: 523
  },
  {
    purpose: "6",
    category: "二类",
    value: 1224
  },
  {
    purpose: "6",
    category: "三类",
    value: 24
  },
  {
    purpose: "6",
    category: "四类",
    value: 125
  },
  {
    purpose: "7",
    category: "一类",
    value: 682
  },
  {
    purpose: "7",
    category: "二类",
    value: 23
  },
  {
    purpose: "7",
    category: "三类",
    value: 242
  },
  {
    purpose: "7",
    category: "四类",
    value: 123
  },
  {
    purpose: "8",
    category: "一类",
    value: 151
  },
  {
    purpose: "8",
    category: "二类",
    value: 145
  },
  {
    purpose: "8",
    category: "三类",
    value: 3314
  },
  {
    purpose: "8",
    category: "四类",
    value: 256
  },
  {
    purpose: "9",
    category: "一类",
    value: 523
  },
  {
    purpose: "9",
    category: "二类",
    value: 1224
  },
  {
    purpose: "9",
    category: "三类",
    value: 24
  },
  {
    purpose: "9",
    category: "四类",
    value: 125
  },
  {
    purpose: "10",
    category: "一类",
    value: 682
  },
  {
    purpose: "10",
    category: "二类",
    value: 23
  },
  {
    purpose: "10",
    category: "三类",
    value: 242
  },
  {
    purpose: "10",
    category: "四类",
    value: 123
  },
  {
    purpose: "11",
    category: "一类",
    value: 151
  },
  {
    purpose: "11",
    category: "二类",
    value: 145
  },
  {
    purpose: "11",
    category: "三类",
    value: 3314
  },
  {
    purpose: "11",
    category: "四类",
    value: 256
  },
  {
    purpose: "12",
    category: "一类",
    value: 523
  },
  {
    purpose: "12",
    category: "二类",
    value: 1224
  },
  {
    purpose: "12",
    category: "三类",
    value: 24
  },
  {
    purpose: "12",
    category: "四类",
    value: 125
  },
  {
    purpose: "13",
    category: "一类",
    value: 682
  },
  {
    purpose: "13",
    category: "二类",
    value: 23
  },
  {
    purpose: "13",
    category: "三类",
    value: 242
  },
  {
    purpose: "13",
    category: "四类",
    value: 123
  }
]

type PurposeProps = {
  purposeData: PurposeData;
  loading: boolean;
};


const Purpose: FC<PurposeProps> = () => {

  const { loading, data } = useRequest(fakeChartData)

  console.log(data)

  return (
    <GridContent>
      <>
        <Suspense fallback={PageLoading}>
          <Column
            data={PurposeColumnChartData}
            isGroup={true}
            xField="purpose"
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

export default Purpose;
