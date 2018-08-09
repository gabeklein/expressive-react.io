import { jpg, svg, png, mp4 } from "@termtm/static";
import { Style, Script } from "@termtm/react";

import Dynamic from "react-no-ssr"
import Link from 'next/link'

import { MobileHeader } from "./mobile.js"

export default () => do {
    MobileHeader();
    DesktopHeader();
}

class DesktopHeader {

    Style(){
        container: {
            screen: if(width < 500){
                display: none
            }
            css: show: {
                background: rgba(251, 251, 251, 0.99);
            }
            transition: "background 0.2s ease-in"
            fixed: 0, 0, null;
            paddingHorizontal: 20
            paddingTop: 20
            zIndex: 20
        }

        header: {
            display: flex;
            justifyContent: space-between;
            alignItems: stretch
            margin: auto;
            paddingBottom: 20;
            maxWidth: 1080;
            borderBottom: 0x0001

            left: {
                display: flex;
                alignItems: flex-end
                marginLeft: 20

                a: {
                    display: block
                    textDecoration: none
                    marginLeft: 40
                    fontWeight: 600
                    fontSize: 14
                    color: 0x0009
                    marginBottom: 6
                }
            }

            center: {
                flexAlign: center
                flex: 1
                fontWeight: 600
                fontSize: 14

                a: { 
                    textDecoration: none
                    color: 0x0009
                    display: inline-block;
                    height: "1em"
                    paddingTop: 4
                    overflow: hidden
                }

                navLink: {
                    padding: 15, 20;
                    marginHorizontal: 2
                    position: relative

                    on:after: {
                        content: ""
                        absolute: 0
                        background: 0x0A
                        transform: scaleY(0)
                        opacity: 0
                        transition: "all 0.2s cubic-bezier(.29,.74,.45,1)"
                    }
                    on:before: {
                        content: ""
                        absolute: 0
                        background: 0x0A
                        transform: scaleY(0)
                        opacity: 0
                        transition: "all 0.8s cubic-bezier(.01,.68,.35,1)"
                    }

                    on:hoverBefore: {
                        opacity: 1
                        transform: scaleY(1);
                    }

                    on:hoverAfter: {
                        opacity: 1
                        transform: scaleY(1);
                    }
                }
            }

            right: {
                display: flex;
                alignItems: stretch
                marginRight: 20

                a: {
                    string: {
                        width: 80
                        screen: if(width < 801) display: none
                    }

                    img: {
                        size: 18
                        marginBottom: 3
                        opacity: 0.4
                        screen: if(width > 800) display: none
                    }

                    paddingHorizontal: 15
                    border: 0x0002
                    fontSize: 12
                    fontWeight: 600
                    textDecoration: none
                    color: 0x0006
                    display: flex;
                    paddingTop: 2
                    alignItems: center
                    justifyContent: center
                    borderRadius: 5
                    marginVertical: 2
                    marginLeft: 15
                }

            }
        }
    }

    scrollMagic(){
        Scene({
            triggerElement: "#scrollableContentTop",
            triggerHook: 0,
            offset: "40%"
        })
        .setClassToggle("#mainHeader", "show");
    }

    DesktopHeader(){
        Script > this.scrollMagic;

        container, do {
            id = "mainHeader"

            header, do {

                left, do {
                    a(href `/`), do {
                        img, do {
                            src = png `ui/logo_icon`;
                            height: 30
                            marginTop: 0
                            transform: translate('-30px, 0px')
                            filter: invert("40%")
                            marginRight: 10
                        }
                    } 
                }

                center, do {
                    a.navLink(href = "/membership") `Membership`
                    a.navLink(href = "/destinations") `Destinations`
                    a.navLink(href = "/fleet") `Aircraft`
                    a.navLink(href = "/charter") `Charter`
                }

                right, do {
                    a(href `tel:1-407-374-3591`), do {
                       "407 374 3591";
                       img(src = svg `phone`);
                    } 
                    // a(href `/login`) `Login`, do {
                    //     borderColor: rgb(122, 178, 219)
                    // };
                }
            }
        }
    }
}