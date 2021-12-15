import { request } from 'umi';
import type { AccOpenData } from './data.d';

export async function fakeChartData(): Promise<{ data: AccOpenData }> {
  return request('/api/fake_acc_open_chart_data');
}
