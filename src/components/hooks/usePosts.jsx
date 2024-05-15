import { useMemo } from "react"
 
export const useSorterPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if (sort) {
          return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts
      }, [sort, posts])
      
      return sortedPosts
}


export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSorterPosts(posts, sort)
    const sorterAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query))
      }, [query, sortedPosts]) 

      return sorterAndSearchedPosts
}