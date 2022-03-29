import HeaderItem from './HeaderItem';

const Header = () => {
  return (
    <header className='flex m-5 '>
      <div className='flex flex-row'>
        <HeaderItem page='Terminal' link='/pages/index.js' />
        <HeaderItem page='Resume' link='/pages/index.js' />
        <HeaderItem page='Contact Me' link='/pages/index.js' />
      </div>
    </header>
  );
}

export default Header;
