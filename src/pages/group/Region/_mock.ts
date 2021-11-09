import type { Request, Response } from 'express';
import type { RegionData } from './data.d';

// mock data
const RegionColumnChartData = [
  {
    region: "加总",
    category: "一类",
    value: 1234
  },
  {
    region: "加总",
    category: "二类",
    value: 2345
  },
  {
    region: "加总",
    category: "三类",
    value: 123
  },
  {
    region: "加总",
    category: "四类",
    value: 234
  },
  {
    region: "地区1",
    category: "一类",
    value: 123
  },
  {
    region: "地区1",
    category: "二类",
    value: 124
  },
  {
    region: "地区1",
    category: "三类",
    value: 234
  },
  {
    region: "地区1",
    category: "四类",
    value: 12
  },
  {
    region: "地区2",
    category: "一类",
    value: 12
  },
  {
    region: "地区2",
    category: "二类",
    value: 243
  },
  {
    region: "地区2",
    category: "三类",
    value: 24
  },
  {
    region: "地区2",
    category: "四类",
    value: 123
  },
  {
    region: "地区3",
    category: "一类",
    value: 1
  },
  {
    region: "地区3",
    category: "二类",
    value: 14
  },
  {
    region: "地区3",
    category: "三类",
    value: 334
  },
  {
    region: "地区3",
    category: "四类",
    value: 2
  },
  {
    region: "地区4",
    category: "一类",
    value: 13
  },
  {
    region: "地区4",
    category: "二类",
    value: 114
  },
  {
    region: "地区4",
    category: "三类",
    value: 204
  },
  {
    region: "地区4",
    category: "四类",
    value: 120
  },
  {
    region: "地区5",
    category: "一类",
    value: 13
  },
  {
    region: "地区5",
    category: "二类",
    value: 24
  },
  {
    region: "地区5",
    category: "三类",
    value: 24
  },
  {
    region: "地区5",
    category: "四类",
    value: 120
  },
  {
    region: "地区6",
    category: "一类",
    value: 193
  },
  {
    region: "地区6",
    category: "二类",
    value: 1
  },
  {
    region: "地区6",
    category: "三类",
    value: 4
  },
  {
    region: "地区6",
    category: "四类",
    value: 102
  }
]

const getFakeChartData: RegionData = {
  RegionColumnChartData
};

const fakeChartData = (_: Request, res: Response) => {
  return res.json({
    data: getFakeChartData,
  });
};

export default {
  'GET /api/fake_region_chart_data': fakeChartData,
};
