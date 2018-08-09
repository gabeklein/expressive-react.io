import { Style, Script } from "@termtm/react"
import Header from 'next/head'

const CDN = process.env.CDN || "/static/"

if(!CDN) throw new Error(`\
    CDN not set in env!
    Need a url.\
`)

function InitScrollMagic(){
    if(window.controller) window.controller.destroy(true)
    controller = window.controller = new window.ScrollMagic.Controller();
    
    window.Scene = (params) => {
        return new window.ScrollMagic.Scene(params).addTo(controller);
    }
}

export default ({ title = "Expressive React", scrollmagic = false }) => do {
    Header, do {
        html-title > title;
        meta(
            name `viewport`,
            content `width=device-width, initial-scale=1, user-scalable=no, viewport-fit=cover`
        )
    }

    if(scrollmagic){
        script, src `https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js`;
        script, src `https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.js`
        script, src `https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/TweenMax.min.js`;
        script, src `https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js`
        script, src `https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.min.js`
        Script, () => {
            InitScrollMagic();
        }; 
    }

    Style(global) `
        html {
            height: 100%;
            box-sizing: border-box;
        }

        body {
            margin: 0;
            padding: 0;
            position: relative;
            background: white;
            font-family: 'nexa';
        }

        #__next {
            min-height: 100%;
            width: 100%
        }

        .floating{
            -webkit-animation-name: Floatingx;
            -webkit-animation-duration: 4s;
            -webkit-animation-iteration-count: infinite;
            -webkit-animation-timing-function: ease-in-out;
            -moz-animation-name: Floating;
            -moz-animation-duration: 4s;
            -moz-animation-iteration-count: infinite;
            -moz-animation-timing-function: ease-in-out;
        }

        @-webkit-keyframes Floatingx{
            from {-webkit-transform:translate3d(0, -3px, 0);}
            50% {-webkit-transform:translate3d(0, 5px, 0);}
            to {-webkit-transform: translate3d(0, -3px, 0);}
        }
        @-moz-keyframes Floating{
            from {-moz-transform:translateY(-3px);}
            50% {-moz-transform:translateY(5px);}
            to {-moz-transform: translateY(-3px);}
        }
    `
}