import PropTypes from 'prop-types'
import { Typography, Tooltip } from 'antd'

const  { Paragraph } = Typography

const Card = ({ item, className }) => {
  return (
    <a href='/' className={`block relative w-[210px] mb-12 ${className}`}>
      <div className="absolute px-2 py-1 top-1 left-1 text-white bg-blue-400 rounded-xl">{item.status}</div>
      <img
        className="object-center"
        src={item.images.jpg.large_image_url}
        width={210}
        height={300}
        alt="example"
      />
      <div className="mt-1 flex flex-col justify-content-between items-center pb-0">
        <Paragraph
          ellipsis={{
            rows: 2
          }}
          className="text-white italic text-sm text-center"
        >
          <Tooltip title={item.title}>{item.title}</Tooltip>
        </Paragraph>
        <span className="text-white -mt-4 ml-2 text-gray-500">{item.chapters < 1 || null ? 0 : item.chapters} chap</span>
      </div>
    </a>
  )
}

Card.propTypes = {
  item: PropTypes.object.isRequired
}

export default Card