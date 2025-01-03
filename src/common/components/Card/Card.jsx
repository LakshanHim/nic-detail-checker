import './style1.css'

export function Card({name,name2}){
    return(
        <div className='cd'>
            <p className='name'>{name}</p>
            <p className='name2'>{name2}</p>
        </div>
    )
}