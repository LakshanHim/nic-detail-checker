import './button.css'
import cross from "./cross2.jpg";

export function Button({name="Submit",onClick}){
    return(
        <button onClick={onClick} className='btn'>{name}</button>
    )
    
}
export  function RoundBtn(){
    return (
       <button className='btnR'><img className='clz' src={cross} alt=""/></button>
    )
}
    