import { useEffect } from "react";

const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  title = "تأكيد العملية",
  message = "هل أنت متأكد أنك تريد تنفيذ هذا الإجراء؟",
}) => {
  // قفل بالـ ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />

      {/* Modal */}
      <div className="relative bg-white w-[90%] max-w-md rounded-2xl shadow-xl p-6 animate-fadeIn">
        <h2 className="text-xl font-bold mb-3 text-gray-800">{title}</h2>
        <p className="text-gray-600 mb-6">{message}</p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition"
          >
            إلغاء
          </button>

          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="px-4 py-2 rounded-md bg-primary text-red-500 border-red-300 border hover:opacity-90 transition"
          >
            تأكيد
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;