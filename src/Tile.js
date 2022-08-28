import './App.css'
export default function Tile(props){
    console.log(props.checked)
    let snakeStyle = "Tile"
    if(props.checked) snakeStyle += " checked";
    
    return <div key={props.x.toString() + props.y.toString()}
    className={snakeStyle} >
    </div>
}