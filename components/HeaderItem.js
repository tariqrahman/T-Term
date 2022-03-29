import Link from 'next/link';

const HeaderItem = ({ page, link }) => {
  return (
    <div className='hover:text-blue-500 px-6'>
      <Link href={link}>
        <a className='no-underline hover:underline'>{page}</a>
      </Link>
    </div>
  );
};

export default HeaderItem;
