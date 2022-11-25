import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MyOrders from "./components/MyOrders/MyOrders";
import Order from "./components/Order/Order";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const notify = () =>
    toast.success("Siparişiniz alındı. Teşekkür ederiz.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

  const notify2 = () =>
    toast.info("Siparişiniz Başarıyla İptal Edilmiştir", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [donerSecim, setDonerSecim] = useState("");
  const [sogan, setSogan] = useState("");
  const [aciklama, setAciklama] = useState("");
  const [ketcapMayonez, setKetcapMayonez] = useState("");

  const [orders, setOrders] = useState([]);

  function completeToOrder() {
    const newOrder = {
      name,
      address,
      phone,
      donerSecim,
      sogan,
      aciklama,
      ketcapMayonez,
    };
    setOrders([...orders, newOrder]);
    setName("");
    setAddress("");
    setPhone("");
    setDonerSecim("");
    setSogan("");
    setAciklama("");
    setKetcapMayonez("");

    notify();
  }

  function deleteOrder(index) {
    const newOrders = orders.filter((order, i) => i !== index);
    setOrders(newOrders);
    notify2();
  }

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/order"
            element={
              <Order
                name={name}
                setName={setName}
                address={address}
                setAddress={setAddress}
                phone={phone}
                setPhone={setPhone}
                donerSecim={donerSecim}
                setDonerSecim={setDonerSecim}
                sogan={sogan}
                setSogan={setSogan}
                aciklama={aciklama}
                setAciklama={setAciklama}
                ketcapMayonez={ketcapMayonez}
                setKetcapMayonez={setKetcapMayonez}
                completeToOrder={completeToOrder}
              />
            }
          />
          <Route
            path="/myorder"
            element={
              <MyOrders
                orders={orders}
                setOrders={setOrders}
                deleteOrder={deleteOrder}
              />
            }
          />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
