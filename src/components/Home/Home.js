import React from "react";
import "./home.css";
import kurye from "../../img/kurye1.png";
import etdonerekmek from "../../img/ekmeketdoner.png";
import etdurum from "../../img/etdürüm.png";
import tavukdurum from "../../img/tavukdürüm.png";
import tavukekmek from "../../img/TavukEkmek.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="leftside">
        <div className="img">
          <img src={kurye} alt="" />
        </div>
      </div>
      <div className="rightside">
        <div className="ust">
          <h3>İstediğin Lezzeti Seç Ayağına Gelsin</h3>
        </div>
        <div className="alt">
          <div className="img">
            <img src={etdonerekmek} alt="" />
            <img src={etdurum} alt="" />
            <img src={tavukdurum} alt="" />
            <img src={tavukekmek} alt="" />
          </div>
          <div className="order_button">
            <Link to="/order">Sipariş Ver</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
