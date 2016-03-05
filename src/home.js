import React from 'react'
require ("./css/home.css")
let contentData = {
"category": [
"Android",
"iOS",
"前端",
"休息视频",
"福利",
"App"
],
"error": false,
"results": {
"Android": [
{
"_id": "56cc6d1d421aa95caa707562",
"_ns": "ganhuo",
"createdAt": "2015-10-27T03:18:12.812Z",
"desc": "Android徽章控件",
"publishedAt": "2016-03-02T12:06:37.242Z",
"type": "Android",
"url": "https://github.com/bingoogolapple/BGABadgeView-Android",
"used": true,
"who": "__weak_Point"
},
{
"_id": "56cc6d26421aa95caa707ed9",
"_ns": "ganhuo",
"createdAt": "2015-11-24T11:17:40.17Z",
"desc": "开源项目OkHttpPlus——支持GET、POST、UI线程回调、JSON格式解析、链式调用、文件上传下载",
"publishedAt": "2016-03-02T12:06:37.242Z",
"type": "Android",
"url": "http://blog.csdn.net/zhaokaiqiang1992/article/details/50016815",
"used": true,
"who": "MVP"
},
{
"_id": "56d658216776592a03e624a7",
"_ns": "ganhuo",
"createdAt": "2016-03-02T11:04:01.828Z",
"desc": " 从驱动层分析android的Binder机制",
"publishedAt": "2016-03-02T12:06:37.242Z",
"source": "chrome",
"type": "Android",
"url": "http://blog.csdn.net/lpjishu/article/details/49667713",
"used": true,
"who": "刘朋"
},
{
"_id": "56d65a706776592a03e624aa",
"_ns": "ganhuo",
"createdAt": "2016-03-02T11:13:52.867Z",
"desc": "一个私人定制新闻客户端（MVVM ）",
"publishedAt": "2016-03-02T12:06:37.242Z",
"source": "web",
"type": "Android",
"url": "https://github.com/iQuick/NewsMe",
"used": true,
"user": {
"_id": "56d65a056776592a03e624a9",
"_ns": "users",
"access_token": "9f9552135ff3998c0a3b8efbef40f242c76d6433",
"avatar_url": "https://avatars.githubusercontent.com/u/7509014?v=3",
"bio": null,
"blog": null,
"company": null,
"createdAt": "2016-03-02T11:12:05.650Z",
"created_at": "2014-05-07T06:50:56Z",
"email": null,
"events_url": "https://api.github.com/users/iQuick/events{/privacy}",
"followers": 34,
"followers_url": "https://api.github.com/users/iQuick/followers",
"following": 2,
"following_url": "https://api.github.com/users/iQuick/following{/other_user}",
"gists_url": "https://api.github.com/users/iQuick/gists{/gist_id}",
"gravatar_id": "",
"hireable": null,
"html_url": "https://github.com/iQuick",
"id": 7509014,
"identity": "07afeba5-8860-42c5-aa5d-78d26bc56e11",
"location": null,
"login": "iQuick",
"name": null,
"organizations_url": "https://api.github.com/users/iQuick/orgs",
"public_gists": 0,
"public_repos": 27,
"received_events_url": "https://api.github.com/users/iQuick/received_events",
"repos_url": "https://api.github.com/users/iQuick/repos",
"site_admin": false,
"starred_url": "https://api.github.com/users/iQuick/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/iQuick/subscriptions",
"type": "User",
"updated_at": "2016-02-27T16:05:46Z",
"url": "https://api.github.com/users/iQuick"
},
"who": null
},
{
"_id": "56d662266776592a03e624ad",
"_ns": "ganhuo",
"createdAt": "2016-03-02T11:46:46.807Z",
"desc": " Android TextureView 和SurfaceView 简单动画库",
"publishedAt": "2016-03-02T12:06:37.242Z",
"source": "chrome",
"type": "Android",
"url": "https://github.com/MasayukiSuda/FPSAnimator",
"used": true,
"who": "MVP"
}
],
"App": [
{
"_id": "56d64bb36776592a03e624a5",
"_ns": "ganhuo",
"createdAt": "2016-03-02T10:10:59.883Z",
"desc": "LeeCo - LeetCode 站点对应的个人App，超过300道面试算法题，29个分类。\n",
"publishedAt": "2016-03-02T12:06:37.242Z",
"source": "chrome",
"type": "App",
"url": "https://github.com/Nightonke/LeeCo",
"used": true,
"who": "咕咚"
}
],
"iOS": [
{
"_id": "56cc6d1d421aa95caa7076e4",
"_ns": "ganhuo",
"createdAt": "2015-07-03T15:36:06.72Z",
"desc": "Xcode plugin开发小入门",
"publishedAt": "2016-03-02T12:06:37.242Z",
"type": "iOS",
"url": "http://www.overacker.me/blog/2015/01/25/creating-an-xcode-plugin",
"used": true,
"who": "Huan"
},
{
"_id": "56cc6d1d421aa95caa70770f",
"_ns": "ganhuo",
"createdAt": "2015-06-23T08:35:47.858Z",
"desc": "Swift 中处理 C 回调。",
"publishedAt": "2016-03-02T12:06:37.242Z",
"type": "iOS",
"url": "http://oleb.net/blog/2015/06/c-callbacks-in-swift/",
"used": true,
"who": "CallMeWhy"
},
{
"_id": "56cc6d23421aa95caa707ade",
"_ns": "ganhuo",
"createdAt": "2015-06-23T08:31:08.334Z",
"desc": "用Swift 的枚举解决Storyboard Segues问题",
"publishedAt": "2016-03-02T12:06:37.242Z",
"type": "iOS",
"url": "http://christiantietze.de/posts/2015/06/segue-enums/",
"used": true,
"who": "CallMeWhy"
},
{
"_id": "56cc6d23421aa95caa707ae1",
"_ns": "ganhuo",
"createdAt": "2015-06-22T08:26:39.655Z",
"desc": "iOS应用程序的生命周期",
"publishedAt": "2016-03-02T12:06:37.242Z",
"type": "iOS",
"url": "http://www.jianshu.com/p/aa50e5350852?utm_campaign=maleskine&utm_content=note&utm_medium=writer_share&utm_source=weibo",
"used": true,
"who": "Andrew Liu"
},
{
"_id": "56cc6d23421aa95caa707afb",
"_ns": "ganhuo",
"createdAt": "2015-06-23T08:32:06.402Z",
"desc": "如何给 Storyboard 里的 Button 写单元测试",
"publishedAt": "2016-03-02T12:06:37.242Z",
"type": "iOS",
"url": "http://christiantietze.de/posts/2015/06/testing-uibutton-swift/",
"used": true,
"who": "CallMeWhy"
},
{
"_id": "56cc6d23421aa95caa707ba2",
"_ns": "ganhuo",
"createdAt": "2015-07-03T13:28:01.476Z",
"desc": "Reveal  小技巧",
"publishedAt": "2016-03-02T12:06:37.242Z",
"type": "iOS",
"url": "http://blog.ittybittyapps.com/blog/2013/09/26/reveal-shortcuts-and-tips/",
"used": true,
"who": "Huan"
},
{
"_id": "56cc6d23421aa95caa707ba4",
"_ns": "ganhuo",
"createdAt": "2015-07-03T16:16:09.975Z",
"desc": "Swift使用charts API创建酷炫的图表",
"publishedAt": "2016-03-02T12:06:37.242Z",
"type": "iOS",
"url": "http://www.appcoda.com/ios-charts-api-tutorial/",
"used": true,
"who": "Huan"
}
],
"休息视频": [
{
"_id": "56d643496776592a03e624a3",
"_ns": "ganhuo",
"createdAt": "2016-03-02T09:35:05.957Z",
"desc": "《你比你想象的更美丽》：推荐给程序媛或者你身边的妹纸看。世界上最值得爱的人，是自己。",
"publishedAt": "2016-03-02T12:06:37.242Z",
"source": "chrome",
"type": "休息视频",
"url": "http://www.miaopai.com/show/ESKjMeSP94~OPxO16t5QsA__.htm?ep=DjFT6jxlu%2C5505585886%2CDjFT6jxlu%2C5505585886",
"used": true,
"who": "lxxself"
}
],
"前端": [
{
"_id": "56d54b34421aa96b81f5ff07",
"_ns": "ganhuo",
"createdAt": "2016-03-01T15:56:36.544Z",
"desc": "SuperAgent 轻量的前端HTTP请求库",
"publishedAt": "2016-03-02T12:06:37.242Z",
"source": "chrome",
"type": "前端",
"url": "http://visionmedia.github.io/superagent/",
"used": true,
"who": "SASUKE40"
},
{
"_id": "56d6542b6776592a03e624a6",
"_ns": "ganhuo",
"createdAt": "2016-03-02T10:47:07.322Z",
"desc": "锅内更全的前端开发资料",
"publishedAt": "2016-03-02T12:06:37.242Z",
"source": "web",
"type": "前端",
"url": "https://mdluo.github.io/blog/about-front-end-interview/",
"used": true,
"user": {
"_id": "56d3c498421aa93cbc97e25b",
"_ns": "users",
"access_token": "ff4c9a259e1e0efccf4c14b29fef3ebb3f5b6e7e",
"avatar_url": "https://avatars.githubusercontent.com/u/8554661?v=3",
"bio": null,
"blog": "http://blog.csdn.net/bob1993_Dev",
"company": "Applean",
"createdAt": "2016-02-29T12:10:00.778Z",
"created_at": "2014-08-26T08:57:57Z",
"email": "poberwong@gmail.com",
"events_url": "https://api.github.com/users/Bob1993/events{/privacy}",
"followers": 68,
"followers_url": "https://api.github.com/users/Bob1993/followers",
"following": 34,
"following_url": "https://api.github.com/users/Bob1993/following{/other_user}",
"gists_url": "https://api.github.com/users/Bob1993/gists{/gist_id}",
"gravatar_id": "",
"hireable": true,
"html_url": "https://github.com/Bob1993",
"id": 8554661,
"identity": "29f8ea17-eb7e-4951-a2a6-38135ae934a6",
"location": "Beijing",
"login": "Bob1993",
"name": "PoberWong",
"organizations_url": "https://api.github.com/users/Bob1993/orgs",
"public_gists": 1,
"public_repos": 121,
"received_events_url": "https://api.github.com/users/Bob1993/received_events",
"repos_url": "https://api.github.com/users/Bob1993/repos",
"site_admin": false,
"starred_url": "https://api.github.com/users/Bob1993/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/Bob1993/subscriptions",
"type": "User",
"updated_at": "2016-02-29T04:09:52Z",
"url": "https://api.github.com/users/Bob1993"
},
"who": "PoberWong"
}
],
"福利": [
{
"_id": "56d6481e6776592a03e624a4",
"_ns": "ganhuo",
"createdAt": "2016-03-02T09:55:42.63Z",
"desc": "3.2",
"publishedAt": "2016-03-02T12:06:37.242Z",
"source": "chrome",
"type": "福利",
"url": "http://ww3.sinaimg.cn/large/7a8aed7bjw1f1ia8qj5qbj20nd0zkmzp.jpg",
"used": true,
"who": "张涵宇"
}
]
}
}
export default class Home extends React.Component {
  render () {
    return (
      <div style={{marginTop: -15}}>
        <div id="header-link" style={{display: 'flex'}}>
          <a id="before"href="http://www.baidu.com" style={{flex: 1}}>小李子终于拿到奥斯卡了!</a>
          <a id="next" href="http://www.baidu.com" style={{flex: 1, textAlign: 'right'}}>小李子终于拿到奥斯卡了! 而且小李子在台上的讲话真的很赞啊！</a>
        </div>
        <div>
          <h2 style={{fontWeight: 300}}>02月26日:当所有的人生疑问都能得到回答，那些爱过的遗忘的所有的，答案。（见今日视频</h2>
        </div>
        <hr style={{backgroundColor: '#888888'}}/>
        <img id="image" src="http://ww1.sinaimg.cn/large/7a8aed7bjw1f1cl3c7rfgj20dw0ku76t.jpg" />
        {this._getViews(contentData)}
      </div>
    )
  }

  _getViews (contentData) {
    return contentData.category.map((category, index) => (
      <div style={{marginTop: 40}}>
        <h3>{category}</h3>
        <ul style={{marginLeft: -20, marginTop: 20}}>
          {this._getItems(contentData, category)}
        </ul>
      </div>
    ))
  }

  _getItems(contentData, category) {
    return contentData.results[category].map((item, index) => (
      <li style={{marginTop: 10}}><a href={item.url}>{item.desc}</a>({item.who})</li>
    ))
  }

}