import React from 'react'
import styles from './index.module.scss'
import Link from 'next/link'
// import Image from 'next/image'
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.brand}>
        <Link className='link' href='/'>Paid Sms</Link>
      </div>
      <div className={styles.pages}>
          <div>Home</div>
          <div>Contact Us</div>
          <div>Join Channel</div>
          <div>Services</div>
          <div>About</div>
        
      </div>
      <div className={styles.account}>
        {/* <Image src="" alt="" /> */}
        <div className={styles.signUp}>
          Sign UP
        </div>

        <div className={styles.login}>
          Log-in
        </div>
      </div>
    </div>
  )
}

export default Header