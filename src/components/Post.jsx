import { FaRegHeart } from 'react-icons/fa';
import { BiComment, BiShareAlt } from 'react-icons/bi';
import { FiEye } from 'react-icons/fi';
import { Card, UserProfile } from '.';

const Post = ({ children }) => {
  return (
    <Card className='p-2 px-5 space-y-3'>
      <header className='flex justify-end ml-auto text-sm font-semibold text-blue-500'>
        2 mins ago
      </header>
      {/* Post Content */}
      <figure className='w-full'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, ipsa
        aut! Inventore unde architecto, nihil impedit error totam mollitia
        quibusdam nam, exercitationem beatae autem? Quidem est pariatur eveniet
        facere odit magnam fugiat quos ad quia eum sint consectetur, in quasi ea
        veritatis qui ex modi fuga rerum! Neque, dolores nihil.
      </figure>
      {/* User Footer */}
      <figcaption className='flex gap-2'>
        <div className='w-[50px] flex-grow'>
          <UserProfile src='https://source.unsplash.com/random/100x100?user,man,woman,employee' />
        </div>
        <div className='p-2 py-1 space-y-2 md:flex-grow'>
          <h3 className='font-bold'>User 1</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            repellendus!
          </p>

          <footer className='flex justify-between mt-1 text-sm font-semibold'>
            <div className='post-btn'>
              <button>
                <FaRegHeart className='md:text-xl' />
              </button>
              2k
            </div>
            <div className='post-btn'>
              <FiEye className='md:text-xl' />
              2k
            </div>
            <div className='post-btn'>
              <BiComment className='md:text-xl' />
              2k Comments
            </div>
            <div className='post-btn'>
              <BiShareAlt className='md:text-xl' />
              Share
            </div>
          </footer>
        </div>
      </figcaption>
    </Card>
  );
};

export default Post;
