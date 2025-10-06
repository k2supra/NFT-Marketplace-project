import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";

import Loading from "./Screens/Loading/Loading";
import { useSelector } from "react-redux";

function Layout() {
  const loading = useSelector(state => state.user.loading)
    return (
      <>
        {loading && <Loading/>}
        <NavBar />
        <main style={{flex: '1'}}>
          <Outlet />
        </main>
        <Footer />
      </>
    );
  }
  
  export default Layout;