import type { NextPage } from 'next'
import React, { LegacyRef, useEffect, useRef } from 'react'



const Home: NextPage = () => {
    const linkRef = useRef() as LegacyRef<HTMLAnchorElement> | undefined;
    useEffect(()=> {
        linkRef?.current?.click();
      }, [])
      const CALENDLY_LINK = "https://calendly.com/alexficachi"
    return (
        <a href={CALENDLY_LINK} ref={linkRef}>Redirecting to {CALENDLY_LINK}. Click here if you&apos;re not auomatically redirected.</a>
    )
}

export default Home
