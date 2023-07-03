import { Card, Post, SearchBar } from '@/components';
import posts from '@/content/post';

const Discussion = ({ className }) => {
  return (
    <section
      className={`flex-grow w-6/12 p-2 xl:p-5 h-[calc(100vh-230px)] ${className}`}
    >
      <h1 className='hidden heading-primary md:block'>Discussion fourm</h1>

      <div className='px-0 py-3 space-y-2 xs:space-y-3 md:space-y-4 xl:px-10 '>
        <h2 className='hidden mb-2 text-xl font-semibold md:block'>Filters</h2>
        {/* Filter */}
        <Card className='flex flex-wrap-reverse justify-between flex-grow gap-3'>
          <div className='flex justify-between flex-grow gap-2 md:flex-grow-0'>
            <button className='text-xs xl:text-sm h-8 min-w-fit bg-red-500 rounded-[100px] px-4 text-white'>
              Section 1
            </button>
            <button className='text-xs xl:text-sm h-8 min-w-fit bg-blue-500 rounded-[100px] px-4 text-white'>
              Section 2
            </button>
            <button className='text-xs xl:text-sm h-8 min-w-fit bg-yellow-500 rounded-[100px] px-4 text-white'>
              Section 3
            </button>
          </div>
          <SearchBar
            className='rounded-[100px] flex-grow'
            placeholder='Search here'
          />
        </Card>

        {/* Posts */}
        <div className='h-[calc(100vh-400px)] xs:h-[calc(100vh-350px)] md:h-[calc(100vh-450px)] py-5 space-y-5 overflow-y-scroll'>
          {posts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discussion;
