import featuredCompanies from '@/content/featured-companies';
import Image from 'next/image';

const Featured = () => {
  return (
    <section>
      <h1 className='ml-5 heading-primary'>Featured Companies</h1>
      <div className='flex items-center gap-10 p-2 px-3 overflow-scroll bg-sky-100'>
        {featuredCompanies.map(({ name, img, url }) => (
          <a key={img} href={url}>
            <Image
              src={img}
              alt={name}
              width={150}
              height={100}
              className='aspect-[3/1] object-contain mix-blend-multiply'
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Featured;
