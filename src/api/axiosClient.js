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
    const res = await instance.get('manga', {
      params: {
        limit: 24,
      },
    })
    return res
  } catch (error) {
    return Promise.reject(new Error('Get invalid'))
  }
}

export const searchManga = async (q, status, genres, genres_exclude, order_by, sort) => {
  try {
    const res = await instance.get('manga', {
      params: {
        limit: 24,
        q,
        status,
        genres,
        genres_exclude,
        order_by,
        sort,
        sfw: true,
      },
    })
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
