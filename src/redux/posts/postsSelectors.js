import {createSelector} from 'redux'
export const getAllPosts = state => state.posts.items;

export const getSelectedTag = state => state.posts.teg;

export const getPostsWithSelectedTag = createSelector(
  [getAllPosts, getSelectedTag], (posts, tag) => tag === 'all'  ? posts : posts.filter(pos => pos.tag === tag),
)

// export const getPostsWithSelectedTag = state => {
//   const posts = getAllPosts(state);
//   const tag = getSelectedTag(state);
//
//   return   tag === 'all'  ? posts : posts.filter(pos => pos.tag === tag)
// };