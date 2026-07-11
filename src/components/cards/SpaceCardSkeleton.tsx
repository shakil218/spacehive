export default function SpaceCardSkeleton() {
  return (
    <div className="card bg-base-100 border border-base-300 rounded-2xl overflow-hidden h-full">
      <div className="h-44 w-full skeleton rounded-none" />
      <div className="card-body p-4 gap-2">
        <div className="skeleton h-4 w-16 rounded-full" />
        <div className="skeleton h-4 w-3/4" />
        <div className="skeleton h-3 w-full" />
        <div className="skeleton h-3 w-2/3" />
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-base-200">
          <div className="skeleton h-4 w-12" />
          <div className="skeleton h-8 w-24 rounded-full" />
        </div>
      </div>
    </div>
  );
}