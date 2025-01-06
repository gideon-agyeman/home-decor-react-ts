import ProductGrid from '../shared/ProductGrid';
import SectionTitle from '../shared/SectionTitle';

const FeaturedProducts = () => {
  return (
    <section className="pt-24">
      <SectionTitle text="featured products" />
      <ProductGrid />
    </section>
  );
};

export default FeaturedProducts;
