import DefaultLayout from '../../assets/layouts/defaultLayout'
import React, { useEffect, useState } from 'react'
import { searchManga, getMangaGenres, getManga } from '../../api/axiosClient'
import { Select, Tag, Radio, Space, Pagination } from 'antd'
import Card from '../../components/card'
import './style.css'

const { Option } = Select
const { Group, Button } = Radio
const statusList = ['publishing', 'complete', 'hiatus', 'discontinued', 'upcoming']

const FilterPage = () => {
  const [mangaList, setMangaList] = useState({})
  const [genres, setGenres] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [filterGenre, setFilterGenre] = useState([])
  const [excludeGenre, setExcludeGenre] = useState([])
  const [status, setStatus] = useState('')
  const [orderBy, setOrderBy] = useState('')
  const [sort, setSort] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const fetchGenres = async () => {
    try {
      setIsLoading(true)
      const res = await getMangaGenres()
      setGenres(res.data.data)
      setIsLoading(false)
      return res
    } catch (error) {
      setIsLoading(false)
      console.warn('Get genres failed')
    }
  }

  const fetchManga = async () => {
    try {
      setIsLoading(true)
      const res = await getManga()
      setMangaList({ [currentPage]: res.data.data })
      setIsLoading(false)
      return res
    } catch (error) {
      setIsLoading(false)
      console.warn('First get failed')
    }
  }

  const tagRender = ({ label, value, closable, onClose }) => {
    const onPreventMouseDown = (event) => {
      event.preventDefault()
      event.stopPropagation()
    }

    return (
      <Tag
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        className="mr-1 capitalize"
      >
        {label}
      </Tag>
    )
  }

  const onIncludeGenreChange = (_, genres) => {
    const genreKey = genres.map((genre) => Number(genre.key))
    setFilterGenre(genreKey)
  }

  const onExcludeGenreChange = (_, genres) => {
    const genreKey = genres.map((genre) => Number(genre.key))
    setExcludeGenre(genreKey)
  }

  const onStatusChange = (e) => {
    setStatus(e)
  }

  const onPropertyChange = (e) => {
    setOrderBy(e.target.value)
  }

  const onSortChange = (e) => {
    setSort(e.target.value)
  }

  const fetchMangaList = async () => {
    try {
      setIsLoading(true)
      const includeGenreParam = filterGenre.join(',')
      const excludeGenreParam = excludeGenre.join(',')
      const searchParams = new URLSearchParams(window.location.search)
      const name = searchParams.get('q')

      const res = await searchManga(
        name,
        status,
        includeGenreParam,
        excludeGenreParam,
        orderBy,
        sort,
        currentPage,
      )

      if (!Object.keys(mangaList).includes(currentPage.toString())) {
        setMangaList({ ...mangaList, [currentPage]: res.data.data })
      }
      setIsLoading(false)
      return Promise.resolve()
    } catch (error) {
      setIsLoading(false)
      if (!(error?.response.status === 429)) console.warn('Get genres failed')
    }
  }

  const onSearch = () => {
    fetchMangaList()
  }

  const onPaginationChange = (page) => {
    setCurrentPage(page)
    fetchMangaList()
  }

  useEffect(() => {
    fetchGenres()
    fetchManga()
  }, [])

  return (
    <DefaultLayout>
      <div className="flex flex-col pt-16 mx-64 bg-gray-700 nowrap">
        <div className="flex flex-col items-center advanced-filter">
          <h1 className="mb-8 text-3xl text-white">Genre</h1>
          <div className="flex justify-around w-full mb-8">
            <Select
              showSearch
              placeholder="Genre include"
              mode="multiple"
              showArrow
              maxTagCount={3}
              tagRender={tagRender}
              loading={isLoading}
              className="w-1/3"
              onChange={onIncludeGenreChange}
            >
              {genres.map((genre) => (
                <Option key={genre.mal_id} value={genre.name}>
                  {genre.name}
                </Option>
              ))}
            </Select>
            <Select
              showSearch
              placeholder="Genre exclude"
              mode="multiple"
              showArrow
              maxTagCount={3}
              tagRender={tagRender}
              loading={isLoading}
              className="w-1/3"
              onChange={onExcludeGenreChange}
            >
              {genres.map((genre) => (
                <Option key={genre.mal_id} value={genre.name}>
                  {genre.name}
                </Option>
              ))}
            </Select>
          </div>
          <div className="mb-8">
            <Select
              placeholder="Status"
              showArrow
              maxTagCount={1}
              loading={isLoading}
              className="w-48 capitalize"
              onChange={onStatusChange}
            >
              {statusList.map((status, key) => (
                <Option key={key + 1} value={status} className="capitalize">
                  {status}
                </Option>
              ))}
            </Select>
          </div>
          <div className="relative flex justify-center w-full mb-8">
            <span className="absolute top-0 bottom-0 text-2xl text-white left-16">Order by:</span>
            <Space direction="horizontal">
              <Group optionType="button" buttonStyle="solid" onChange={onPropertyChange}>
                <Button value="rank">Rank</Button>
                <Button value="start_date">Update</Button>
                <Button value="chapters">Chapters</Button>
                <Button value="favorites">Favorites</Button>
              </Group>

              <Group optionType="button" buttonStyle="solid" onChange={onSortChange}>
                <Button value="asc">Ascend</Button>
                <Button value="desc">Descend</Button>
              </Group>
            </Space>
          </div>
          <div className="relative flex justify-center w-full">
            <button
              type="button"
              className="px-4 mb-32 text-lg cursor-pointer search_button"
              onClick={onSearch}
            >
              Search
            </button>
          </div>
        </div>
        <div className="flex justify-center pb-16">
          <Pagination
            current={currentPage}
            total={50}
            defaultPageSize={24}
            onChange={onPaginationChange}
          />
        </div>
        <div className="flex flex-wrap basis-2/3 justify-evenly">
          {mangaList[currentPage]?.map((manga) => (
            <Card key={manga.mal_id} item={manga} className="w-1/7" />
          ))}
        </div>
        <div className="flex justify-center pb-16">
          <Pagination
            current={currentPage}
            total={50}
            defaultPageSize={24}
            onChange={onPaginationChange}
          />
        </div>
      </div>
    </DefaultLayout>
  )
}

export default FilterPage
