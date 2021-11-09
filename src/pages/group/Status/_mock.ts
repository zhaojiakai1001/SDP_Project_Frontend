import type { Request, Response } from 'express';
import type { StatusData } from './data.d';

// mock data
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

const getFakeChartData: StatusData = {
  StatusColumnChartData
};

const fakeChartData = (_: Request, res: Response) => {
  return res.json({
    data: getFakeChartData,
  });
};

export default {
  'GET  /api/fake_status_chart_data': fakeChartData,
};
