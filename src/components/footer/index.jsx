import { FacebookOutlined, GithubOutlined, SlackOutlined } from '@ant-design/icons'

const FooterCpn = () => {

  return (
    <div className="w-full text-xl mt-16 ">
      <div className="h-[1px] bg-white"></div>
      <div className="flex flex-col items-center bg-transparent mb-8">
        <span className="text-white mt-8 mb-4">Created by Bui Cong Tri</span>
        <div className="w-1/2 text-2xl flex justify-center ">
          {/* eslint-disable-next-line*/}
          <a
            className="mr-2 text-white opacity-90  hover:text-sky-500" href="https://github.com/LuxionRob/manga-filter"
            target="_blank"
          >
            <GithubOutlined/>
          </a>

          {/* eslint-disable-next-line*/}
          <a
            className="mr-2 text-white opacity-90  hover:text-sky-500" href="https://www.facebook.com/LuxionRob"
            target="_blank"
          >
            <FacebookOutlined/>
          </a>

          {/* eslint-disable-next-line*/}
          <a
            className="mr-2 text-white opacity-90  hover:text-sky-500"
            href="https://app.slack.com/client/T02QFU9TCTD/D03GHJS3J8J/rimeto_profile/U02QSR2BR8S"
            target="_blank"
          >
            <SlackOutlined/>
          </a>
        </div>
        <div className="mt-4 phone:flex phone:flex-col phone:self-start phone:ml-2">
          <span className="text-white mr-4">
            Phone: <a className="text-white opacity-90 hover:text-sky-500 " href="tel:+84966340602">+84966340602</a>
          </span>
          <span className="text-white">
            Email: <a className="text-white opacity-90 hover:text-sky-500 "
                      href="mailto:aidaynhi8@gmail.com">aidaynhi8@gmail.com</a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default FooterCpn
