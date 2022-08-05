import DefaultLayout from '../../assets/layouts/defaultLayout'
import { useEffect, useState } from 'react'
import { searchManga, getMangaGenres } from '../../api/axiosClient'
import './style.css'
import Card from '../../components/card'

const FilterPage = () => {
  const [mangaList, setMangaList] = useState([])
  const [genres, setGenres] = useState([])

  const fetchMangaList = async () => {
    try {
      const res = await searchManga('naruto')
      setMangaList(res.data.data)
      return Promise.resolve()
    } catch {
      return Promise.reject(new Error('Failed to search manga'))
    }
  }

  const fetchGenres = async () => {
    try {
      const res = await getMangaGenres()
      setGenres(res.data.data)
      return res
    } catch {
      return Promise.reject()
    }
  }

  useEffect(() => {
    fetchMangaList().then()
    fetchGenres().then()
    console.log(mangaList)
  }, [])
  return (
    <DefaultLayout>
      <div className="flex nowrap px-64 pt-16">
        <div className="flex basis-2/3 flex-wrap justify-evenly">
          {mangaList.map(manga => (
            <Card key={manga.mal_id} item={manga} className="w-1/7"/>
          ))}
        </div>
        <div className="flex flex-col basis-4/12 ml-8">
          <div className="span text-3xl text-bold text-white mb-4 ">Genre</div>
          <div className="genres-container flex flex-wrap  border border-solid border-slate-100 p-2">
            {genres.map(genre => (
              <a
                href={genre.url}
                key={genre.mal_id}
                className="text-white basis-1/2 text-xl mb-2 pb-1 border-b border-solid border-b-white hover:tracking-wide"
              >
                {genre.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default FilterPage
