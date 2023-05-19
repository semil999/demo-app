import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletecartdata, updatecartdata } from "../ReduxToolkit/toolkitAction/cartAction";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch()

  const deleteCartData = (id) => {
    dispatch(deletecartdata(id))
  }

  const qtychange = (e , obj) => {
    cart?.map(x => {
        let object = {...obj}
        object.qty = e.target.value
        return x.id == obj.id ? dispatch(updatecartdata(object)) : ''
    })
  }

  let totalPrice = 0
  const total = cart.reduce((accumulator,current) => accumulator + current.productprice * current.qty, totalPrice)

  return (
    <>
      <div className="container-fluid">
        <div className="container shadow-lg py-3">
            <div className="pb-3 mb-3 border-bottom border-2 border-dark">
                <h2 className="text-center">Shopping Cart</h2>
            </div>
          {cart?.map((x, i) => {
            return (
              <div className="d-flex flex-wrap pb-3 border-bottom mb-3" key={i}>
                <div className="w-25 border-end border-1 border-dark">
                  <img src={x.productImage} style={{height : '250px' , width : '100%'}} />
                </div>
                <div className="w-75 ps-4">
                  <h4 className="fw-normal pb-3">{x.productName}</h4>
                  Quantity : <select value={x.qty} onChange={(e) => qtychange(e , x)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select> <br /><br />
                  <h5 className="fs-3 d-flex justify-content-between"><button onClick={() => deleteCartData(x.id)} className="btn btn-danger py-1">Delete</button> ₹ {x.productprice}</h5>
                </div>
              </div>
            );
          })}
          <div className="d-flex justify-content-between">
            <button className="btn btn-warning fw-semibold">Procced to Buy</button>
            <span className="text-success fw-bold fs-3">Subtotal : ₹ {total}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
