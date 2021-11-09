import type { Request, Response } from 'express';
import { DebtData } from "./data.d";

// mock data
// PubRec折线图数据
const PubRecLineCompareChartData = [
  {
    name: "n0",
    category: "一类",
    value: 1
  },
  {
    name: "n1",
    category: "一类",
    value: 0
  },
  {
    name: "n2",
    category: "一类",
    value: 1
  },
  {
    name: "n3",
    category: "一类",
    value: 0
  },
  {
    name: "n4",
    category: "一类",
    value: 1
  },
  {
    name: "n5",
    category: "一类",
    value: 12
  },
  {
    name: "n6",
    category: "一类",
    value: 13
  },
  {
    name: "n7",
    category: "一类",
    value: 15
  },
  {
    name: "n8",
    category: "一类",
    value: 1
  },
  {
    name: "n9",
    category: "一类",
    value: 0
  },
  {
    name: "n10",
    category: "一类",
    value: 0
  },
  {
    name: "n11",
    category: "一类",
    value: 2
  },
  {
    name: "n12",
    category: "一类",
    value: 3
  },
  {
    name: "n13",
    category: "一类",
    value: 0
  },
  {
    name: "n14",
    category: "一类",
    value: 1
  },
  {
    name: "n0",
    category: "二类",
    value: 12
  },
  {
    name: "n1",
    category: "二类",
    value: 10
  },
  {
    name: "n2",
    category: "二类",
    value: 1
  },
  {
    name: "n3",
    category: "二类",
    value: 0
  },
  {
    name: "n4",
    category: "二类",
    value: 1
  },
  {
    name: "n5",
    category: "二类",
    value: 1
  },
  {
    name: "n6",
    category: "二类",
    value: 1
  },
  {
    name: "n7",
    category: "二类",
    value: 0
  },
  {
    name: "n8",
    category: "二类",
    value: 1
  },
  {
    name: "n9",
    category: "二类",
    value: 0
  },
  {
    name: "n10",
    category: "二类",
    value: 2
  },
  {
    name: "n11",
    category: "二类",
    value: 1
  },
  {
    name: "n12",
    category: "二类",
    value: 2
  },
  {
    name: "n13",
    category: "二类",
    value: 1
  },
  {
    name: "n14",
    category: "二类",
    value: 3
  },
  {
    name: "n0",
    category: "三类",
    value: 0
  },
  {
    name: "n1",
    category: "三类",
    value: 1
  },
  {
    name: "n2",
    category: "三类",
    value: 0
  },
  {
    name: "n3",
    category: "三类",
    value: 1
  },
  {
    name: "n4",
    category: "三类",
    value: 0
  },
  {
    name: "n5",
    category: "三类",
    value: 1
  },
  {
    name: "n6",
    category: "三类",
    value: 3
  },
  {
    name: "n7",
    category: "三类",
    value: 2
  },
  {
    name: "n8",
    category: "三类",
    value: 1
  },
  {
    name: "n9",
    category: "三类",
    value: 0
  },
  {
    name: "n10",
    category: "三类",
    value: 12
  },
  {
    name: "n11",
    category: "三类",
    value: 11
  },
  {
    name: "n12",
    category: "三类",
    value: 12
  },
  {
    name: "n13",
    category: "三类",
    value: 11
  },
  {
    name: "n14",
    category: "三类",
    value: 13
  },
  {
    name: "n0",
    category: "四类",
    value: 3
  },
  {
    name: "n1",
    category: "四类",
    value: 2
  },
  {
    name: "n2",
    category: "四类",
    value: 10
  },
  {
    name: "n3",
    category: "四类",
    value: 0
  },
  {
    name: "n4",
    category: "四类",
    value: 1
  },
  {
    name: "n5",
    category: "四类",
    value: 15
  },
  {
    name: "n6",
    category: "四类",
    value: 1
  },
  {
    name: "n7",
    category: "四类",
    value: 0
  },
  {
    name: "n8",
    category: "四类",
    value: 3
  },
  {
    name: "n9",
    category: "四类",
    value: 10
  },
  {
    name: "n10",
    category: "四类",
    value: 2
  },
  {
    name: "n11",
    category: "四类",
    value: 0
  },
  {
    name: "n12",
    category: "四类",
    value: 1
  },
  {
    name: "n13",
    category: "四类",
    value: 16
  },
  {
    name: "n14",
    category: "四类",
    value: 5
  }
]
// PubRec漏斗图数据
const PubRecFunnelChartData = [
  {
    category: "0",
    count: 4319
  },
  {
    category: "1",
    count: 3030
  },
  {
    category: "2",
    count: 436
  },
  {
    category: "3",
    count: 140
  },
  {
    category: "4",
    count: 40
  },
  {
    category: "5",
    count: 19
  },
  {
    category: "6",
    count: 13
  },
  {
    category: "7",
    count: 3
  }
]

