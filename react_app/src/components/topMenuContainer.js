import LeftMenu from './leftMenu';
import AppTitle from './appTitle';
import RightMenu from './rightMenu';
import Search from './search';

const TopMenuContainer = () => {
  return (
    <>
      <nav className="bg-gray-900 text-white px-4 py-2 flex items-center justify-center">
        <Search />
        <LeftMenu />
        <AppTitle />
        <RightMenu />
      </nav>
    </>
  );
};

export default TopMenuContainer;
