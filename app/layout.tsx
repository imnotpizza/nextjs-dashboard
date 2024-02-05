import { inter } from '@/app/ui/fonts';
import RQProvider from './components/RQProvider';
import './globals.css';

/**
 * Root Layout: 모든 페이지에 공통적으로 들어감
 * html, body 를 수정할때 사용
 * 메타데이터 설정, seo 최적화 작업에도 적합한 파일
 * @param param0
 */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <RQProvider>{children}</RQProvider>
      </body>
    </html>
  );
}
