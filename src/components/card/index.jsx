import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Tooltip, Typography } from 'antd'

const { Paragraph } = Typography

const Card = ({ item, className }) => {
  const [showTooltip, setShowTooltip] = useState(false)

  const handleEvent = () => {
    const tooltips = document.querySelectorAll('.tooltip')

    window.onmousemove = (e) => {
      const x = e.clientX
      const y = e.clientY

      for (let i = 0; i < tooltips.length; i++) {

        tooltips[i].style.top = y + 20 + 'px'
        tooltips[i].style.left = x + 20 + 'px'
        console.log(tooltips[i].style.top, tooltips[i].style.left)
      }
    }
  }

  useEffect(() => {
    handleEvent()
  }, [])

  return (
    <a href="/" className={`block  w-[210px] mb-12 ${className}`}>
      <div className='relative' onMouseOver={() => setShowTooltip(true)} onMouseOut={() => setShowTooltip(false)}>
        <div className="absolute px-2 py-1 text-white bg-blue-400 top-1 left-1 rounded-xl">{item.status}</div>
        <img
          className="object-center"
          src={item.images.jpg.large_image_url}
          width={210}
          height={300}
          alt="example"
        />
        <div className="flex flex-col items-center pb-0 mt-1 justify-content-between">
          <Paragraph
            ellipsis={{
              rows: 2
            }}
            className="text-sm italic text-center text-white"
          >
            <Tooltip title={item.title}>{item.title}</Tooltip>
          </Paragraph>
          <span className="ml-2 -mt-4 text-gray-500">{item.chapters < 1 || null ? 0 : item.chapters} chap</span>
        </div>
      </div>

      {/*Tooltip*/}
      <div onMouseOver={() => setShowTooltip(true)} onMouseOut={() => setShowTooltip(false)}
           className={`tooltip fixed w-[23rem] p-2 bg-slate-100 z-10 ${showTooltip ? '' : ' hidden'}`}>
        <span className="text-black font-bold">{item.title}</span>
        <div className="flex">
          <img className="object-center mr-2" src={item.images.jpg.large_image_url} alt="" height="200" width="140"/>
          <div>
            <div className="text-black flex mb-1">
              <span className="pr-2 font-bold text-blue-400">Alternate titles:</span>
              <div>
                <span>
                  {
                    item.title_english + item.title_synonyms.length === 0 || item.title_synonyms.length === null ? ', ' : ''
                  }
                </span>
                {
                  item.title_synonyms.map((synonyms, key) => (
                    <span
                      key={key + 1}>{synonyms.name === undefined ? '' : `${synonyms.name}${key === item.title_synonyms.length - 1 ? '' : ','} `}</span>
                  ))
                }
              </div>
            </div>
            <div className="text-black flex mb-1">
              <span className="pr-2 font-bold text-blue-400">Genres:</span>
              <div>
                {
                  item.genres.map((genre, key) => (
                    <span key={key + 1}>{`${genre.name}${key === item.genres.length - 1 ? '' : ','} `}</span>
                  ))
                }
              </div>
            </div>
            <div className="text-black flex mb-1">
              <span className="pr-2 font-bold text-blue-400">Author:</span>
              <div>
                {
                  item.authors.map((author, key) => (
                    <span key={key + 1}>{`${author.name}${key === item.authors.length - 1 ? '' : ','} `}</span>
                  ))
                }
              </div>
            </div>
            <div className="text-black flex mb-1">
              <span className="pr-2 font-bold text-blue-400">Status:</span>
              <span>{item.status}</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}

Card.propTypes = {
  item: PropTypes.object.isRequired
}

export default Card