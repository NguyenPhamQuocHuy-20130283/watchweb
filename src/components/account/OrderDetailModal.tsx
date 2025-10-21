import {
  X,
  Package,
  Calendar,
  DollarSign,
  MapPin,
  CreditCard,
} from "lucide-react";
import { Order } from "./OrderListItem"; // Import lại Order type

interface OrderDetailModalProps {
  order: Order | null;
  onClose: () => void;
}

export default function OrderDetailModal({
  order,
  onClose,
}: OrderDetailModalProps) {
  if (!order) return null;

  return (
    // Lớp phủ (Overlay)
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in-0"
      onClick={onClose}
    >
      {/* Nội dung Modal - Ngăn chặn sự kiện click lan ra overlay */}
      <div
        className="relative w-full max-w-2xl m-4 bg-white rounded-lg shadow-xl border transition-all animate-in zoom-in-95 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Modal */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">
            Order Details #{order.id}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        {/* Body Modal (cho phép cuộn) */}
        <div className="p-6 space-y-6 overflow-y-auto">
          {/* Thông tin chung */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-gray-500 mb-1">Order Date</p>
              <p className="font-medium text-gray-800 flex items-center gap-1">
                <Calendar size={14} /> {order.date}
              </p>
            </div>
            <div>
              <p className="text-gray-500 mb-1">Total Amount</p>
              <p className="font-medium text-gray-800 flex items-center gap-1">
                <DollarSign size={14} /> ${order.total.toFixed(2)}
              </p>
            </div>
            <div>
              <p className="text-gray-500 mb-1">Status</p>
              <p
                className={`font-medium flex items-center gap-1 ${
                  order.status === "Delivered"
                    ? "text-green-700"
                    : order.status === "Processing"
                    ? "text-blue-700"
                    : order.status === "Cancelled"
                    ? "text-red-700"
                    : "text-gray-700"
                }`}
              >
                <Package size={14} /> {order.status}
              </p>
            </div>
          </div>

          {/* Danh sách sản phẩm */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Items Ordered</h3>
            <div className="space-y-3">
              {order.items.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start border-b pb-3 last:border-b-0 last:pb-0"
                >
                  {/* Có thể thêm ảnh sản phẩm nếu có */}
                  {/* <img src={item.image || '/placeholder.png'} alt={item.name} className="w-16 h-16 rounded object-cover border"/> */}
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      Quantity: {item.qty}
                    </p>
                    {/* Có thể thêm giá từng sản phẩm */}
                    {/* {item.price && <p className="text-sm text-gray-500">Price: ${item.price.toFixed(2)}</p>} */}
                  </div>
                  {/* Giá * số lượng */}
                  {/* {item.price && <p className="font-medium text-gray-800">${(item.price * item.qty).toFixed(2)}</p>} */}
                </div>
              ))}
            </div>
          </div>

          {/* Thông tin Giao hàng & Thanh toán (Giả lập) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-1">
                <MapPin size={16} /> Shipping Address
              </h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p>John Doe</p>
                <p>123 Main Street</p>
                <p>Anytown, CA 90210</p>
                <p>United States</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-1">
                <CreditCard size={16} /> Payment Method
              </h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p>Visa ending in 1234</p>
                {/* Có thể thêm thông tin billing address nếu khác */}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Modal (nếu cần nút hành động) */}
        {/* <div className="bg-gray-50 px-6 py-4 flex flex-row-reverse rounded-b-lg">
           <button onClick={onClose} className="button-secondary">Close</button>
        </div> */}
        <div className="bg-gray-50 px-6 py-4 flex flex-row-reverse rounded-b-lg">
          <button onClick={onClose} className="button-secondary">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
