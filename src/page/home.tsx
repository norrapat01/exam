import Advertise from "../template/advertise";
import ResponsiveContainer from "../template/container";
import Footer from "../template/footer";
import Navbar from "../template/navbar";
import Menu from "../component/menu/menu";


const Secret = () => {
  return (
    <>
      <Navbar />
      <Advertise />
      <ResponsiveContainer>
        <Menu />
      </ResponsiveContainer>
      
      <Footer />
    </>
  );
};
export default Secret;
