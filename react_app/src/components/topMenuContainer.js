import LeftMenu from "./leftMenu";
import AppTitle from "./appTitle";
import RightMenu from "./rightMenu";

const TopMenuContainer = () => {
  return (
    <>
      <nav className="bg-gray-900 text-white px-4 py-2 flex items-center justify-center">
        <LeftMenu />
        <AppTitle />
        <RightMenu />
      </nav>
    </>
  )
}

export default TopMenuContainer;
