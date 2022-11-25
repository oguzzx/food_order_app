import React from "react";
import { Link } from "react-router-dom";
import etdonerekmek from "../../img/ekmeketdoner.png";
import etdurum from "../../img/etdürüm.png";
import tavukdurum from "../../img/tavukdürüm.png";
import tavukekmek from "../../img/TavukEkmek.png";
import "./order.css";

function Order({
  name,
  address,
  phone,
  donerSecim,
  sogan,
  aciklama,
  ketcapMayonez,
  setName,
  setAddress,
  setPhone,
  setDonerSecim,
  setSogan,
  setAciklama,
  setKetcapMayonez,
  completeToOrder,
}) {
  return (
    <div className="content">
      <h2>Haydi dönerimizi özelleştirelim...</h2>

      <div className="spiaris">
        <form className="form">
          <div className="isim">
            <label htmlFor="firstName">Sipariş Verenin Adı Soyadı : </label>
            <input
              id="firstName"
              name="firstName"
              placeholder="İsim giriniz"
              autoComplete="off"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="adress">
            <label htmlFor="addres">
              Siparişinizi hangi adrese getirelim :{" "}
            </label>
            <textarea
              id="addres"
              name="addres"
              placeholder="Sipariş adresi giriniz"
              autoComplete="off"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="telefon">
            <label htmlFor="tel">
              Size ulaşabilmek için telefon numaranız :{" "}
            </label>
            <input
              id="tel"
              name="tel"
              type="number"
              autoComplete="off"
              placeholder="0555 555 55 55"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="dönersections">
            <input
              type="image"
              src={etdurum}
              alt="etdürüm"
              value="ET DÜRÜM"
              onClick={(e) => {
                setDonerSecim(e.target.alt);
                e.preventDefault();
              }}
            />
            <input
              type="image"
              src={etdonerekmek}
              alt="etekmek"
              value="EKMEK ARASI ET"
              onClick={(e) => {
                setDonerSecim(e.target.alt);
                e.preventDefault();
              }}
            />
            <input
              type="image"
              src={tavukekmek}
              alt="tavukekmek"
              value="EKMEK ARASI TAVUK"
              onClick={(e) => {
                setDonerSecim(e.target.alt);
                e.preventDefault();
              }}
            />
            <input
              type="image"
              src={tavukdurum}
              alt="tavukdürüm"
              value="TAVUK DÜRÜM"
              onClick={(e) => {
                setDonerSecim(e.target.alt);
                e.preventDefault();
              }}
            />
          </div>
          <div className="soğan">
            <label>
              <input
                type="radio"
                name="checked"
                value="Soğanlı"
                onChange={(e) => setSogan(e.target.value)}
              />
              Soğanlı
            </label>
            <label>
              <input
                type="radio"
                name="checked"
                value="Soğansız"
                onChange={(e) => setSogan(e.target.value)}
              />
              Soğansız
            </label>
            <label>
              <input
                type="radio"
                name="checked"
                value="Az soğanlı"
                onChange={(e) => setSogan(e.target.value)}
              />
              Az soğanlı
            </label>
          </div>
          <div className="ketcapgroup">
            <label>
              <input
                type="radio"
                name="kchecked"
                value="Ketçap istiyorum"
                onChange={(e) => setKetcapMayonez(e.target.value)}
              />
              Ketçap istiyorum
            </label>
            <label>
              <input
                type="radio"
                name="kchecked"
                value="Mayonez istiyorum"
                onChange={(e) => setKetcapMayonez(e.target.value)}
              />
              Mayonez istiyorum
            </label>
            <label>
              <input
                type="radio"
                name="kchecked"
                value="Hem ketçap hem mayonez istiyorum"
                onChange={(e) => setKetcapMayonez(e.target.value)}
              />
              Hem ketçap hem mayonez istiyorum
            </label>
            <label>
              <input
                type="radio"
                name="kchecked"
                value="İstemiyorum"
                onChange={(e) => setKetcapMayonez(e.target.value)}
              />
              İstemiyorum
            </label>
          </div>
          <div className="ekistek">
            <label htmlFor="ekistek">Ekstra eklemek istedikleriniz: </label>
            <textarea
              id="ekistek"
              name="ekistek"
              autoComplete="off"
              placeholder="Eklemek istediklerinizi yazınız"
              value={aciklama}
              onChange={(e) => setAciklama(e.target.value)}
            />
          </div>
        </form>
        <div className="siparişiniz">
          <h1>Tanımlanan Sipariş:</h1>
          <ul>
            <li>{name}</li>
            <li>{address}</li>
            <li>{phone}</li>
            <li>{donerSecim}</li>
            <li>{sogan}</li>
            <li>{ketcapMayonez}</li>
            <li>{aciklama}</li>
          </ul>
          <img
            style={{ width: "150px", height: "150px" }}
            src={
              donerSecim === "etdürüm"
                ? etdurum
                : donerSecim === "etekmek"
                ? etdonerekmek
                : donerSecim === "tavukekmek"
                ? tavukekmek
                : donerSecim === "tavukdürüm"
                ? tavukdurum
                : null
            }
            alt={donerSecim}
          />
          <Link onClick={() => completeToOrder()} to="/myOrder">
            Siparişi Tamamla
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Order;
