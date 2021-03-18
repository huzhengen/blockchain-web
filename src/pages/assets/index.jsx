import AssetCard from '@/components/asset-card'
import useGetAssets from '@/data/use-get-assets'

export default function Index () {
  const { data } = useGetAssets({ refreshInterval: 10000 })
  return (
    <div className="container h-full mx-auto p-5 pt-10 grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
      {data?.data?.map(item => <AssetCard key={item.id} item={item} />)}
    </div>
  )
}