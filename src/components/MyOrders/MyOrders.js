import React from "react";
import etdonerekmek from "../../img/ekmeketdoner.png";
import etdurum from "../../img/etdürüm.png";
import tavukdurum from "../../img/tavukdürüm.png";
import tavukekmek from "../../img/TavukEkmek.png";
import "./myOrders.css";

function MyOrders({ orders, setOrders, deleteOrder }) {
  return (
    <div className="myOrder">
      {orders.length === 0 ? (
        <h1>Henüz siparişiniz yok</h1>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="orders">
            <h1>Siparişiniz:</h1>
            <p>Adınız: {order.name}</p>
            <p>Adresiniz: {order.address}</p>
            <p>Telefon Numaranız: {order.phone}</p>
            <p>Seçtiğiniz Döner: {order.donerSecim}</p>
            <p>Seçtiğiniz Soğan: {order.sogan}</p>
            <p>Ekstra istekleriniz: {order.aciklama}</p>
            <p>Ketçap ve Mayonez: {order.ketcapMayonez}</p>
            <button onClick={() => deleteOrder(index)}>Siparişi Sil</button>
          </div>
        ))
      )}
    </div>
  );
}

export default MyOrders;
