import { request } from 'umi';
import type { StatusData } from './data.d';

export async function fakeChartData(): Promise<{ data: StatusData }> {
  return request('/api/fake_status_chart_data');
}
