import Navbar from "../../components/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [menu, setMenu] = useState([]);

  const getMenu = () => {
    axios
      .get("https://api.mudoapi.tech/menus")
      .then((res) => {
        console.log(res);
        const data = res?.data?.data?.Data;
        setMenu(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMenu();
  }, []);

  console.log("state", menu);
  return (
    <div>
      <Navbar />
      <h1>ini homepage</h1>
      {menu?.map((item) => (
        <div>
          <Link to={`/menu/${item?.id}`}>
            <p>{item?.name}</p>
            <p>{item?.priceFormatted}</p>
            <img width={200} src={item?.imageUrl} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;

//1. siapkan state = checked
//2. buat function memanggil api = checked
//3. function dipanggil dalam useEffect = lifecycle Method
//4. render data diambil dari state
