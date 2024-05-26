import Detail from "../component/menu/detail/detail";
import Advertise from "../component/advertise";
import ResponsiveContainer from "../component/container";
import Footer from "../component/footer";
import Navbar from "../component/navbar";
import SidebarWithMenu from "../component/side-bar/sidebarWithMenu";

const Secret = () => {
  return (
    <>
      <Navbar />
      <Advertise />
      <ResponsiveContainer>
        <SidebarWithMenu />
      </ResponsiveContainer>

      {/* <Footer /> */}
    </>
  );
};
export default Secret;
