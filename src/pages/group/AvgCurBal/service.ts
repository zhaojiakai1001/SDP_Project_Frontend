import { request } from 'umi';
import type { AvgCurBalData } from './data.d';

export async function fakeChartData(): Promise<{ data: AvgCurBalData }> {
  return request('/api/fake_avg_cur_bal_chart_data');
}
