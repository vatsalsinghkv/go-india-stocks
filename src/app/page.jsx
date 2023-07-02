import { Discussion, Featured, MarketStories, Sidebar } from '@/containers';

export default function Home() {
  return (
    <main className='h-full '>
      <Featured />
      <div className='relative inset-0 flex h-full'>
        <Sidebar />
        <Discussion />
        <MarketStories />
      </div>
    </main>
  );
}
