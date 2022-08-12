import { useState } from 'react'
import { MenuOutlined, NotificationOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons'
import './style.css'

const Navbar = () => {
  const [isSearch, setIsSearch] = useState(false)
  const onChange = (e) => {
    const searchParams = new URLSearchParams(window.location.search)
    searchParams.set('q', e.target.value)

    if (window.history.replaceState) {
      const url = `${window.location.pathname}?${searchParams}`
      window.history.replaceState(
        {
          path: url,
        },
        '',
        url,
      )
    }
  }

  return (
    <nav className="relative">
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-auto">
          <div className={`${isSearch ? 'flex-col items-start' : 'items-center'} flex justify-start flex-1 sm:items-stretch`}>
            <div className="flex sm:ml-6 sm:items-center justify-start h-16">
              <div className="hidden sm:flex justify-start items-center space-x-4 mr-4">
                <a href="/" className="px-3 py-2 text-sm font-medium text-white rounded-md disable">
                  Home
                </a>
                <a href="/" className="px-3 py-2 text-sm font-medium text-white rounded-md disable">
                  Genre
                </a>
                <a href="/" className="px-3 py-2 text-sm font-medium text-white rounded-md disable">
                  Series
                </a>
              </div>
              <div className="flex items-center text-xl text-white justify-self-start sm:hidden">
                <div className="leading-16 mr-4 py-2 px-2 active:bg-slate-300 active:text-slate-900"><MenuOutlined/>
                </div>
                <div className="leading-16 py-2 px-2 active:bg-slate-300 active:text-slate-900"
                     onClick={() => setIsSearch(!isSearch)}><SearchOutlined/></div>
              </div>
            </div>
            <div className={`${isSearch ? 'flex' : 'hidden'} sm:block relative w-48 mb-4`}>
              <SearchOutlined
                className="absolute left-[95%] top-1/2 text-blacks"
                style={{ transform: 'translate(-100%, -50%)' }}
              />
              <input
                id="search_input"
                placeholder="Search manga"
                type="text"
                className="px-3 text-sm font-medium text-black rounded-md decoration-slate-400 h-8 w-48"
                onChange={onChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 h-16 flex items-center justify-center">
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
