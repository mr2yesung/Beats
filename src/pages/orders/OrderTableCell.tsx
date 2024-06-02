type OrderTableCellProps = {
  className?: string;
  children: React.ReactNode;
};

function OrderTableCell({ className = "", children }: OrderTableCellProps) {
  return <td className={`px-4 py-3 text-left ${className}`}>{children}</td>;
}

export default OrderTableCell;
