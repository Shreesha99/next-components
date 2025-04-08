import { ComponentShowcase } from "./component-showcase";
import { Carousel } from "../lib/components/Carousel";

const CarouselShowcase = () => {
  return (
    <ComponentShowcase
      title="Carousel"
      preview={
        <Carousel
          images={[
            "https://images.pexels.com/photos/31436082/pexels-photo-31436082/free-photo-of-serene-horse-grazing-in-rural-pasture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
          ]}
        />
      }
      code={`<Carousel
  images={[
    "https://images.pexels.com/photos/31436082/pexels-photo-31436082/free-photo-of-serene-horse-grazing-in-rural-pasture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  ]}
/>`}
    />
  );
};

export default CarouselShowcase;
