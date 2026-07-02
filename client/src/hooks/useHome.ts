import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/api'
import { queryKeys } from '@/lib/queryKeys'
import type { HomeContent } from '@/types/api'

export function useHome() {
  return useQuery({
    queryKey: queryKeys.home,
    queryFn: async () => {
      const { data } = await api.get<HomeContent>('/home')
      return data
    },
  })
}
