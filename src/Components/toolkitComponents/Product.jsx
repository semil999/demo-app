import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addcartdata, updatecartdata } from "../ReduxToolkit/toolkitAction/cartAction";
import { Link } from "react-router-dom";

const Product = () => {
  const product = useSelector(state => state.product.product);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart)
  
  const addtoCartData = (id) => {
    let findData = product?.find(x => x.id == id)
    let result = cart?.find(e => e.id == id)
    if(result){
        let data = {...findData}
        data.qty += 1
        dispatch(updatecartdata(data))
    }
    else{
        dispatch(addcartdata(findData))
    }
  }
  return (
    <>
      <div className="container-fluid bg-info mt-4">
        <div className="container">
          <div className="row row-cols-lg-3 row-cols-md-2 pb-4 pt-2 px-2 row-cols-1 g-4">
            {product?.map((x, i) => {
              return (
                <div className="col" key={i}>
                  <div className="card h-100 pt-3">
                    <div className="px-5 mx-2">
                      <img
                        src={x.productImage}
                        className="w-100"
                        style={{ height: "230px" }}
                      />
                    </div>
                    <div className="card-body">
                        <h4>{x.productName}</h4>
                    </div>
                    <div className="card-footer d-flex justify-content-between align-items-center">
                        <span className="fs-3">₹ {x.productprice}</span> <Link to={'/cart'} onClick={() => addtoCartData(x.id)} className="btn btn-success">Add to Cart</Link>
                    </div> 
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
