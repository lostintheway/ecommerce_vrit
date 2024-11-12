"use client";
import Image from "next/image";
import { useState } from "react";
import "./product.css";
import ZoomedImage from "@/components/ZoomedImage";
import CartIcon from "@/components/CartIcon";
import Cart from "@/components/Cart";
import { ErrorBoundary } from "react-error-boundary";
import FallbackRender from "@/components/FallbackRender";

interface ProductType {
  id: string;
  name: string;
  price: number;
  images: string[];
}

export interface CartType extends ProductType {
  quantity: number;
}

export default function Home() {
  const products = [
    {
      id: "1",
      name: "Iphone 6",
      price: 60000,
      images: [
        "https://images.pexels.com/photos/336948/pexels-photo-336948.jpeg",
        "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg",
      ],
      inventory: 20,
    },
    {
      id: "2",
      name: "Dell Laptop",
      price: 120000,
      images: [
        "https://images.pexels.com/photos/28084312/pexels-photo-28084312/free-photo-of-laptop-and-notes-on-bed.jpeg",
        "https://images.pexels.com/photos/19915776/pexels-photo-19915776/free-photo-of-woman-sitting-on-a-sofa-with-a-laptop-displaying-a-chart.jpeg",
      ],
      inventory: 10,
    },
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [cart, setCart] = useState<CartType[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  const handleAddToCart = (product: ProductType) => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 1000);
    const findItem = cart.find((item) => item.id === product.id);
    if (findItem) {
      const cartData = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );

      setCart(cartData);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleUpdateQuantity = (productId: string, add: boolean) => {
    const newCart = [];

    for (const item of cart) {
      if (item.id === productId) {
        const updatedQuantity = add ? item.quantity + 1 : item.quantity - 1;
        if (updatedQuantity > 0) {
          newCart.push({ ...item, quantity: updatedQuantity });
        }
      } else {
        newCart.push(item);
      }
    }

    setCart(newCart);
  };

  const openSelectedImage = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const handleToggleCart = () => {
    setAnimate(true);
    setIsCartOpen((prev) => !prev);
  };

  return (
    <div>
      <nav>
        <h1>Products Page</h1>
        <button
          className={"cart-btn" + (animate ? " bounce" : "")}
          onClick={handleToggleCart}
        >
          <span>{cart.length}</span> <CartIcon />
        </button>
      </nav>

      <div className={`cart-slide-in ${isCartOpen ? "open" : ""}`}>
        <ErrorBoundary fallbackRender={FallbackRender}>
          <Cart
            cartDetails={cart}
            handleUpdate={handleUpdateQuantity}
            handleCloseCart={handleToggleCart}
          />
        </ErrorBoundary>
      </div>

      <div className="products-page">
        <ErrorBoundary fallbackRender={FallbackRender}>
          {products.map((product) => (
            <div key={product.id} className="product-container">
              <button
                className={"add-to-cart-btn"}
                onClick={() => handleAddToCart(product)}
              >
                + Cart
              </button>
              <h2>{product.name}</h2>
              <div className="product-gallery">
                {product.images.map((item) => (
                  <div
                    className="product-image"
                    key={item}
                    onClick={() => openSelectedImage(item)}
                  >
                    <Image src={item} alt="image" width={200} height={200} />
                  </div>
                ))}
              </div>
              <div className="product-price">
                NRs {product.price.toLocaleString()}
              </div>
            </div>
          ))}
        </ErrorBoundary>
        {/* {JSON.stringify(cart)} */}

        {selectedImage && (
          <ErrorBoundary fallbackRender={FallbackRender}>
            <ZoomedImage
              zoomedImage={selectedImage}
              closeZoomedImage={() => setSelectedImage(null)}
            />
          </ErrorBoundary>
        )}
      </div>
    </div>
  );
}
