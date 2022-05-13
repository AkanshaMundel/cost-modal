import React from "react";
// import nft from './nft.jpg';

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (

   
      <>
      <div onClick={onClose} className="overlay">
     
     </div>
      <div className="modalContainer">
      <div className="container">
        <div className="close-div" onClick={onClose}>
          <span align="center" className="x-span">
            X
          </span>
        </div>
        <span className="modal-heading-span">Calculate the cost</span>
      </div>
      <div className="all-items"><div className="dropdown">
        <div >
          <select name="no of pages" id="type">
          <option>Personal Website</option>
          <option>a</option>
          <option>b</option>
          <option>c</option>
          <option>d</option>
          <option>e</option>
          <option>f</option>
          <option>g</option>
          <option>h</option>
          </select>
        </div>
 
        <div>
          <label for="pages">No. of pages</label>
          <select name="no of pages" id="pages" >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
              </select>
        </div>
      </div>
      <div className="radiocont">
        <div>
            <input type="radio" id="seo"  />
            <label for="seo">SEO</label>
        </div>
        <div>
            <input type="radio" id="modalwindt"/>
            <label for="modalwindt">Modal Windows</label>
        </div>
        <div>
            <input type="radio" id="singp" />
            <label for="singp">Singnup</label>
        </div>
        <div>
            <input type="radio" id="Woocommerce" />
            <label for="Woocommerce">Woocommerce</label>
        </div>
        <div>
            <input type="radio" id="Countdown" />
            <label for="Countdown">Countdown</label>
        </div>
        <div>
            <input type="radio" id="Social Locker" />
            <label for="Social Locker">Social Locker</label>
        </div>
        <div>
            <input type="radio" id="Payment Gateway" />
            <label for="Payment Gateway">Payment Gateway</label>
        </div>
        <div>
            <input type="radio" id="Calculator" />
            <label for="Calculator">Calculator</label>
        </div>
        <div>
            <input type="radio" id="Question Answer" />
            <label for="Question Answer">Question Answer</label>
        </div>
        <div>
            <input type="radio" id="Gallery" />
            <label for="Gallery">Gallery</label>
        </div>
        <div>
            <input type="radio" id="Side Menu" />
            <label for="Side Menu">Side Menu</label>
        </div>
        <div>
            <input type="radio" id="Forum" />
            <label for="Forum">Forum</label>
        </div>
        
      </div>
      <button className="btn" >Calculate the cost</button></div>
      
    </div></>
    
  );
};
export default Modal;