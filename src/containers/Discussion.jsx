import { Card, Post, SearchBar } from '@/components';

const Discussion = () => {
  return (
    <section className='flex-grow w-6/12 p-5 h-[calc(100vh-230px)]'>
      <h1 className='heading-primary'>Discussion fourm</h1>

      <div className='px-10 py-3 space-y-4 '>
        <h2 className='mb-2 text-xl font-semibold'>Filters</h2>
        {/* Filter */}
        <Card className='flex justify-between gap-2'>
          <div className='flex justify-between gap-2'>
            <button className='text-sm h-8 bg-red-500 rounded-[100px] px-4 text-white'>
              Section 1
            </button>
            <button className='text-sm h-8 bg-blue-500 rounded-[100px] px-4 text-white'>
              Section 2
            </button>
            <button className='text-sm h-8 bg-yellow-500 rounded-[100px] px-4 text-white'>
              Section 3
            </button>
          </div>
          <SearchBar className='rounded-[100px]' placeholder='Search here' />
        </Card>

        {/* Posts */}
        <div className='h-[calc(100vh-450px)] py-5 space-y-5 overflow-y-scroll'>
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </section>
  );
};

export default Discussion;
