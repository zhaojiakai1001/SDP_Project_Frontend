// @ts-ignore
import { request } from 'umi';
import type { DebtData } from './data.d';

export async function fakeChartData(): Promise<{ data: DebtData }> {
  // return request('/api/fake_analysis_chart_data');
  return request('/api/fake_debt_chart_data')
}
