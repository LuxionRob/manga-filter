import './style.css'
import { UserOutlined, NotificationOutlined } from '@ant-design/icons'

const Navbar = () => {
  return (
    <nav>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <div className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700">
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center"></div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a href="/"
                   className="text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="/"
                   className="text-white px-3 py-2 rounded-md text-sm font-medium">Genre</a>
                <a href="/"
                   className="text-white px-3 py-2 rounded-md text-sm font-medium">Series</a>
                <a href="/"
                   className="text-white px-3 py-2 rounded-md text-sm font-medium">Find</a>
              </div>
            </div>
          </div>
          <div className="absolute right-0 flex justify-end items-center">
            <div className="flex justify-center items-center text-gray-400 hover:text-white">
              <NotificationOutlined className="text-xl"/>
            </div>

            <div className="ml-3 relative ">
              <div className="p-1 rounded-full border border-white border-solid">
                <div className="border-2 border-white bg-gray-800 flex text-sm rounded-full">
                  <UserOutlined className="text-gray-300 w-8 text-2xl hover:text-white"/>
                </div>
              </div>

              <div className="hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                <a href="/" className="block px-4 py-2 text-sm text-gray-700">Your Profile</a>
                <a href="/" className="block px-4 py-2 text-sm text-gray-700">Settings</a>
                <a href="/" className="block px-4 py-2 text-sm text-gray-700">Sign out</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>)
}

export default Navbar