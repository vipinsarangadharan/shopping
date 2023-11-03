import "./main.css";
import products from "../../data/products.json";
import Product from "../../common/Product";
import { Product as ProductType } from "../../types/Product";
function Main() {
  return (
    <div className="main">
      {products.map(
        ({ id, name, description, delivery, price, image }: ProductType) => (
          <Product
            key={id}
            id={id}
            name={name}
            description={description}
            delivery={delivery}
            price={price}
            image={image}
          />
        )
      )}
    </div>
  );
}
export default Main;
