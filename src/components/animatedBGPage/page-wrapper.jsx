import React, {Component} from 'react'
import '../../resources/stylus/animatedBGPage/main.styl'

class AnimatedBGPage extends Component {
    render() {
        return (
            <div id='wrapper'>
                <div id='bg' /> 
                <div id='overlay' />
                <div id='main'> 
                    <header id='header'>
                        <h1>Adam Jensen</h1>
                        <p>Security Chief &nbsp;&bull;&nbsp; Cyborg &nbsp;&bull;&nbsp; Never asked for this</p>
                        <nav>
                            <ul>
                                <li><a href='#' className='icon fa-twitter'><span className='label'>Twitter</span></a></li>
                                <li><a href='#' className='icon fa-facebook'><span className='label'>Facebook</span></a></li>
                                <li><a href='#' className='icon fa-dribbble'><span className='label'>Dribbble</span></a></li>
                                <li><a href='#' className='icon fa-github'><span className='label'>Github</span></a></li>
                                <li><a href='#' className='icon fa-envelope-o'><span className='label'>Email</span></a></li>
                            </ul>
                        </nav>
                    </header>
                    <footer id='footer'>
                        <span className='copyright'>&copy; Adam Jensen. Design: <a href='http://html5up.net'>HTML5 UP</a>.</span>
                    </footer>
                </div>
            </div>
        )
    }
}

export default AnimatedBGPage
