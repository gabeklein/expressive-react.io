import { Field as LibField } from 'react-final-form'
import MUICheckBox from '@material-ui/core/Checkbox'

export class Field {

    Field(props){

        const {
            type,
            label = "",
            id = label,
            children = [label],  
            style = {}, 
            className,
            component = "input"
        } = props;

        const labelText = component != "select" && children || label;
        const Container = labelText ? "label" : "div";

        Container, do {
            display: flex;
            flexDirection: column;
            
            [labelText || false]

            LibField(~style), do {
                name = id || typeof children == "string" && label.toLowerCase().replace(" ", "") || null;
                component = component;
                className = className;
                type = type || !component ? `text` : undefined;

                [component != "input" ? children : undefined]
            }
        }
    }
}

export class CheckBoxList {

    CheckBoxList({ children, values = children, id, className }){
        if(!Array.isArray(values)) {{ return false; }}
        for(const option of values)
            Box, label = option, id = id, className = className;
    }

    Box(props){
        const {
            id, 
            children, 
            className,
            style, 
            label = typeof children == "string" ? children : undefined, 
        } = props;

        const value = label && 
            [].reduce.call(
                label.toLowerCase(),
                (y, x, i) => {
                    return y + (label[i] !== x ? `_${x}` : x)
                }, ""
            )
            .replace(/^_/, "")
            .replace(" ", "_")
            .replace("__", "_")

        html-label(className = className, ~style), do {
            LibField,
                name = id,
                
                component = MUICheckBox,
                type `checkbox`,
                value = value;

            [label];
        }
    } 
}

export { Form, Field as LibField } from "react-final-form"
