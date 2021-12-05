import { request } from 'umi';
import type { EmpTimeData } from './data.d';

export async function fakeChartData(): Promise<{ data: EmpTimeData }> {
  return request('/api/fake_emp_time_chart_data');
}
