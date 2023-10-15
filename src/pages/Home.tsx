import React from "react";
import { Layout, Loader, Pagination, ProductList } from "../components";
import { useProducts } from "../hooks";
import { SidebarProvider } from "../context";


const Home = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 10;
  const totalProducts = 100;
  const { products, loading } = useProducts({
    offset: (currentPage - 1) * itemsPerPage,
    limit: itemsPerPage,
  });
  return (
    <SidebarProvider>
      <Layout>
        {loading && <Loader />}
        <ProductList products={products} loading={loading}/>
        {products?.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalItems={totalProducts}
            itemsPerPage={itemsPerPage}
            onPageChange={setCurrentPage}
          />
        )}
      </Layout>
    </SidebarProvider>
  );
};

export default Home;
