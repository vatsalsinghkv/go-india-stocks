import Image from 'next/image';

const Featured = () => {
  return (
    <section>
      <h1 className='ml-5 heading-primary'>Featured Companies</h1>
      <div className='flex items-center gap-10 p-2 px-3 overflow-x-scroll bg-sky-100'>
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

const featuredCompanies = [
  {
    name: 'capri global',
    img: '/companies/capri-global.avif',
    url: '#',
  },
  {
    name: 'data patterns',
    img: '/companies/data-patterns.png',
    url: '#',
  },
  {
    name: 'fino',
    img: '/companies/fino.png',
    url: '#',
  },
  {
    name: 'ganesh housing',
    img: '/companies/ganesh-housing.jpeg',
    url: '#',
  },
  {
    name: 'hira',
    img: '/companies/hira.png',
    url: '#',
  },
  {
    name: 'capri global',
    img: '/companies/capri-global.avif',
    url: '#',
  },
  {
    name: 'data patterns',
    img: '/companies/data-patterns.png',
    url: '#',
  },
  {
    name: 'hira',
    img: '/companies/hira.png',
    url: '#',
  },
];
