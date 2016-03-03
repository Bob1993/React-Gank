import React from 'react'
require ("./css/subscribe.css")
export default class Subscribe extends React.Component {
	render () {
		return (
			<div id="subscribe">
				<form method="post">
					<div style={{marginBottom: 20}}>
						<h5>邮箱</h5>
						<input className="email input-position" type="text" placeholder="输入需要订阅的邮箱"/>
					</div>
					<br/>
					<span><input type="submit" value="订阅!"/>&nbsp;&nbsp;&nbsp;需要您在邮箱点击链接进行验证</span>
				</form>
			</div>
		)
	}
}