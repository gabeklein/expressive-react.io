import { svg } from "@termtm/static";

export default () => do {
    // flexAlign: row
    height: 60
    borderBottom: 0xEEE
    fixed: fill-top, 0, 20
    fontFamily: "Roboto"

    display: flex;
    justifyContent: space-between;
    alignItems: center

    html-a, do {
        padding: 4, 10
        radius: 3
        textDecoration: none
        color: black

        href = "https://github.com/gabeklein/expressive-react"

        "Github";
        img(src = svg `/github_logo`), do {
            verticalAlign: middle
            paddingBottom: 5
            height: "1.1em"
            marginLeft: ".3em"
        }
    }
}