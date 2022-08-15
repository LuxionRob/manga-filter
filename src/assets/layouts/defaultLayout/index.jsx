import { Layout } from 'antd'
import { UpOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'

import Navbar from '../../../components/navbar'

import './style.css'

const { Header, Content } = Layout

const DefaultLayout = ({ children }) => {

  const scrollToHead = () => {
    const header = document.getElementById('header')
    console.log(header)
    header.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
  }

  return (
    <Layout>
        <span id="header"></span>
      <Header className="inline-block h-auto phone:fixed phone:left-0 phone:top-0 phone:right-0 z-10 px-0">
        <Navbar/>
      </Header>
      <Layout className="overflow-hidden">
        <Content className="h-full">
          {children}
          <div
            onClick={scrollToHead}
            className="flex justify-center items-center border border-solid text-amber-50 border-amber-50 h-8 w-8 fixed bottom-8 right-2 z-10 cursor-pointer hover:border-amber-100 hover:text-amber-100 hover:opacity-80">
            <UpOutlined/></div>
        </Content>
      </Layout>
    </Layout>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DefaultLayout