// "use client"
// import React, { useEffect, useState } from 'react'
import styles from './page.module.scss'
import { useParams,usePathname } from 'next/navigation'
import axios from 'axios'
import Link from 'next/link'
const Index = async(props) => {
  // const router=useParams();
  // const path=usePathname();
// const [number, setnumber] = useState([])
  const getData=async()=>{

const options = {
  method: 'GET',
  url: 'https://virtual-number.p.rapidapi.com/api/v1/e-sim/country-numbers',
  params: {countryId: props.params.phoneNo},
  headers: {
    'X-RapidAPI-Key': '383f65feecmsh59fae3a633215d3p10f0d8jsn7b28af12b30e',
    'X-RapidAPI-Host': 'virtual-number.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
return response.data
} catch (error) {
	console.error(error);
}
  }

  // useEffect(() => {
  //   getData()
  // },[0])
  const number=await getData()

  return (
    <div className={styles.home}>
     <div>
      {
        number&&number.map((n,i)=>{
          return(
            <div key={i}>
              <Link className='link' href={`${props.params.phoneNo}/${n}`}>
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