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
  const handleChoose = (player) => {
    if (coin > player.price) {
      const newCoin = coin - player.price;
      setCoin(newCoin);
      const chosenPlayer = [];
      const getChosenPlayer = JSON.parse(localStorage.getItem("choosenPlayer"));
      const isExist = getChosenPlayer?.find(
        (thisPlayer) => thisPlayer.id === player.id
      );
      if (!getChosenPlayer) {
        chosenPlayer.push(player);
        localStorage.setItem("choosenPlayer", JSON.stringify(chosenPlayer));
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
      } else if (!isExist) {
        chosenPlayer.push(...getChosenPlayer, player);
        localStorage.setItem("choosenPlayer", JSON.stringify(chosenPlayer));
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
      } else {
        toast.error("Already Chosen!", {
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
      
    } 
    else {
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
