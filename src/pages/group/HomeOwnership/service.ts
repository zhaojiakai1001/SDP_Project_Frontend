import { request } from 'umi';
import type { HomeOwnershipData } from './data.d';

export async function fakeChartData(): Promise<{ data: HomeOwnershipData }> {
  return request('/api/fake_home_ownership_chart_data');
}
