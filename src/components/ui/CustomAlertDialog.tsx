'use client';

import { useState, ReactNode } from 'react';

interface AlertDialogProps {
  children: ReactNode; // Component kích hoạt (trigger), ví dụ: một cái nút
  title: string;
  description: string;
  onConfirm: () => void;
}

export default function CustomAlertDialog({ children, title, description, onConfirm }: AlertDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleConfirm = () => {
    onConfirm();
    setIsOpen(false);
  };

  return (
    <>
      {/* Trigger: Khi click sẽ mở hộp thoại */}
      <div onClick={() => setIsOpen(true)}>
        {children}
      </div>

      {/* Modal: Chỉ hiển thị khi isOpen là true */}
      {isOpen && (
        // Lớp phủ (Overlay)
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in-0">
          
          {/* Nội dung hộp thoại */}
          <div className="relative w-full max-w-lg m-4 bg-white rounded-lg shadow-xl border transition-all animate-in zoom-in-95">
            <div className="flex flex-col space-y-2 p-6">
              {/* Tiêu đề và Mô tả */}
              <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
            
            {/* Các nút hành động */}
            <div className="bg-gray-50 px-6 py-4 flex flex-row-reverse gap-3 rounded-b-lg">
              <button
                onClick={handleConfirm}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 bg-red-600 text-white hover:bg-red-700"
              >
                Continue
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 border bg-white hover:bg-gray-100"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}