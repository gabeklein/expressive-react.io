export class MobileHeader {

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
    }

    MobileHeader(){

    }
}