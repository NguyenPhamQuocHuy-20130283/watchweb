import { Package, Calendar, DollarSign, ChevronRight } from "lucide-react";

// Định nghĩa kiểu dữ liệu cho Order (có thể tạo file types riêng)
export interface Order {
  id: string;
  date: string;
  status: "Delivered" | "Processing" | "Cancelled" | string; // Mở rộng nếu có trạng thái khác
  total: number;
  items: { name: string; qty: number; image?: string; price?: number }[];
}

interface OrderListItemProps {
  order: Order;
  onViewDetails: (order: Order) => void; // Callback để mở modal
}

export default function OrderListItem({
  order,
  onViewDetails,
}: OrderListItemProps) {
  const statusClasses = {
    Delivered: "bg-green-100 text-green-700",
    Processing: "bg-blue-100 text-blue-700",
    Cancelled: "bg-red-100 text-red-700",
    Default: "bg-gray-100 text-gray-700",
  };
  const statusStyle =
    statusClasses[order.status as keyof typeof statusClasses] ||
    statusClasses.Default;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow border flex flex-col sm:flex-row sm:items-center sm:justify-between">
      {/* Thông tin chính */}
      <div className="flex-1 mb-4 sm:mb-0">
        <div className="flex items-center gap-2 mb-2">
          <Package size={18} className="text-gray-600" />
          <span className="font-bold text-gray-800">Order #{order.id}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
          <Calendar size={14} />
          <span>Placed on {order.date}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <DollarSign size={14} />
          <span>Total: ${order.total.toFixed(2)}</span>
        </div>
        {/* Hiển thị tóm tắt sản phẩm đầu tiên */}
        {order.items.length > 0 && (
          <p className="text-sm mt-2 text-gray-600 truncate">
            {order.items[0].name}{" "}
            {order.items.length > 1
              ? `and ${order.items.length - 1} more...`
              : ""}
          </p>
        )}
      </div>

      {/* Trạng thái và Xem chi tiết */}
      <div className="flex items-center justify-between sm:justify-end sm:flex-col sm:items-end gap-2">
        <span
          className={`text-xs font-semibold px-2 py-1 rounded-full ${statusStyle}`}
        >
          {order.status}
        </span>
        {/* Nút này sẽ gọi hàm onViewDetails */}
        <button
          onClick={() => onViewDetails(order)}
          className="flex items-center text-sm text-red-500 hover:text-red-700 font-semibold mt-2"
        >
          View Details <ChevronRight size={16} className="ml-1" />
        </button>
      </div>
    </div>
  );
}
