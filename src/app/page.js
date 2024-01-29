// "use client"
import styles from "./page.module.scss";
// import { useEffect, useState } from "react";
import axios from 'axios'
import Link from "next/link";
export default async function  Home() {

  // const [data, setdata] = useState([])

 const getData=async()=>{

const options = {
  method: 'GET',
  url: 'https://virtual-number.p.rapidapi.com/api/v1/e-sim/all-countries',
  headers: {
    'X-RapidAPI-Key': '383f65feecmsh59fae3a633215d3p10f0d8jsn7b28af12b30e',
    'X-RapidAPI-Host': 'virtual-number.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
  // setdata(response.data)
  return response.data;
} catch (error) {
	console.error(error);
}
  }

  // useEffect(() => {
  //   getData()
  
  // return
  // },[0])
  
  const data=await getData();
  

  return (
    <main className={styles.main}>
      
      <div className={styles.serviceText}>
      <span>Search </span>  and find the Service you want
      </div>

      <div className={styles.services}>
        <div className={styles.search}>
          <img src="./Vector.png" alt="" />
          <input type="search" name="services" placeholder="Search the service.." />
        </div>
        <div className={styles.text}>services</div>
        <div className={styles.allServices}>
         {data&& data.map((s,index)=>{
          return(
            <Link href={s.countryCode} key={index} className={styles.singleService} >
            <div className={styles.serviceName}>{s.countryName}</div>
            <div className={styles.servicePrice}>{s.countryCode}₹</div>
          </Link>
          )
         })
         
      }
        </div>
      </div>


    </main>
  );
}
