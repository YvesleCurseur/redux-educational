import { combineReducers } from 'redux'

import postsReducer from './postsReducer'
import commentsReducer from './commentsReducer'
import postReducer from './postReducer'

const rootReducer = combineReducers({
  post: postReducer,
  posts: postsReducer,
  comments: commentsReducer
})

export default rootReducer