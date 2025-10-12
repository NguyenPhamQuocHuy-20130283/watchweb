interface CartProgressProps {
  currentAmount: number;
  targetAmount: number;
}

export default function CartProgress({ currentAmount, targetAmount }: CartProgressProps) {
  const progress = Math.min((currentAmount / targetAmount) * 100, 100);
  const remaining = Math.max(targetAmount - currentAmount, 0);

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-4 mb-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold text-gray-700">
          {remaining > 0 ? (
            <>🎯 Add ${remaining} more for free shipping!</>
          ) : (
            <>🎉 You've qualified for free shipping!</>
          )}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="flex justify-between text-xs text-gray-600 mt-2">
        <span>${currentAmount}</span>
        <span>${targetAmount}</span>
      </div>
    </div>
  );
}