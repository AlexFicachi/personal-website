import { Box, Button, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

const imageStyles = {
  borderRadius: "100%",
  height: 120, 
  width: 120
}

function BasicCard() {
  return (
    <div style={{
      border: "solid 1px #ddd",
      borderRadius: 10,
      padding: "1rem",
      display: "flex",
      flexDirection: "column",
      alignItems:" center",
      width: 400,
    }}>
        <div style={{
          height: 140,
          display: "flex",
          alignItems: "center",
        }}>
          <Image 
              alt="DevBolt logo"
              src="/solid-gold-bold-white-text.png"
              width={200}
              height={200}
            />
          </div>
          <Typography>
            Devbolt is a coding bootcamp that helps people land top paying software engineering jobs through personalized mentorship and science based education technology.
          </Typography>
          <br/><br/>
        <Link href="https://devbolt.io/"><Button fullWidth variant="contained" sx={{padding: 1.6}}>Learn More</Button></Link>
    </div>
  );
}



const Home: NextPage = () => {
  return (
    <>
    <Head>
         <title>Alex Ficachi &mdash; Founder of Devbolt</title>
        <link rel="icon" href="/profile-pic.png" />
    </Head>
      <Box sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "4rem",
          marginBottom: "3.5rem",
          gap: "2.5rem",
        }}
      >
        <Image 
          alt="profile pic" 
          src="/profile-pic.png" 
          width={200}
          height={200}
          style={imageStyles}
        />
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem"}}>
          <Typography variant="h4" sx={{fontWeight: 500}}>Hi, I&apos;m Alex Ficachi</Typography>
          <Typography variant="h4" sx={{textAlign: "center"}}>I&apos;m the founder of Devbolt:</Typography>
        </Box>
        <BasicCard/>
      </Box>
    </>
  )
}

export default Home
