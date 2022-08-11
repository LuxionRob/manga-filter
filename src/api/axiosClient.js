import axios from 'axios'

const PAGES_LIMIT = 24
const SFW_CONTENT = true

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
    const queryParams = {
      limit: PAGES_LIMIT,
      sfw: SFW_CONTENT,
      ...(q && { q }),
      ...(status && { status }),
      ...(genres && { genres }),
      ...(genres_exclude && { genres_exclude }),
      ...(sort && { sort }),
      ...(page && { page }),
      ...(order_by && { order_by }),
    }
    const res = await instance.get('manga', {
      params: queryParams
    })
    console.log(res)
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
