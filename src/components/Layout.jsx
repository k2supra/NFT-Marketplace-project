import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";

import Loading from "./Screens/Loading/Loading";
import { useSelector } from "react-redux";
import PopUp from "./Screens/PopUp/PopUp";
import { useEffect } from "react";

function Layout() {
  const loading = useSelector(state => state.user.loading)
  const currentUser = useSelector(state => state.user.currentUser)
  useEffect(()=>{console.log(currentUser);
  }, [])
    return (
      <>
        {loading && <Loading/>}
        <NavBar />
        <main style={{flex: '1'}}>
          <Outlet />
        </main>
        <Footer />
        <PopUp/>
      </>
    );
  }
  
  export default Layout;