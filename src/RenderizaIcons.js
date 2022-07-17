function RenderizaIcons (props){
    return (
        <div className={props.class}>
            {props.icons.map((icon) => <ion-icon name={icon}></ion-icon>)}
        </div>
    );
}

export default RenderizaIcons;