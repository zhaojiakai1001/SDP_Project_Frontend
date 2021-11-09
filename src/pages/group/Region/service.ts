import { request } from 'umi';
import type { RegionData } from './data.d';

export async function fakeChartData(): Promise<{ data: RegionData }> {
  return request('/api/fake_region_chart_data');
}
