import { useEffect } from 'react'
import cx from 'classnames'
import usePrevious from '@/hooks/use-previous'

export default function AssetCard ({ item }) {
  const prevItem = usePrevious(item)
  useEffect(() => {
    if (prevItem && prevItem.priceUsd !== item.priceUsd) {
      console.log(prevItem, item)
    }
  }, [item, prevItem])
  return (
    <div className="shadow cursor-pointer bg-white rounded p-2 flex flex-row">
      <div className="flex flex-col flex-1">
        <span className="text-sm font-light flex items-center overflow-ellipsis overflow-hidden">
          <img
            className="w-4 h-4 mr-1"
            src={`https://static.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`}
            alt={item.symbol}
            onError={evt => {
              evt.target.src = 'https://coincap.io/static/logo_mark.png';
            }}
          />
          {item.name}
        </span>
        <span className="text-sm font-medium">当前价格: ${(+item.priceUsd).toFixed(2)}</span>
        {/* <span className="text-sm">
          总市值: ${(+item.marketCapUsd).toFixed(2)}
        </span> */}
        <span
          className={cx('text-xs font-light', {
            'text-red-500': (+item.changePercent24Hr) > 0,
            'text-green-500': (+item.changePercent24Hr) < 0
          })}
        > 
          {(item.priceUsd - item.vwap24Hr).toFixed(2)}
          {' '}
          (
            {(+item.changePercent24Hr).toFixed(2)}%
            {(+item.changePercent24Hr) > 0 && <span className="text-red-500">↑</span>}
            {(+item.changePercent24Hr) < 0 && <span className="text-green-500">↓</span>}
          )
        </span>
      </div>
    </div>
  )
}