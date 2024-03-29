import CardWrapper, { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { fetchLatestInvoices, fetchCardData } from '@/app/lib/data';
import { Suspense } from 'react';
import {
  CardSkeleton,
  InvoiceSkeleton,
  RevenueChartSkeleton,
} from '@/app/ui/skeletons';
import FetchDataPage from '@/app/ui/dashboard/fetch-data';
import SuspenseFetch from '@/app/components/SuspenseFetch';

/**
 * async 함수를 리턴: 데이터 fetch 를 블로킹으로 호출
 * await을 컴포넌트 내에서 바로 사용함
 *
 * 캐싱
 * unstable_noStore: 서버컴포넌트나 data fetch함수에서 정적 렌더링 거부
 */
export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="w-full">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <SuspenseFetch />
        </Suspense>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<InvoiceSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}
