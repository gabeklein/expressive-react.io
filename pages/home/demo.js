import { jpg, svg, png, mp4 } from "@termtm/static";

import {
    Import,
    Comment,
    Templ,
    String,
    Elem,
    Paren,
    Do, 
    Const,
    CodeBlock
} from "./syntax"

export default () => do {

    html-link, 
        href `https://fonts.googleapis.com/css?family=Source+Code+Pro`,
        rel `stylesheet`;

    comparison, do {
        flexAlign: center, row

        CodeBlock.vanilla, do {
            Import, "React", "react"; 
            Comment `? 🤦‍♂️??`; br;

            Const `Element` >> 
              Paren >> 
                Elem('span') > "Hello React!"
        }
        CodeBlock.expressive, do {
            Comment `import is automagic. 🙌`;
            br;
            Const `Element` >> Do >> Templ('span', `Hello Expressive!`)
        }
    }
}