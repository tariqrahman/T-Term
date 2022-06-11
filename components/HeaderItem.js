import Link from 'next/link';

const HeaderItem = ({ page, link }) => {
  return (
    <div className='text-sm text-midnight-blue hover:text-paleviolet-red px-6 font-mono'>
      <Link href={link}>
        <a className='no-underline hover:underline'>{page}</a>
      </Link>
    </div>
  );
};

export default HeaderItem;
