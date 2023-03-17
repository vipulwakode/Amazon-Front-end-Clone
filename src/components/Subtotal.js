import React from "react";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import FormatPrice from "../Helper/FormatPrice";
import "../styles/Subtotal.css";
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  let Total = getBasketTotal(basket);
  console.log(Total);
  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items):{" "}
        <strong>
          <FormatPrice total={Total} />
        </strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" />
        This order contains a gift
      </small>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
