import { getUserTweets } from "@/services/timelineService/timelineService";
import { useInfiniteQuery } from "react-query";

export const useGetUserTweetsQuery = () => {
  return useInfiniteQuery({
    queryKey: 'userTweets',
    queryFn: ({ pageParam = 0 }) => getUserTweets(pageParam),
    getNextPageParam: (lastPage: any, pages: any) => {
      if (lastPage.length === 5) {
        return pages.length
      } else {
        return false
      }
    },
    onError(error) {
      console.error('useGetUserTweetsQuery error', error)
    },
  })
}