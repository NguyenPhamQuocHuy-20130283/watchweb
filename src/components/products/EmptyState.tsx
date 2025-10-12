interface EmptyStateProps {
  onClearFilters?: () => void;
}

export default function EmptyState({ onClearFilters }: EmptyStateProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-12 text-center">
      <div className="text-6xl mb-4">🔍</div>
      <h3 className="text-2xl font-bold text-gray-800 mb-2">No Products Found</h3>
      <p className="text-gray-600 mb-6">
        We couldn't find any products matching your filters. Try adjusting your search criteria.
      </p>
      {onClearFilters && (
        <button 
          onClick={onClearFilters}
          className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors font-semibold"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );
}