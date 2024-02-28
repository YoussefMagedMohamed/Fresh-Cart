import CategoriesSlider from "../CategoriesSlider/CategoriesSlider";
import MainSlider from "../MainSlider/MainSlider";
import ProductItem from "../ProductItem/ProductItem";

export default function Home() {
  return (
    <>
      <div className="w-100">
        <MainSlider />
        <CategoriesSlider />
        <ProductItem />
      </div>
    </>
  );
}
