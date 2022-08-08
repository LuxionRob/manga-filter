import axios from 'axios'

const PAGES_LIMIT = 24

const instance = axios.create({
  baseURL: 'https://api.jikan.moe/v4',
  timeout: 10000,
})

export const getMangaFullById = async (path, options = {}) => {
  try {
    const res = await instance.get(`manga/${path}`, {
      params: {
        ...options,
      },
    })
    return res
  } catch (error) {
    if (error?.response) {
      if (error.response.status === 429) {
        console.warn('Too many request')
      }
    }
  }
}

export const getManga = async () => {
  try {
    const res = await instance.get('manga', {
      params: {
        limit: PAGES_LIMIT,
      },
    })
    return res
  } catch (error) {
    if (error?.response) {
      if (error.response.status === 429) {
        console.warn('Too many request')
      }
    }
  }
}

export const searchManga = async (q, status, genres, genres_exclude, order_by, sort, page) => {
  try {
    const res = await instance.get('manga', {
      params: {
        limit: PAGES_LIMIT,
        q,
        status,
        genres,
        genres_exclude,
        order_by,
        sort,
        sfw: true,
        page,
      },
    })

    return res
  } catch (error) {
    if (error?.response) {
      if (error.response.status === 429) {
        console.warn('Too many request')
      }
    }
  }
}

export const getMangaGenres = async () => {
  try {
    const res = await instance.get('genres/manga')
    return res
  } catch (error) {
    if (error?.response) {
      if (error.response.status === 429) {
        console.warn('Too many request')
      }
    }
  }
}

export default instance
