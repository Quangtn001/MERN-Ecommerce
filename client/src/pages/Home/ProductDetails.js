import React from "react";
import NavBar from "../../components/Home/NavBar";
import { Link, useParams } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import { useGetProductQuery } from "../../store/services/productService";
import DetailsCard from "../../components/Home/DetailsCard";
import Loading from "../../components/Home/Loading";
import { Helmet } from "react-helmet";
import Footer from "../../components/Home/Footer";
const ProductDetails = () => {
  const { id } = useParams();
  const { data, isFetching } = useGetProductQuery(id);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Chi tiết sản phẩm</title>
      </Helmet>
      <NavBar />
      <div className="my-container mt-24">
        {isFetching ? (
          <Loading />
        ) : (
          <>
            <ul className="flex items-center">
              <li className="capitalize text-gray-600">
                <Link to="/">Trang chủ</Link>
              </li>
              <FiChevronRight className="block mx-2" />
              <li className="capitalize text-gray-600">
                <Link to={`/cat-products/${data.category}`}>
                  {data.category}
                </Link>
              </li>
              <FiChevronRight className="block mx-2" />
              <li className="capitalize text-gray-600">
                <Link to={`/product/${data._id}`}>{data.title}</Link>
              </li>
            </ul>

            <DetailsCard product={data} />
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
