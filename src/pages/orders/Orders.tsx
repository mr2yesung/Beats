import Loading from "@/components/Loading";
import PaginationComponent from "@/components/PaginationComponent";
import { useOrders } from "@/hooks/useOrders";
import { useState } from "react";
import OrderRow from "./OrderRow";

const itemsPerPage = 5;
const orderTableColumns = ["Order", "Date", "Item(s)", "Total", "Status"];

function Orders() {
  const { orders, isLoading } = useOrders();
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl font-bold md:text-3xl">My Orders</h1>
      </div>

      {isLoading ? (
        <Loading className="max-h-[600px]" />
      ) : orders && orders.length > 0 ? (
        <>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-primary/10">
                  {orderTableColumns.map((column) => (
                    <th
                      key={column}
                      className="px-4 py-3 text-left font-medium text-foreground/80"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {orders
                  .slice(
                    (currentPage - 1) * itemsPerPage,
                    currentPage * itemsPerPage,
                  )
                  .map((order) => (
                    <OrderRow key={order.orderId} {...order} />
                  ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex justify-center">
            <PaginationComponent
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              maxPage={Math.ceil(orders.length / itemsPerPage)}
            />
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center text-lg">
          No orders found
        </div>
      )}
    </div>
  );
}

export default Orders;
