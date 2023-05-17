// Create Redux action types
export const GET_POSTS = 'GET_POSTS'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'

// Create Redux action creators that return an action
export const getPosts = () => ({
    type: GET_POSTS,
})
  
export const getPostsSuccess = (posts) => ({
    type: GET_POSTS_SUCCESS,
    payload: posts,
})
  
export const getPostsFailure = () => ({
    type: GET_POSTS_FAILURE,
})

// Combine them all in an asynchronous thunk

// Make the asynchronous thunk action that combines all three of the above actions. When called, 
// it will dispatch the initial getPosts() action to inform Redux to prepare for an API call, then
// in a try/catch, do everything necessary to get the data, and dispatch a success or failure action as necessary.
export function fetchPosts() {
    return async (dispatch) => {
      dispatch(getPosts())
  
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
  
        dispatch(getPostsSuccess(data))
      } catch (error) {
        dispatch(getPostsFailure())
      }
    }
  }