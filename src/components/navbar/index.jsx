import { UserOutlined, NotificationOutlined, SearchOutlined } from '@ant-design/icons'
import './style.css'

const Navbar = () => {
  const onSearch = (e) => {
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
    <nav>
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <div className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700"></div>
          </div>
          <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
            <div className="flex items-center flex-shrink-0"></div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex items-center space-x-4">
                <a href="/" className="px-3 py-2 text-sm font-medium text-white rounded-md disable">
                  Home
                </a>
                <a href="/" className="px-3 py-2 text-sm font-medium text-white rounded-md disable">
                  Genre
                </a>
                <a href="/" className="px-3 py-2 text-sm font-medium text-white rounded-md disable">
                  Series
                </a>
                <div className="relative">
                  <SearchOutlined
                    className="absolute left-[95%] top-1/2 text-blacks"
                    style={{ transform: 'translate(-100%, -50%)' }}
                  />
                  <input
                    id='search_input'
                    placeholder="Search manga"
                    type="text"
                    className="px-3 text-sm font-medium text-black rounded-md decoration-slate-400"
                    onBlur={onSearch}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute right-0 flex items-center justify-end">
            <div className="flex items-center justify-center text-gray-400 hover:text-white">
              <NotificationOutlined className="text-xl" />
            </div>

            <div className="relative ml-3 ">
              <div className="p-1 border border-white border-solid rounded-full">
                <div className="flex text-sm bg-gray-800 border-2 border-white rounded-full">
                  <UserOutlined className="w-8 text-2xl text-gray-300 hover:text-white" />
                </div>
              </div>

              <div className="absolute right-0 hidden w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                <a href="/" className="block px-4 py-2 text-sm text-gray-700">
                  Your Profile
                </a>
                <a href="/" className="block px-4 py-2 text-sm text-gray-700">
                  Settings
                </a>
                <a href="/" className="block px-4 py-2 text-sm text-gray-700">
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
