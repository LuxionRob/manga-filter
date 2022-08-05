const Card = () => {

  return (
    <a href='/' className="block relative w-[210px] mb-12">
      <div className="absolute px-2 py-1 top-1 left-1 text-white bg-blue-400 rounded-xl">2 giờ trước</div>
      <img
        className="w-full"
        src="https://cdn.myanimelist.net/images/manga/1/157897l.jpg"
        alt="example"
      />
      <div className="mt-1 flex flex-col justify-content-between items-center">
        <span className="text-white italic text-lg">Blabla</span>
        <span className="text-white ml-2 text-gray-500">110 chap</span>
      </div>
    </a>
  )
}

export default Card