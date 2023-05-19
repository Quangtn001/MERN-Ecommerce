import { Link } from "react-router-dom";
const Sidebar = ({ side, closeSidebar }) => {
  return (
    <div
      className={`fixed top-0 ${side} sm:left-0 w-64 h-screen bg-gray-200 z-10 transition-all`}
    >
      <i
        className="bi bi-x-lg absolute top-4 right-4 sm:hidden block cursor-pointer text-lg"
        onClick={closeSidebar}
      ></i>

      <ul className="mt-4">
        <li className="px-4 cursor-pointer transition-all py-3 text-black font-bold flex items-center hover:bg-gray-600 hover:text-white">
          <i className="bi bi-speedometer mr-2 inline-block text-lg"></i>{" "}
          <Link to="/dashboard" className="text-base uppercase">
            Thống kê
          </Link>
        </li>
        <li className="px-4 cursor-pointer transition-all py-3 text-black font-bold flex items-center hover:bg-gray-600 hover:text-white">
          <i className="bi bi-card-list mr-2 inline-block text-lg"></i>
          <Link to="/dashboard/products" className="text-base uppercase">
            Quản lý sản phẩm
          </Link>
        </li>
        <li className="px-4 cursor-pointer transition-all py-3 text-black font-bold flex items-center hover:bg-gray-600 hover:text-white">
          <i className="bi bi-bag-check mr-2 inline-block text-lg"></i>
          <Link to="/dashboard/orders" className="text-base uppercase">
            Quản lý đơn hàng
          </Link>
        </li>
        <li className="px-4 cursor-pointer transition-all py-3 text-black font-bold flex items-center hover:bg-gray-600 hover:text-white">
          <i className="bi bi-person mr-2 inline-block text-lg"></i>
          <Link to="/dashboard/customers" className="text-base uppercase">
            Quản lý tài khoản
          </Link>
        </li>
        <li className="px-4 cursor-pointer transition-all py-3 text-black font-bold flex items-center hover:bg-gray-600 hover:text-white">
          <i className="bi bi-bar-chart mr-2 inline-block text-lg"></i>
          <Link to="/dashboard/categories" className="text-base uppercase">
            Quản lý danh mục
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
