import logo from './logoCoffe.svg';
import './header.css';
export default () => {
    return(
        <div>
          <header class = "header">
          <img src={logo} alt="Логотип"></img>
            <nav class ="nac">
              <div class='left-text'>
              <h2><a href="#">Меню</a></h2>
              <h2><a href="#">Акции</a></h2>
              <h2><a href="#">Отзывы</a></h2>
              </div>
              <div class="right-text">
              <h2><a href="#">Где нас найти</a></h2>
              </div>
            </nav>        
        
          </header>
        </div>
    );
};
