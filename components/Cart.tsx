import { CartType } from "@/app/page";
import Image from "next/image";
import React from "react";

type Props = {
  cartDetails: CartType[];
  handleUpdate: (id: string, add: boolean) => void;
  handleCloseCart: () => void;
};

const Cart = ({ cartDetails, handleUpdate, handleCloseCart }: Props) => {
  return (
    <div className="cart-container">
      <button className="cart-close-btn" onClick={() => handleCloseCart()}>
        X
      </button>
      {cartDetails.length < 1 && <div>No Items in Cart</div>}

      <div>
        {cartDetails.map((item) => (
          <div key={item.id} className="cart-item">
            <Image
              src={item.images[0]}
              alt={item.name}
              width={50}
              height={50}
            />
            <div className="cart-actions">
              <h4>{item.name}</h4>
              <div>
                <button
                  className="cart-action-btn"
                  onClick={() => handleUpdate(item.id, false)}
                >
                  -
                </button>
                {item.quantity}
                <button
                  className="cart-action-btn"
                  onClick={() => handleUpdate(item.id, true)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className="cart-item">
          <p>
            Total: NRs{" "}
            {cartDetails
              .reduce((sum, item) => sum + item.price * item.quantity, 0)
              .toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
