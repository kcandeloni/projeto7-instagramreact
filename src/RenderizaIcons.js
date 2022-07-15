function RenderizaIcons (props){
    return (
        <div class={props.class}>
            {props.icons.map((icon) => <ion-icon name={icon}></ion-icon>)}
        </div>
    );
}

export default RenderizaIcons;