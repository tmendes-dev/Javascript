//Factory function to create objects
const product1 = {
  name: "Product 1",
  price: 100,
  description: "This is product 1",
  image: "https://picsum.photos/200/300",
  inStock: true,
  category: "Electronics",
  rating: 4.5,
};

const createProduct = (
  name,
  price,
  description,
  image,
  inStock,
  category,
  rating
) => {
  return {
    name,
    price,
    description,
    image,
    inStock,
    category,
    rating,
    discount: 0.1,
  };
};

const product = createProduct(
  "Product 1",
  100,
  "This is product 1",
  "https://picsum.photos/200/300",
  true,
  "Electronics",
  4.5
);
console.log(product);
