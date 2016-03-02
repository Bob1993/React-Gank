import React from 'react'
import Subscribe from './Subscribe'
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router'

class NavigationBar extends React.Component {
	render () {
		return (
			<nav className="nav navbar-default nav-transparent">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			        <span className="sr-only">Toggle navigation</span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			      </button>
			    </div>

			    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			    	<form className="navbar-form navbar-left" role="search">
			        <div className="form-group">
			          <input type="text" className="form-control" placeholder="Search" />
			        </div>
			    	</form>
			      <ul className="nav navbar-nav navbar-right">
							<li><Link to="/subscribe">订阅到邮箱</Link></li>
							<li><Link to="/">提交干货</Link></li>
							<li><Link to="/profile">RSS订阅</Link></li>
							<li><Link to="/">历史</Link></li>
							<li><Link to="/profile">编辑们</Link></li>
							<li><Link to="/profile">妹子们</Link></li>
			      </ul>
			    </div>
			  </div>
			</nav>
		)
	}
}

class Header extends React.Component {
	render () {
		return (
			<div className="header">
				<div className="login-bar">
					<ul>
						<li><img className="avatar" src="https://avatars.githubusercontent.com/u/8554661?v=3" width="30px" height="30px"/></li>
						<li>PoberWong</li>
					</ul>
				</div>
				<h5 className='title'>
					<a href='http://gank.io'>干货集中营</a>
					<p>每日分享妹子图 和 技术干货，还有供大家中午休息的休闲视频</p>
				</h5>
				<NavigationBar/>
			</div>
		)
	}
}

class Footer extends React.Component {
	render () {
		return (
			<div>
				Footer
			</div>
		)
	}
}

class Root extends React.Component {

	render () {
		return (
			<div className="container app-container">
				<Header/>
				<div id="content" className="content-page">
					{this.props.children}
				</div>
			</div>
		)
	}
}

class Home extends React.Component {
	render () {
		return (
			<div>
				<h1>Home</h1>
			</div>
		)
	}
}

class Profile extends React.Component {
	render () {
		return (
			<div>
				<h1> it is Profile</h1>
			</div>
		)
	}
}

export default React.createClass({//用来写导航，可以理解为index.js
  render() {
    return (
    	<Router>
    		<Route path="/" component={Root}>
    			<IndexRoute component={Home} />
    			<Route path="subscribe" component={Subscribe} />
    			<Route path="profile" component={Profile} />
    		</Route>
    	</Router>
    )
  }
})
