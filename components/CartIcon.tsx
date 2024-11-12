import Image from "next/image";
import React from "react";
import Cart from "@/assets/icons/cartIcon.png";

const CartIcon = () => {
  return (
    <Image src={Cart} alt="cart_icon" width={30} height={30} quality={100} />
  );
};

export default CartIcon;
