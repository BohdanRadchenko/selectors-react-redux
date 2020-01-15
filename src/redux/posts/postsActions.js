export const ActionsType = {
  FETCH_POSTS: 'FETCH_POSTS',
  CHANGE_TAG: 'CHANGE_TAG',
  DELETE_POST : 'DELETE_POST'
}

export const fetchPosts = (posts) => ({
  type: ActionsType.FETCH_POSTS,
  payload: posts
});

export const changeTag = (teg) => ({
  type: ActionsType.CHANGE_TAG,
  payload: teg
})


export const deletePost = id => ({
  type: ActionsType.DELETE_POST,
  payload : id
})