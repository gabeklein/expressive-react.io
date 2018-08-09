export const Import = 
    (_, item, source) => do {
        key: { color: 0xd099d0 }

        span.key `import `; 
        span > item;
        span ` from `; 
        String > source; "; "
    }

export const Comment = 
    ({ children }) => do {
        comment, do {
            display: inline-block
            color: 0x888
            "// "; [children]; 
        }
        br;
    }

export const Templ = 
    (_, name, text) => do {
        tag: { color: 0xe0b32a }
        text: { color: 0xa3cea3 }

        span.tag > name;
        " `"; span.text > text; "`"
    }

export const String = 
    (_, text) => do {
        span: { color: 0xa3cea3 };
        display: inline-block;
        color: 0xDDD

        '"'; span > text; '"';
    }

export const Elem = 
    (_, tagName, ...inner) => do {

        string: { color: 0xfff3 }
        span: { color: 0xe0b32a }

        display: block
        paddingLeft: 30

        "<"; span > tagName; ">"; 

        [inner.length && inner]

        "</"; span > tagName; ">";
    }

export const Paren = 
    ({ children }) => do {
        string: color: 0xfff3
        
        "( "; [children]; " )";
    }

export const Do = 
    ({ children }) => do {

        key: { color: 0xd099d0 }
        indent: { paddingLeft: 30 };
        bracket: { color: 0xfff3 }

        span.key `do`;
        span.bracket ` {`; 
        indent > children;
        span.bracket `}`;
    }

export const Const = 
    (_, name, value) => do {

        key: { color: 0xd099d0 }
        
        span.key `const `; 
        span > name;
        span ` = `; 
        [ value ];
    }

export class CodeBlock {

    Style(){
        CodeBlock: {
            fontFamily: "Source Code Pro"
            background: 0x2B3A42
            size: 400, 200
            margin: 20
            borderRadius: 5
            padding: 20
            color: white
        }

        container: {
            marginLeft: 30
        }
    }

    CodeBlock(_, ...children){
        container > children;
    }
}