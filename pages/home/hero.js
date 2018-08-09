
import { png } from "@termtm/static";

export default () => do {
    height: 100, vh;
    flexAlign: center;
    fontFamily: roboto
    color: 0x888
    font: 26, 500

    center: {
        textAlign: center;
        font: 38
    }

    beta: {
        font: 16
        marginTop: 10
        color: 0x3
    }

    sub1: {
        marginV: 60, 10
        font: 23, 500 
    }

    sub2: {
        font: 15, 400
        maxWidth: 440
        margin: auto
        marginTop: 20
        lineHeight: 1.5, em
    }

    logo: {
        color: 0x31d0fa
        flexAlign: center;
        img: { 
            size: "2em"
            marginH: ".3em"
            cursor: help

            transition: "transform 0.3s cubic-bezier(.17,.48,.07,1.04)"
            on: hover: {
                transform: scale(1.1)
            }
        }
    }

    links: {
        marginV: 40, 20
        flexAlign: center
    }
    
    center, do {
        logo, do {
            "Expressive", do { color: 0x31d0fa }; 
            img(src = png `orbitals_logo`); 
            "React", do { color: 0x60dafb }
        }
        beta `( currently in alpha )`

        sub1 `A whole new way to write React apps.`;
        sub2 `
            Expressive is a Domain Specific Language designed to \
            take the role of JSX in your React work-flow. \
            Introducing custom syntax, expressive extends \
            Javascript much the same way, albeit in a much \
            cleaner and feature-rich manner.
        `
        links, do {
            Link `Github`, "https://github.com/gabeklein/expressive-react"
            Link `Documentation`, "/docs"
            Link `Install`, "/get-started"
        }
    }
}

const Link = (_, named, to) => do {
    html-a, do {
        border: 0xEEE
        radius: 999
        font: 16
        textDecoration: none
        padding: 10, 30
        verticalAlign: middle
        display: block
        color: 0x4288bd
        marginH: 10

        href = to;
        [named];
    };
}