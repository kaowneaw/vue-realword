import firebase from 'firebase'
import Auth from './auth'

const list = (callback) => {
  firebase.database().ref('post').on('value', (snapshots) => {
    const result = []
    snapshots.forEach((snapshot) => {
      result.push(snapshot.val())
    })
    callback(result.reverse())
  })
}

const post = (content) => {
  return firebase.database().ref('post').push({
    content,
    owner: Auth.getCurrentUser().uid,
    timestamp: firebase.database.ServerValue.TIMESTAMP
  })
}

export default {
  list,
  post
}
