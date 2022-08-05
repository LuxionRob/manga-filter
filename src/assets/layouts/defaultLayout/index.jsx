import { Layout } from 'antd'
import PropTypes from 'prop-types'
import Navbar from '../../../components/navbar'
// import Card from '../../../components/card'
import './style.css'

const { Header, Content, Sider } = Layout

const DefaultLayout = ({ children }) => {

  return (
    <Layout>
      <Header>
        <Navbar/>
      </Header>
      <Layout className="overflow-hidden">
        <Content className="h-full">
          {children}
        </Content>
        <Sider
          className="flex justify-center"
          width={500}
        >
          <div>Genre</div>
        </Sider>
      </Layout>
    </Layout>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DefaultLayout