import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MenuDetail = () => {
  const [menu, setMenu] = useState({});
  const param = useParams();
  const navigate = useNavigate();

  const getDetailMenu = () => {
    axios
      .get(`https://api.mudoapi.tech/menu/${param.id}`)
      .then((res) => {
        console.log(res);
        const data = res?.data?.data;
        setMenu(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDetailMenu();
  }, []);

  return (
    <div>
      <Navbar />
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>menu detail</h1>
      <div>
        <p>{menu?.name}</p>
        <p>{menu?.priceFormatted}</p>
        <p>{menu?.description}</p>
        <img width={200} src={menu?.imageUrl} />
      </div>
    </div>
  );
};

export default MenuDetail;
