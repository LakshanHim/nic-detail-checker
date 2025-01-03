import './style.css'

export function TextField({onChange}){
    return(
        <input onChange={onChange} className='num' placeholder='Enter NIC no: (Remove first 2 digits if NIC has 12 numbers)' type="text" />
    )
}