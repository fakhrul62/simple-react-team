import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Players from "./components/Players/Players";
import Nav from "./components/Navbar/Nav";
  import { toast, ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

function App() {
  const [coin, setCoin] = useState(0);
  const handleChoose = (price) => {
    if (coin > price) {
      const newCoin = coin - price;
      setCoin(newCoin);
      toast.success("Player Added Successfully!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    else{
      toast.error("No more Coins!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleCoin = () => {
    const newCoin = coin + 6000000;
    setCoin(newCoin);
  };
  return (
    <>
      <Nav coin={coin}></Nav>
      <Header handleCoin={handleCoin}></Header>
      <div>
        <Players handleChoose={handleChoose}></Players>
        <ToastContainer />
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
