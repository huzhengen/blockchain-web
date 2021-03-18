export default function SkeletonCard () {
  return (
    <div className="shadow cursor-pointer bg-white rounded p-2 flex flex-col">
      <div className="h-4 w-12 rounded-sm bg-gray-200 animate-pulse mb-1" />
      <div className="h-4 w-full rounded-sm bg-gray-200 animate-pulse mb-1" />
      <div className="h-4 w-32 rounded-sm bg-gray-200 animate-pulse" />
    </div>
  )
}