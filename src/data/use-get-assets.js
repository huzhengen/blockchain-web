import useRequest from './use-request'

export default function useGetAssets (configs = {}) {
  const { data, error } = useRequest({
    method: 'GET',
    url: 'assets'
  }, { ...configs })
  const loading = !data && !error
  return {
    data, error, loading
  }
}