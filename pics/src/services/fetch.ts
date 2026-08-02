import axios from 'axios'

const searchImages = async (keyword: string) => {
  const url = 'https://api.unsplash.com/search/photos'
  const response = await axios.get(url, {
    headers: {
      Authorization: import.meta.env.VITE_UNSPLASH_API_KEY
    },
    params: {
      query: keyword
    }
  })
  console.log(response)
  return response.data.results
}

export default searchImages