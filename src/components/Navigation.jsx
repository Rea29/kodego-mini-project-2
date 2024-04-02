import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
function samplenav() {
	return (
        <div class="container">
        <strong class="logo"><i class="fas fa-heart"></i></strong>
        <label class="open-search" for="open-search">
          <i class="fas fa-search"></i>
                <input class="input-open-search" id="open-search" type="checkbox" name="menu" />
        <div class="search">
          <button class="button-search"><i class="fas fa-search"></i></button>
          <input type="text" placeholder="What are you looking for?" class="input-search"/>
        </div>
        </label>
        <nav class="nav-content">
          <ul class="nav-content-list">
            <li class="nav-content-item account-login">
              <label class="open-menu-login-account" for="open-menu-login-account">
    
                <input class="input-menu" id="open-menu-login-account" type="checkbox" name="menu" />
    
                <i class="fas fa-user-circle"></i><span class="login-text">Hello, Sign in <strong>Create Account</strong></span> <span class="item-arrow"></span>
    
                <ul class="login-list">
                  <li class="login-list-item"><a href="https://www.cupcom.com.br/">My account</a></li>
                  <li class="login-list-item"><a href="https://www.cupcom.com.br/">Create account</a></li>
                  <li class="login-list-item"><a href="https://www.cupcom.com.br/">logout</a></li>
                  </label>
                </ul>
            </li>
            <li class="nav-content-item"><a class="nav-content-link" href="https://www.cupcom.com.br/"><i class="fas fa-heart"></i></a></li>
            <li class="nav-content-item"><a class="nav-content-link" href="https://www.cupcom.com.br/"><i class="fas fa-shopping-cart"></i></a></li>
    
          </ul>
        </nav>
      </div>
    );
}

export default samplenav;
