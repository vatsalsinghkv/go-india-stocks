import Image from 'next/image';
import { Button, SearchBar } from '@/components';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between gap-10 p-2 px-5 bg-bg-secondary'>
      <h1 className='text-lg'>
        <a href='/'>
          <Image src='/logo.webp' alt='logo' height={100} width={100} />
        </a>
      </h1>

      <SearchBar className='flex-grow' />

      {/* Buttons */}
      <div className='flex gap-2'>
        <Button>Contact Us</Button>
        <Button variant='outline' type='link' href='#'>
          SIGN UP
        </Button>
        <Button variant='outline' type='link' href='#'>
          SIGN IN
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
