import { Button, RoundBtn } from '../../common/components/Button/Button';
import { Card } from '../../common/components/Card/Card';
import { TextField } from '../../common/components/TextField/TextField';
import './back.css'
import reactLogo2 from "./nic2.jpg";
import React, { useState } from 'react'
// import lankaNIC from "lanka-nic-2019"
import lankaNIC from "lanka-nic"

export function BackPage({ click }) {
    const [id, setId] = useState("");
    const [info, setInfo] = useState({
        dateOfBirth: "",
        gender: "",
    });

    function clickSub() {
        let { dateOfBirth, gender } = lankaNIC.getInfoFromNIC(id);
        const formattedDate = dateOfBirth instanceof Date
            ? dateOfBirth.toLocaleDateString() 
            : "";

        setInfo({ dateOfBirth: formattedDate, gender });
    }


    return (
        <div className='two'>

            <div className='cover'>
                <div onClick={click} className='RoundBtn'>
                    <RoundBtn />
                </div>
                <img className='img' src={reactLogo2} alt="react logo" />
                <div className='type'>
                    eg:XXXXXXXXXV 
                </div>
                <div className='ele'>

                    <TextField onChange={(id) => { setId(id.target.value) }} />

                    <Button onClick={clickSub} />
                    <Card name={"NIC No"} name2={id} />
                    <Card name={"Birthday"} name2={info.dateOfBirth} />
                    <Card name={"Gender"} name2={info.gender} />
                </div>
            </div>

        </div>
    )
}