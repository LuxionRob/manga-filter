import { useEffect, useState } from 'react'
import { MenuOutlined, NotificationOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons'
import './style.css'

const Navbar = () => {
  const [isSearch, setIsSearch] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)

  const toggleDropdown = (e) => {
    e.stopPropagation()
    setShowDropdown(!showDropdown)
    setIsSearch(false)
  }

  const toggleSearch = (e) => {
    e.stopPropagation()
    setIsSearch(!isSearch)
    setShowDropdown(false)
  }
  useEffect(() => {
    window.onclick = () => {
      setIsSearch(false)
      setShowDropdown(false)

    }

  })
  return (
    <nav className="relative">
      <div className="px-2 max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-auto">
          <div
            className={`${isSearch ? 'flex-col items-start' : 'items-center'} flex justify-start flex-1 sm:items-stretch`}>
            <div className={`phone:flex-col phone:justify-center flex sm:ml-6 sm:items-center justify-start h-16`}>
              <div className="phone:flex items-center text-xl text-white justify-self-center h-16 hidden">
                <div
                  className="leading-[4rem] px-4 active:bg-slate-300 active:text-slate-900"
                  onClick={toggleDropdown}
                >
                  <MenuOutlined/>
                </div>
                <div
                  className="leading-[4rem] px-4 active:bg-slate-300 active:text-slate-900"
                  onClick={toggleSearch}
                >
                  <SearchOutlined/>
                </div>
              </div>
              <div
                className={`${showDropdown ? 'flex flex-col' : 'hidden'} items-start mr-4 sm:flex justify-start sm:items-center sm:space-x-4 phone:fixed phone:top-16 phone:left-0 phone:bg-[#001529] phone:screen`}>
                <a href="/"
                   className="phone:w-screen phone:text-lg px-3 py-2 text-sm font-medium text-xl text-white rounded-md disable">
                  Home
                </a>
                <a href="/"
                   className="phone:w-screen phone:text-lg px-3 py-2 text-sm font-medium text-xl text-white rounded-md disable">
                  Genre
                </a>
                <a href="/"
                   className="phone:w-screen phone:text-lg px-3 py-2 text-sm font-medium text-xl text-white rounded-md disable">
                  Series
                </a>
              </div>
            </div>
            <div className={`${isSearch ? 'flex' : 'hidden'} sm:block relative w-48 phone:mb-4`}>
              <SearchOutlined
                className="absolute left-[95%] top-1/2 text-blacks"
                style={{ transform: 'translate(-100%, -50%)' }}
              />
              <input
                id="search_input"
                placeholder="Search manga"
                type="text"
                className="px-3 text-sm font-medium text-black rounded-md decoration-slate-400 h-8 w-48"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-16 phone:right-2 top-0 h-16 flex items-center justify-center">
        <div className="flex items-center justify-center text-gray-400 hidden lg:flex hover:text-white">
          <NotificationOutlined className="text-xl"/>
        </div>

        <div className="relative ml-3 ">
          <div className="p-1 border border-white border-solid rounded-full">
            <div className="flex text-sm bg-gray-800 border-2 border-white rounded-full">
              <UserOutlined className="w-8 text-2xl text-gray-300 hover:text-white"/>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
