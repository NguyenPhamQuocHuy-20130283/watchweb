'use client';

interface FilterTag {
  id: string;
  label: string;
  type: 'category' | 'price' | 'size' | 'color' | 'brand';
}

interface FilterTagsProps {
  filters: FilterTag[];
  onRemove: (id: string) => void;
  onClearAll: () => void;
}

export default function FilterTags({ filters, onRemove, onClearAll }: FilterTagsProps) {
  if (filters.length === 0) return null;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-gray-800">Active Filters:</h3>
        <button
          onClick={onClearAll}
          className="text-sm text-red-500 hover:text-red-600 font-semibold"
        >
          Clear All
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {filters.map(filter => (
          <div
            key={filter.id}
            className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm"
          >
            <span className="text-gray-700">{filter.label}</span>
            <button
              onClick={() => onRemove(filter.id)}
              className="text-gray-500 hover:text-red-500 font-bold"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}