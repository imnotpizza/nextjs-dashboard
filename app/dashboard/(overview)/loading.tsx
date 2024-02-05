/**
 * page 컨텐츠 로드시 나타날 fallback ui
 * (overview) 적용시: 폴더의 루트경로에만 독립적인 ui 적용가능
 *
 */
import DashboardSkeleton from '@/app/ui/skeletons';

export default function Loading() {
  return (
    <>
      <h1>from loading page...</h1>
      <DashboardSkeleton />
    </>
  );
}
