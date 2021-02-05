import axios from 'axios'

export const getHotMoves = () => {
  return axios.get('/api/movie/hot');
}