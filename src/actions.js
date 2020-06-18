import axios from 'axios'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'
export const SUMMONER = 'SUMMONER'
export const MATCHLIST = 'MATCHLIST'
export const TIMELINE = 'TIMELINE'
export const MATCHDETAIL = 'MATCHDETAIL'
const api_key = "RGAPI-1f334a03-1de1-4b92-8b58-322a00b3cbb9"

function recieveSummoner(response) {
  return {
    type: SUMMONER,
    data: response.data
  }
}
function receiveMatchList(response) {
  return {
    type: MATCHLIST,
    data: response.data
  }
}
function receiveTimeline(responses) {
  var timelineData = responses.map(element => element.data.frames)
  return {
    type: TIMELINE,
    data: timelineData
  }
}
export function fetchMatchList(id, url){
  var matchListURL = `https://${url}/lol/match/v4/matchlists/by-account/${id}`
  return dispatch => {
    return axios.get(matchListURL, {
      params: {
        api_key: api_key
      }
    })
      .then(response => {
        dispatch(receiveMatchList(response))
        var timelinePromises = []
        var detailPromises = []

        for (var i = 0; i < 20; i++) {
          var element = response.data.matches[i]
          // only see ranked solo games
          if(element.queue === 420){
            var timelineURL = `https://${url}/lol/match/v4/timelines/by-match/${element.gameId}`
            var detailURL = `https://${url}/lol/match/v4/matches/${element.gameId}`
            var promise = axios.get(timelineURL, {params: {api_key: api_key}})
            timelinePromises.push(promise)
          }
        } 

        Promise.all(timelinePromises).then(responses =>{
          dispatch(receiveTimeline(responses))
        })
      })
  }
}
export function fetchSummoner(name, url){
  var summonerv4URL = `https://${url}/lol/summoner/v4/summoners/by-name/${name}`
  return dispatch => {
    return axios.get(summonerv4URL, {
      params: {
        api_key: api_key
      }
    })
      .then(response => {
        dispatch(fetchMatchList(response.data.accountId, url))
        dispatch(recieveSummoner(response))
      })
  }
}

export function selectSubreddit(subreddit) {
  return {
    type: SELECT_SUBREDDIT,
    subreddit
  }
}

export function invalidateSubreddit(subreddit) {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit
  }
}

function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}

function receivePosts(subreddit, response) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: response.data.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

function fetchPosts(subreddit) {
  return dispatch => {
    dispatch(requestPosts(subreddit))
    return axios.get(`https://www.reddit.com/r/${subreddit}.json`)
      .then(response => dispatch(receivePosts(subreddit, response)))
  }
}


function shouldFetchPosts(state, subreddit) {
  const posts = state.postsBySubreddit[subreddit]
  if (!posts) {
    return true
  } else if (posts.isFetching) {
    return false
  } else {
    return posts.didInvalidate
  }
}

export function fetchPostsIfNeeded(subreddit) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), subreddit)) {
      return dispatch(fetchPosts(subreddit))
    }
  }
}