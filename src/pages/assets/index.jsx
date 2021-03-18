import AssetCard from '@/components/asset-card'
import SkeletonCard from '@/components/skeleton-card'
import useGetAssets from '@/data/use-get-assets'

export default function Index () {
  const { data, loading } = useGetAssets({ refreshInterval: 1000 })
  if (loading) {
    return (
      <div className="container h-full mx-auto p-5 grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {new Array(50).fill(undefined).map((_o, i) => i).map(i => <SkeletonCard key={i} />)}
      </div>
    )
  }
  return (
    <div className="container h-full mx-auto p-5 grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
      {data?.data?.map(item => <AssetCard key={item.id} item={item} />)}
    </div>
  )
}