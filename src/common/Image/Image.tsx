import { Image as ImageType } from "../../types/Image";
import "./image.css";

function Image({ image, name }: ImageType) {
  return (
    <div className="image">
      <img
        src={`${import.meta.env.BASE_URL}${image}`}
        alt={name}
        width="200px"
      />
    </div>
  );
}
export default Image;
