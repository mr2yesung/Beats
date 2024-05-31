import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductsFilter from "./ProductsFilter";
import Loading from "@/components/Loading";
import PaginationComponent from "@/components/PaginationComponent";
import Product from "@/components/Product";
import { useProducts } from "@/hooks/useProducts";

const itemsPerPage = 6;

function Products() {
  const { products, isLoading } = useProducts();
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!products && !isLoading) navigate("/not-found", { replace: true });
    },
    [products, isLoading, navigate],
  );

  function resetCurrentPage() {
    setCurrentPage(1);
    window.scrollTo(0, 0);
  }

  return (
    <div className="flex-1 bg-primary/5 py-8">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-4 md:px-6">
        <div className="col-span-1 rounded-lg bg-white p-6 shadow-md">
          <ProductsFilter resetCurrentPage={resetCurrentPage} />
        </div>

        <div className="col-span-3">
          {isLoading ? (
            <Loading className="max-h-[1128px]" />
          ) : products && products.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {products
                .slice(
                  (currentPage - 1) * itemsPerPage,
                  currentPage * itemsPerPage,
                )
                .map((product) => (
                  <Product key={product.id} {...product} />
                ))}

              <div className="col-span-3">
                <PaginationComponent
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  maxPage={Math.ceil(products.length / itemsPerPage)}
                />
              </div>
            </div>
          ) : (
            <p className="flex h-full items-center justify-center text-lg">
              No products found
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
