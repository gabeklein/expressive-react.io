import { jpg, svg, png, mp4 } from "@termtm/static";

export default class Footer {

    Style(){
        footer: {
            background: 0x475265
            padding: 80, 30, 60
            color: white
            display: flex
            flexDirection: row
            flexWrap: wrap
            position: relative;
            zIndex: 4
        }

        side: {
            flex: 1
            flexDirection: row
            display: flex
            justifyContent: center
            paddingTop: 5
            fontSize: 14
        }

        section: {
            flex: 1
            flexBasis: 1
            display: flex
            alignItems: center
            justifyContent: center
        }

        right: {
            flexDirection: column
        }

        reachable: {
            flexDirection: row
            maxWidth: "100vw"
            justifyContent: "center"
            flexWrap: wrap
            display: flex
            fontSize: 13
            color: 0xddd
        }

        info: {
            flexDirection: row
            display: flex
            margin: 20
            minWidth: 220
        }

        span: {
            marginRight: 20
            fontSize: 11
            fontWeight: 500
            color: white
        }
        
        a: {
            color: 0xddd
            textDecoration: none
        }

        social: {
            width: 120
            flexDirection: row
            justifyContent: space-between
            display: flex
        }

        copyright: {
            textAlign: center
            color: white
            fontSize: 11
            margin: 20
        }
        
        img: {
            width: 24
        }

    }

    Footer(){
        footer, do {
            id = "footer"
            section.left, do {
                reachable, do {
                    info.contact, do {
                        span `Reach us at`;
                        div, do {
                            a `407 374 3591`, do {
                                href = "tel:407-374-3591";
                                textDecoration: none
                            }
                            br;
                            a `info@iflytrend.com`, do {
                                href = "mailto:info@iflytrend.com";
                                textDecoration: none
                            }
                        }
                    }

                    info.address, do {
                        span `Find us at`;
                        div, do {
                            "Trend Aviation"; br;
                            "321 Crystal Lake Dr."; br;
                            "Orlando, FL 32803"
                        }
                    }
                }
            }

            section.right, do {
                social, do {
                    a(href = `https://www.instagram.com/trendaviation/`) >>
                        img(src = svg `ui/link-instagram`);

                    a(href = `https://www.facebook.com/iflytrend/`) >>
                        img(src = svg `ui/link-facebook`);

                    a(href = `https://twitter.com/iflytrend`) >>
                        img(src = svg `ui/link-twitter`);
                }

                copyright `© 2018 Trend Airways`
            }
        }
    }
}