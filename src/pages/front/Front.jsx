import { RoundBtn } from '../../common/components/Button/Button';
import './front.css'
import reactLogo from "./nic.png";


export function FrontPage({click}) {
    return (
        <div className='one'>
            <h1>Check NIC details</h1>
            <div className='hover' onClick={click}>
                <div className='hr'>
                    <div className="text">Click</div>
                </div>
                <img  className='image' src={reactLogo} alt="react logo" />
            </div>

        </div>


    )

}
