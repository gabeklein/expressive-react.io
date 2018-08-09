import StyledApp from "@expressive-react/style";
import { png } from "@termtm/static";
import { Style } from "@termtm/react"

export default () => do {
    html-link, 
        href `https://fonts.googleapis.com/css?family=Roboto:300,400,500,900`,
        rel `stylesheet`;

    Style `
        body {
            margin: 0;
            padding: 0;
        }
    `

    StyledApp, do {
        Home;
    }
}

import Splash from "./hero"
import Hook from "./demo"

class Home {
    Home(){
        Splash;
        Hook;
    }
}

