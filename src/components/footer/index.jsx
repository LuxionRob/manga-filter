import { FacebookOutlined, GithubOutlined, SlackOutlined, PhoneOutlined, MailOutlined} from '@ant-design/icons'

const FooterCpn = () => {

  return (
    <div className="w-full text-xl mt-16">
      <div className="h-[1px] bg-white"></div>
      <div className="flex flex-col items-center bg-transparent mb-8">
        <span className="text-white mt-8 mb-4">Created by Bui Cong Tri</span>
        <div className="w-1/2 text-2xl flex justify-center">
          <a className="mr-2" href="https://github.com/LuxionRob/manga-filter" target='_blank'><GithubOutlined/></a>
          <a className="mr-2" href="https://www.facebook.com/LuxionRob" target='_blank'><FacebookOutlined/></a>
          <a className="mr-2" href="https://app.slack.com/client/T02QFU9TCTD/D03GHJS3J8J/rimeto_profile/U02QSR2BR8S" target='_blank'><SlackOutlined/></a>
          <a className="mr-2" href='tel:+84966340602'><PhoneOutlined /></a>
          <a href="mailto:aidaynhi8@gmail.com"><MailOutlined /></a>
        </div>
      </div>
    </div>
  )
}

export default FooterCpn