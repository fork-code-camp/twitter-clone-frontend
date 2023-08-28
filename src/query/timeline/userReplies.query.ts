import { getUserRepliesTweets, getUserTweets } from "@/services/timelineService/timelineService";
import { useInfiniteQuery } from "react-query";

export const useGetUserRepliesQuery = () => {
  return useInfiniteQuery({
    queryKey: 'userReplies',
    queryFn: ({ pageParam = 0 }) => getUserRepliesTweets(pageParam),
    getNextPageParam: (lastPage: any, pages: any) => {
      if (lastPage.length === 5) {
        return pages.length
      } else {
        return false
      }
    },
    onError(error) {
      console.error('useGetUserRepliesQuery error', error)
    },
  })
}