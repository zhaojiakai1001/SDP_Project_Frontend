import { request } from 'umi';
import type { PurposeData } from './data.d';

export async function fakeChartData(): Promise<{ data: PurposeData }> {
  return request('/api/fake_analysis_chart_data');
}
