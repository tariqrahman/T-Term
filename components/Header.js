import HeaderItem from './HeaderItem';

const Header = ({ headerText }) => {
  return (
    <header className="flex flex-col m-5">
      <div className="flex flex-row">
        {/* Insert HeaderItem Map As Needed */}
      </div>
      <div className="flex flex-col items-center text-4xl pt-36 pb-6 font-mono font-bold text-midnight-blue italic">
        {headerText}
      </div>
    </header>
  );
};

export default Header;
