import React from "react";
import {Link} from 'react-router';
import {Icon} from 'antd';

import config from '../../config';

/**
 * 加载图片或样式文件
 * */
import './sass/Header.scss';
import logo from './images/logo.png';


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
        this.state = {
            visiable: false
        }
    }

    componentDidMount() {
        const {actions} = this.props;
        actions.fetchWeather({city:'杭州'});
        // actions.getUserInfo();
    }

    handleLogout() {
        const {actions} = this.props;
        // actions.logout();
    }

    render() {
        const { home } = this.props;
        return (
            <div className="header">
                <div className="layout">
                    <Link to="/" className="logo">
                        <img src={ logo } alt=""/> generator-react-menu
                    </Link>
                    <Icon type="right"/>
                    <a href="https://github.com/Deeeeeee/generator-react-menu" className="github">Github</a>
                    <a href="javscript:;" className="wendu">{'气温：'+home.weather.wendu+ '℃'}</a>
                </div>
            </div>
        )
    }
}