import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PROUDUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My first book",
    description: "First book I have written",
  },
  {
    id: "p2",
    price: 10,
    title: "My second book",
    description: "Second book I have written",
  },
  {
    id: "p3",
    price: 20,
    title: "My third book",
    description: "Third book I have written",
  },
  {
    id: "p4",
    price: 100,
    title: "My fourth book",
    description: "Fourth book I have written",
  },
  {
    id: "p5",
    price: 200,
    title: "My fifth book",
    description: "Fifth book I have written",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PROUDUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
