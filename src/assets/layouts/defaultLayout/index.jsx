import { Layout } from 'antd'
import PropTypes from 'prop-types'
import Navbar from '../../../components/navbar'
import './style.css'

const { Header, Content } = Layout

const DefaultLayout = ({ children }) => {

  return (
    <Layout>
      <Header className='inline-block h-auto phone:fixed phone:left-0 phone:top-0 phone:right-0 z-10 px-0'>
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