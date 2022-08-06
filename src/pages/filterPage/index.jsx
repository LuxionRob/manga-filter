import DefaultLayout from '../../assets/layouts/defaultLayout'
import React, { useEffect, useState } from 'react'
import { searchManga, getMangaGenres } from '../../api/axiosClient'
import { Select, Tag, Radio, Space } from 'antd'
import Card from '../../components/card'

const { Option } = Select
const { Group, Button } = Radio
const statusList = ['publishing', 'complete', 'hiatus', 'discontinued', 'upcoming']
const filterProperty = {
  Update: 'start_date',
  Rank: 'rank',
  Chapters: 'chapters',
  Favorites: 'favorites',
}

const FilterPage = () => {
  const [mangaList, setMangaList] = useState([])
  const [genres, setGenres] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [fileterGenre, setFilterGenre] = useState([])
  const [excludeGenre, setExcludeGenre] = useState([])
  const [status, setStatus] = useState('')
  const [currentFilterProperty, setCurrentFilterProperty] = useState('')
  const [orderBy, setOrderBy] = useState('desc')

  const fetchMangaList = async () => {
    try {
      setIsLoading(true)
      const res = await searchManga('naruto')
      setMangaList(res.data.data)
      setIsLoading(false)
      return Promise.resolve()
    } catch {
      setIsLoading(false)
      return Promise.reject(new Error('Failed to search manga'))
    }
  }

  const fetchGenres = async () => {
    try {
      setIsLoading(true)
      const res = await getMangaGenres()
      setGenres(res.data.data)
      setIsLoading(false)
      return res
    } catch {
      setIsLoading(false)
      return Promise.reject(new Error('Failed to get genres'))
    }
  }

  useEffect(() => {
    fetchMangaList().then()
    fetchGenres().then()
  }, [])

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
    setCurrentFilterProperty(e.target.value)
  }
  const onSortChange = (e) => {
    setOrderBy(e.target.value)
  }
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
              mode="multiple"
              showArrow
              maxTagCount={1}
              tagRender={tagRender}
              loading={isLoading}
              className="w-48 rounded"
              onChange={onStatusChange}
            >
              {statusList.map((status, key) => (
                <Option key={key + 1} value={status} className="capitalize">
                  {status}
                </Option>
              ))}
            </Select>
          </div>
          <div className="relative flex justify-center w-full mb-32">
            <span className="absolute top-0 bottom-0 text-2xl text-white left-16">Order by:</span>
            <Space direction="horizontal">
              <Group optionType="button" buttonStyle="solid" onChange={onPropertyChange}>
                <Button value="Rank">Rank</Button>
                <Button value="Update">Update</Button>
                <Button value="Chapters">Chapters</Button>
                <Button value="Favorites">Favorites</Button>
              </Group>

              <Group optionType="button" buttonStyle="solid" onChange={onSortChange}>
                <Button value="asc">Ascend</Button>
                <Button value="desc">Descend</Button>
              </Group>
            </Space>
          </div>
        </div>
        <div className="flex flex-wrap basis-2/3 justify-evenly">
          {mangaList.map((manga) => (
            <Card key={manga.mal_id} item={manga} className="w-1/7" />
          ))}
        </div>
      </div>
    </DefaultLayout>
  )
}

export default FilterPage
