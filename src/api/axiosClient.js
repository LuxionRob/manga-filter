import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.jikan.moe/v4',
  timeout: 1000,
})

export const getMangaFullById = async (path, options = {}) => {
  try {
    const res = await instance.get(`manga/${path}`, {
      params: {
        ...options,
      },
    })
    return res
  } catch (err) {
    return Promise.reject(new Error('getMangaById failed'))
  }
}

export const getManga = async () => {
  try {
    const res = await instance.get('manga')
    return res
  } catch (error) {
    return Promise.reject(new Error('Get invalid'))
  }
}

export const searchManga = async (
  q,
  limit = 24,
  status,
  genres,
  genres_exclude,
  order_by,
  sort,
) => {
  try {
    console.log(q, limit, status, genres, genres_exclude, order_by, sort)
    if (!q) return Promise.resolve()
    const res = await instance.get(
      `manga?q=${q}&limit=${limit}&status=${status}&genres=${genres}&genres_exclude=${genres_exclude}&order_by=${order_by}&sort=${sort}`,
    )
    return res
  } catch (error) {
    return Promise.reject(new Error('Search input invalid'))
  }
}

export const getMangaGenres = async () => {
  try {
    const res = await instance.get('genres/manga')
    return res
  } catch {
    return Promise.reject(new Error('Failed on getMangaGenres'))
  }
}

export default instance
