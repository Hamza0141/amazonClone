import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../StateProvider/StateProvider';
import { getBasketTotal } from '../Reducer/Reducer';
import { useNavigate } from "react-router-dom";

function Subtotal() {
        const [{ basket }, dispatch] = useStateValue();
         const history = useNavigate();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={(e) => history("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal