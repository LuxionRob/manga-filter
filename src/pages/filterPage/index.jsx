import DefaultLayout from '../../assets/layouts/defaultLayout'
import React, { useEffect, useState } from 'react'
import { getMangaGenres, searchManga } from '../../api/axiosClient'
import { Pagination, Radio, Row, Select, Space, Spin, Tag } from 'antd'
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons'
import Card from '../../components/card'
import './style.css'

const { Option } = Select
const { Group, Button } = Radio
const sortStatus = ['', 'asc', 'desc']
const statusList = ['publishing', 'complete', 'hiatus', 'discontinued', 'upcoming']

const gridResponsive = {
  xs: 12,
  sm: 12,
  md: 6,
  lg: 12,
  xl: 7,
  xxl: 4,
}

const FilterPage = () => {
  const [mangaList, setMangaList] = useState({})
  const [genres, setGenres] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [filterGenre, setFilterGenre] = useState([])
  const [excludeGenre, setExcludeGenre] = useState([])
  const [status, setStatus] = useState('')
  const [orderBy, setOrderBy] = useState('')
  const [sort, setSort] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [total, setTotal] = useState(0)

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
    if (e.target.value !== orderBy) {
      setSort(1)
    } else {
      const sortBy = (sort + 1) % sortStatus.length
      setSort(sortBy)
      if (sortBy === 0) {
        setOrderBy('')
      }
    }
  }

  const fetchMangaList = async () => {
    try {
      setIsLoading(true)
      const includeGenreParam = filterGenre.join(',')
      const excludeGenreParam = excludeGenre.join(',')
      const searchInput = document.getElementById('search_input')

      const res = await searchManga(
        searchInput.value,
        status,
        includeGenreParam,
        excludeGenreParam,
        orderBy,
        sortStatus[sort],
        currentPage,
      )

      setMangaList({ [currentPage]: res.data.data })
      setTotal(res.data.pagination.items.total)
      if (!Object.keys(mangaList).includes(currentPage.toString())) {
        setMangaList({ ...mangaList, [currentPage]: res.data.data })
      }
      setIsLoading(false)
      return Promise.resolve()
    } catch (error) {
      setIsLoading(false)
      if (!(error?.response?.status === 429)) console.warn('Get genres failed')
    }
  }

  const onSearch = () => {
    fetchMangaList()
  }

  const onPaginationChange = (page) => {
    setCurrentPage(page)
  }

  useEffect(() => {
    if (currentPage !== 1) fetchMangaList()
  }, [currentPage])

  useEffect(() => {
    fetchGenres()
    fetchMangaList()
    handleEvent()
  }, [])

  const handleEvent = () => {
    // On input enter
    document.getElementById('search_input').addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        onSearch()
      }
    })
  }
  return (
    <DefaultLayout>
      <div className="flex flex-col pt-16 nowrap mx-1 lg:mx-64">
        <div className="flex flex-col items-center advanced-filter">
          <h1 className="mb-8 text-3xl text-white">Genre</h1>
          <div className="flex justify-around w-full mb-8 flex-col lg:flex-row items-center">
            <Select
              showSearch
              placeholder="Genre include"
              mode="multiple"
              showArrow
              maxTagCount={3}
              tagRender={tagRender}
              loading={isLoading}
              className="w-[80%] lg:w-1/3 mb-2 lg:mb-0"
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
              className="w-[80%] lg:w-1/3"
              onChange={onExcludeGenreChange}
            >
              {genres.map((genre) => (
                <Option key={genre.mal_id} value={genre.name}>
                  {genre.name}
                </Option>
              ))}
            </Select>
          </div>
          <div className="mb-8 w-full flex justify-center">
            <Select
              placeholder="Status"
              showArrow
              maxTagCount={1}
              loading={isLoading}
              className="w-2/3 lg:w-64 capitalize"
              onChange={onStatusChange}
            >
              {statusList.map((status, key) => (
                <Option key={key + 1} value={status} className="capitalize">
                  {status}
                </Option>
              ))}
            </Select>
          </div>
          <div className="block bg-white h-[1px] w-8 mb-8"></div>
          <div className="relative flex justify-center w-full mb-8">
            <span
              className="absolute top-0 bottom-0 text-2xl text-white left-16 hidden xl:inline-block">Order by:</span>
            <Space direction="horizontal" align="center">
              <Group value={orderBy} optionType="button" buttonStyle="solid" onChange={onPropertyChange}
                     className="select-none flex justify-center flex-wrap">
                <Button className="mt-2 max-w-24 text-center" onClick={onSortChange} value="chapters">
                  <span className="mr-1">Chapters</span>
                  {orderBy === 'chapters' && (sort === 1 ? <CaretUpOutlined/> : (sort === 2 ?
                    <CaretDownOutlined/> : ''))}
                </Button>
                <Button className="mt-2 max-w-24 text-center" onClick={onSortChange} value="rank">
                  <span className="mr-1">Rank</span>
                  {orderBy === 'rank' && (sort === 1 ? <CaretUpOutlined/> : (sort === 2 ? <CaretDownOutlined/> : ''))}
                </Button>
                <Button className="mt-2 max-w-24 text-center" onClick={onSortChange} value="favorites">
                  <span className="mr-1">Favorites</span>
                  {orderBy === 'favorites' && (sort === 1 ? <CaretUpOutlined/> : (sort === 2 ?
                    <CaretDownOutlined/> : ''))}
                </Button>
                <Button className="mt-2 max-w-24 text-center" onClick={onSortChange} value="start_date">
                  <span className="mr-1">Release Date</span>
                  {orderBy === 'start_date' && (sort === 1 ? <CaretUpOutlined/> : (sort === 2 ?
                    <CaretDownOutlined/> : ''))}
                </Button>
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
        <div className="flex justify-center mb-12">
          <Pagination
            current={currentPage}
            total={total}
            pageSize={24}
            onChange={onPaginationChange}
          />
        </div>
        <div className="flex justify-center items-center">
          {isLoading ? (
            <div
              className="relative w-[80%] h-screen mb-12"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.025)',
              }}
            >
              <Spin className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"/>
            </div>
          ) : (
            <Row gutter={[16, 32]} justify="start" className="w-full">
              {
                mangaList[currentPage]?.map((manga) => (
                  <Card key={manga.mal_id} item={manga} gridResponsive={gridResponsive}/>
                ))}
            </Row>
          )}
        </div>
        <div className="flex justify-center my-4">
          <Pagination
            current={currentPage}
            total={total}
            pageSize={24}
            onChange={onPaginationChange}
          />
        </div>
      </div>
    </DefaultLayout>
  )
}

export default FilterPage
