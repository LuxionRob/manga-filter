import { Layout } from 'antd'
import PropTypes from 'prop-types'
import Navbar from '../../../components/navbar'
import './style.css'

const { Header, Content } = Layout

const DefaultLayout = ({ children }) => {

  return (
    <Layout>
      <Header className='inline-block h-auto'>
        <Navbar/>
      </Header>
      <Layout className="overflow-hidden">
        <Content className="h-full">
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DefaultLayout