import useSWR from 'swr'
import axios from 'axios'

const { request: $request } = axios.create({
  baseURL: 'https://api.coincap.io/v2'
})

export default function useRequest(request, { initialData, ...config } = {}) {
  return useSWR(
    request && JSON.stringify(request),
    () => $request(request || {}).then(response => response.data),
    {
      ...config,
      initialData: initialData && {
        status: 200,
        statusText: 'InitialData',
        headers: {},
        data: initialData
      }
    }
  )
}
