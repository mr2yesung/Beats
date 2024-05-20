import { useState } from "react";
import { Navigate } from "react-router-dom";
import ProductsFilter from "./ProductsFilter";
import Loading from "@/components/Loading";
import PaginationComponent from "@/components/PaginationComponent";
import Product from "@/components/Product";
import { useProducts } from "@/hooks/useProducts";

const itemsPerPage = 6;

function Products() {
  const { products, isLoading } = useProducts();
  const [currentPage, setCurrentPage] = useState(1);

  if (isLoading) return <Loading />;

  if (!products) return <Navigate to="/not-found" replace />;

  const maxPage = Math.ceil(products.length / itemsPerPage);

  function resetCurrentPage() {
    setCurrentPage(1);
    window.scrollTo(0, 0);
  }

  const pageDisplayProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="flex-1 bg-primary/5 py-8">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-4 md:px-6">
        <div className="col-span-1 rounded-lg bg-white p-6 shadow-md">
          <ProductsFilter resetCurrentPage={resetCurrentPage} />
        </div>

        <div className="col-span-3">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {pageDisplayProducts.map((product) => (
              <Product key={product.id} {...product} />
            ))}

            <div className="col-span-3">
              <PaginationComponent
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                maxPage={maxPage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;