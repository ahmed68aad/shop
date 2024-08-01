import { useEffect, useState, useCallback, useMemo } from "react";
import { getProducts, getProduct } from "../../services";
import { shopContext } from "../../services/shopContext";


function ShopProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [productId, setProductId] = useState(null);
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrices, setTotalPrices] = useState(0);
  const [totalDiscounts, setTotalDiscounts] = useState(0);

  useEffect(() => {
    getProducts()
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .catch(err => console.error("Failed to fetch products:", err.message));
  }, []);

  useEffect(() => {
    if (productId) {
      getProduct(productId)
        .then(res => res.json())
        .then(data => setProduct(data))
        .catch(err => console.error("Failed to fetch product:", err.message));
    }
  }, [productId]);



  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cartProducts'));
    if (savedCart) {
      setCartProducts(savedCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
  }, [cartProducts]);

  const addToCart = useCallback((newProduct) => {
    setCartProducts(prevProducts => {
      const updatedCartProducts = [...prevProducts, newProduct];
      localStorage.setItem("cartProducts", JSON.stringify(updatedCartProducts));
      return updatedCartProducts;
    });
  }, []);
  

  const totalDiscount = useMemo(() => {
    return cartProducts.reduce((total, product) => total + product.discountPercentage / 100 * product.price, 0);
  }, [cartProducts]);

  const totalPrice = useMemo(() => {
    return cartProducts.reduce((total, product) => total + product.price, 0) - totalDiscount;
  }, [cartProducts, totalDiscount]);

  useEffect(() => {
    setTotalDiscounts(totalDiscount);
    setTotalPrices(totalPrice);
  }, [totalDiscount, totalPrice]);

  return (
    <shopContext.Provider value={{
      products,
      productId,
      setProductId,
      product,
      cartProducts,
      setCartProducts,
      totalPrices,
      totalDiscounts,
      addToCart
    }}>
      {children}
    </shopContext.Provider>
  );
}

export default ShopProvider;
