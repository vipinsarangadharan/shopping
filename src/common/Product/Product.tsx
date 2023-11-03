import { Product as ProductType } from "../../types/Product";
import Image from "../Image";
import "./product.css";
function Product({ name, description, delivery, price, image }: ProductType) {
  return (
    <div className="product">
      <Image name={name} image={image} />
      <div className="description">
        <h2>{name}</h2>
        <h3>{description}</h3>
        <p>{delivery}</p>
        <h2>{price}</h2>
      </div>
    </div>
  );
}
export default Product;
