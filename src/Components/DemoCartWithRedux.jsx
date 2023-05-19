import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAddData, cartUpdateData } from "./Redux/Action/dataAction";
import { Link } from "react-router-dom";

const DemoCartWithRedux = () => {
  const state = useSelector((state) => state.data.data);
  const cartdata = useSelector(state => state.cartdata.cartdata)
  const dispatch = useDispatch()

  const cartData = (id) => {
    let result = state?.find(x => x.id == id)
    let update = cartdata?.find(x => x.id == id)
    if(update){
      result.qty += 1
      dispatch(cartUpdateData(result))
    }
    else{
      dispatch(cartAddData(result))
    }
  }
  
  return (
    <>
      <div className="container py-4 mt-3">
        <div className="row row-cols-3 g-4">
          {state?.map((x, i) => {
            return (
              <div className="col" key={i}>
                  <div className="card pt-3 h-100">
                    <div className="imgbackground">
                        <img src={x.productImage} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{x.productName}</h5>
                    </div>
                    <div className="card-footer d-flex justify-content-between align-items-center">
                        <h5 className="card-title">₹ {x.productprice}</h5>
                        <Link to={'/cart'} onClick={() => cartData(x.id)} className="btn btn-success">Add to Cart</Link>
                    </div>
                  </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DemoCartWithRedux;
