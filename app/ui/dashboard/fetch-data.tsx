function getRandomNumber() {
  // 0부터 1 사이의 난수를 생성한 후 1부터 10까지의 범위로 변환
  var randomNumber = Math.floor(Math.random() * 10) + 1;
  return randomNumber;
}


const fetchData = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${getRandomNumber()}`, {
    // no store옵션 추가시, getserversideprops로 실행
    // 'force-cache': fetch data의 캐시 허용, 디폴트 설정, SSG 사용
    // cache: 'force-cache',
    // ISR 사용시
    // next: {
      // revalidate: 10,
    // }
    // no-store: 새 요청이 있을때마다 data fetching 수행, SSR 사용
    cache: 'no-store',
  });
  const data = await res.json();
  return {
    ...data,
  };
};

/**
 * api 호출 예제
 *
 */
export default async function FetchDataPage() {
  const res = await fetchData();

  return (
    <div>
      <p>USER ID: {res.userId}</p>
      <p>ID: {res.id}</p>
      <p>TITLE: {res.title}</p>
      <p>BODY: {res.body}</p>
    </div>
  );
}