// PubRec折线图数据
const DtiLineCompareChartData = [
  {
    name: "n0",
    category: "一类",
    value: 0
  },
  {
    name: "n1",
    category: "一类",
    value: 10
  },
  {
    name: "n2",
    category: "一类",
    value: 15
  },
  {
    name: "n3",
    category: "一类",
    value: 1
  },
  {
    name: "n4",
    category: "一类",
    value: 3
  },
  {
    name: "n5",
    category: "一类",
    value: 2
  },
  {
    name: "n6",
    category: "一类",
    value: 3
  },
  {
    name: "n7",
    category: "一类",
    value: 5
  },
  {
    name: "n8",
    category: "一类",
    value: 14
  },
  {
    name: "n9",
    category: "一类",
    value: 10
  },
  {
    name: "n10",
    category: "一类",
    value: 1
  },
  {
    name: "n11",
    category: "一类",
    value: 0
  },
  {
    name: "n12",
    category: "一类",
    value: 13
  },
  {
    name: "n13",
    category: "一类",
    value: 1
  },
  {
    name: "n14",
    category: "一类",
    value: 0
  },
  {
    name: "n0",
    category: "二类",
    value: 2
  },
  {
    name: "n1",
    category: "二类",
    value: 0
  },
  {
    name: "n2",
    category: "二类",
    value: 12
  },
  {
    name: "n3",
    category: "二类",
    value: 10
  },
  {
    name: "n4",
    category: "二类",
    value: 2
  },
  {
    name: "n5",
    category: "二类",
    value: 13
  },
  {
    name: "n6",
    category: "二类",
    value: 0
  },
  {
    name: "n7",
    category: "二类",
    value: 2
  },
  {
    name: "n8",
    category: "二类",
    value: 0
  },
  {
    name: "n9",
    category: "二类",
    value: 10
  },
  {
    name: "n10",
    category: "二类",
    value: 12
  },
  {
    name: "n11",
    category: "二类",
    value: 0
  },
  {
    name: "n12",
    category: "二类",
    value: 1
  },
  {
    name: "n13",
    category: "二类",
    value: 13
  },
  {
    name: "n14",
    category: "二类",
    value: 13
  },
  {
    name: "n0",
    category: "三类",
    value: 2
  },
  {
    name: "n1",
    category: "三类",
    value: 0
  },
  {
    name: "n2",
    category: "三类",
    value: 10
  },
  {
    name: "n3",
    category: "三类",
    value: 13
  },
  {
    name: "n4",
    category: "三类",
    value: 1
  },
  {
    name: "n5",
    category: "三类",
    value: 12
  },
  {
    name: "n6",
    category: "三类",
    value: 2
  },
  {
    name: "n7",
    category: "三类",
    value: 1
  },
  {
    name: "n8",
    category: "三类",
    value: 0
  },
  {
    name: "n9",
    category: "三类",
    value: 10
  },
  {
    name: "n10",
    category: "三类",
    value: 2
  },
  {
    name: "n11",
    category: "三类",
    value: 1
  },
  {
    name: "n12",
    category: "三类",
    value: 2
  },
  {
    name: "n13",
    category: "三类",
    value: 1
  },
  {
    name: "n14",
    category: "三类",
    value: 3
  },
  {
    name: "n0",
    category: "四类",
    value: 13
  },
  {
    name: "n1",
    category: "四类",
    value: 1
  },
  {
    name: "n2",
    category: "四类",
    value: 0
  },
  {
    name: "n3",
    category: "四类",
    value: 10
  },
  {
    name: "n4",
    category: "四类",
    value: 11
  },
  {
    name: "n5",
    category: "四类",
    value: 1
  },
  {
    name: "n6",
    category: "四类",
    value: 2
  },
  {
    name: "n7",
    category: "四类",
    value: 1
  },
  {
    name: "n8",
    category: "四类",
    value: 4
  },
  {
    name: "n9",
    category: "四类",
    value: 0
  },
  {
    name: "n10",
    category: "四类",
    value: 12
  },
  {
    name: "n11",
    category: "四类",
    value: 3
  },
  {
    name: "n12",
    category: "四类",
    value: 11
  },
  {
    name: "n13",
    category: "四类",
    value: 6
  },
  {
    name: "n14",
    category: "四类",
    value: 15
  }
]
// Dti漏斗图数据
const DtiFunnelChartData = [
  {
    category: "极低（小于1）",
    count: 42
  },
  {
    category: "低（1~5）",
    count: 351
  },
  {
    category: "中（5~10）",
    count: 1111
  },
  {
    category: "高（10~20）",
    count: 3361
  },
  {
    category: "极高（20~50）",
    count: 3109
  },
  {
    category: "离谱（>50）",
    count: 26
  }
]

const getFakeChartData: DebtData = {
  PubRecLineCompareChartData,
  PubRecFunnelChartData,
  DtiLineCompareChartData,
  DtiFunnelChartData
};

const fakeChartData = (_: Request, res: Response) => {
  return res.json({
    data: getFakeChartData,
  });
};

export default {
  'GET  /api/fake_debt_chart_data': fakeChartData,
};
