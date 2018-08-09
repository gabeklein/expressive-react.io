import StyledApp from "@expressive-react/style";
import Bootstrap from 'common/bootstrap';
import { png } from "@termtm/static";
import { Style } from "@termtm/react"

import Header from "./header"

export default () => do {

    Bootstrap();
    html-link, 
        href `https://fonts.googleapis.com/css?family=Roboto:300,400,500,900`,
        rel `stylesheet`;

    StyledApp, do {
        Header;
        Home;
    }
}

import Splash from "./hero"
import Hook from "./demo"

class Home {
    Home(){
        Splash;
        // Hook;
    }
}

