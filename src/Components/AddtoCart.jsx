import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartDeleteData, cartUpdateData } from "./Redux/Action/dataAction";

const AddtoCart = () => {
  const cartdata = useSelector((state) => state.cartdata.cartdata);
  const dispatch = useDispatch()

  const deleteData = (id) => {
    dispatch(cartDeleteData(id))
  }

  const qtychange = (e , obj) => {
    cartdata?.map(x => {
      obj.qty = e.target.value
      return x.id == obj.id ? dispatch(cartUpdateData(obj)) : ''
    })
  }

  let totalPrice = 0
  const total = cartdata.reduce((accumulator,current) => accumulator + current.productprice * current.qty, totalPrice)

  return (
    <>
      <div className="container shadow-lg py-3">
        <h2 className="border-bottom border-2 border-dark pb-2 mb-3">Shopping Cart</h2>
        {cartdata?.map((x, i) => {
          return (
            <div className="w-100 d-flex border-bottom pb-3 mb-3" key={i}>
              <img src={x.productImage} width="300px" height="300px" />
              <div className="ps-3">
                <h2>{x.productName}</h2>
                <h5>₹ {x.productprice}</h5>
                  Quantity: <select value={x.qty} onChange={(e) => qtychange(e , x)}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select> <button className="btn btn-danger py-1" onClick={() => deleteData(x.id)}>delete</button>
              </div>
            </div>
          );
        })}
        <div className="d-flex justify-content-between">
          <h3>Subtotal: ₹ {total}</h3>
          <button className="btn btn-warning">Proceed to Buy</button>
        </div>
      </div>
    </>
  );
};

export default AddtoCart;
