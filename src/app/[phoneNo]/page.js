"use client"
import React, { useEffect, useState } from 'react'
import styles from './page.module.scss'
import { useParams,usePathname } from 'next/navigation'
import axios from 'axios'
import Link from 'next/link'
const Index = () => {
  const router=useParams();
  const path=usePathname();
const [number, setnumber] = useState([])
  const getData=async()=>{

const options = {
  method: 'GET',
  url: 'https://virtual-number.p.rapidapi.com/api/v1/e-sim/country-numbers',
  params: {countryId: router.phoneNo},
  headers: {
    'X-RapidAPI-Key': '383f65feecmsh59fae3a633215d3p10f0d8jsn7b28af12b30e',
    'X-RapidAPI-Host': 'virtual-number.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
setnumber(response.data)
} catch (error) {
	console.error(error);
}
  }

  useEffect(() => {
    getData()
  },[0])
  
  return (
    <div className={styles.home}>
     <div>
      {
        number.map((n,i)=>{
          return(
            <div key={i}>
              <Link className='link' href={`${path}/${n}`}>
                {n}
              </Link>
            </div>
          )
        })
      }
     </div>
    </div>
  )
}

export default Index