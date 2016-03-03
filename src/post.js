import React from 'react'
require ("./css/post.css")
export default class Post extends React.Component {
  render () {
    return (
      <div className="post-step">
        <h3 className="post-title">提交干活只需三步</h3>
          <h5>Step0:</h5>
          <h5 style={{marginTop: 30, marginBottom: 20}}>请对着 你的机械键盘 发誓，接下来提交的是真干货!</h5>
          <small style={{color: 'green', fontSize: 14}}> // 如果没有此圣物，请刷新页面</small>
          <h5 style={{marginTop: 30}}>Step1:</h5>
          {this._getForm()}
      </div>
    )
  }

  _getForm() {
    return (
      <form method="post" style={{marginLeft: 15}}>
        <div className="row">
          <div id="category-bundle">
            <label for="category" className="u-full-width">分类:</label>
            <select name="type" id="category">
              <option value="Android">Android</option>
              <option value="iOS">iOS</option>
              <option value="前端">前端</option>
              <option value="瞎推荐">瞎推荐</option>
              <option value="休息视频">休息视频</option>
              <option value="拓展资源">拓展资源</option>
              <option value="福利">福利</option>
              <option value="App">App</option>
            </select>
          </div>
          <div id="url-bundle">
            <label for="url"> 地址:</label>
            <input type="text" name="url" className="u-full-width input-position" id="url" placeholder="干货的 URL 地址"/>
          </div>
        </div>
        <div id="desc-bundle" className="row">
          <label for="desc"> 描述:</label>
          <input type="text" name="desc" className="u-full-width  input-position" id="desc" placeholder="请输入至少5个字的描述"/>
        </div>
        <div className="row ">
          <h5>Step2:</h5>
          <input className="button u-full-width" type="submit" value="(｡◕∀◕｡) 发射!"/>
        </div>
      </form>
    )
  }
}