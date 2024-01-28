"use client"
import axios from 'axios';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
const Index = () => {

    const params = useParams();
    const [sms, setSms] = useState([])
    const getSms = async () => {

        const options = {
            method: 'GET',
            url: 'https://virtual-number.p.rapidapi.com/api/v1/e-sim/view-messages',
            params: {
                countryId: params.phoneNo,
                number: params.sms
            },
            headers: {
                'X-RapidAPI-Key': '383f65feecmsh59fae3a633215d3p10f0d8jsn7b28af12b30e',
                'X-RapidAPI-Host': 'virtual-number.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            setSms(response.data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        return () => {
            getSms()
        }
    }, [0])


    return (
        <div className={styles.sms}>
            
            <div className={styles.mess} >
                {
                    sms.map((s,i)=>{
                        return(
                        <div style={{color:"white"}} key={i}>
                           {s.text}
                        </div>)
                    })
                }
            </div>
        </div>
    )
}

export default Index