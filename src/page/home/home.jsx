import avatar1 from "../../avatar1.jpg";
import m4 from "../../m4.jpg";
import blog from "../../components/blog.webp";
import blogg from "../../components/blogg.webp";
// import Button from "../../components/button/button";
import Head from "../../components/header/head";
import Box from "../../components/gridbox/box";
import Foot from "../../components/footer/foot";
import Discoverbox from "../../components/gridbox/dicovercard";
// import Form from "../../components/form/form";
// import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import '../../App.css';
import Profile from "../../components/profile/profile";
import './home.css';
import Form from "../../components/form/form";


function Home() {
const boxes = [
    {
      img: m4,
      title: "Hydrogen-Powered Vehicles",
      description:
        "This article delves into hydrogen fuel cells and their environmental benefits",
    },
    {
      img: blog,
      title: "Timeless stone Masterpiece",
      description:
        "Witness the breathtaking craftsmanship and enduring legacy of tamil nadu's most celebrated temple.",
    },

    {
      img: blogg,
      title: "Mars Colonization and Beyond",
      description:
        "This article takes readers on a journey through space exploration.",
    },
  ];



  return (
    <>
      <nav className="head">
        <Head
          logo="MR_JACK"
          home="HOME"
          about="ABOUT US"
          contact="CONTACT US"
          docs="DOCS"
        />
      </nav>

      
      <Profile 
      image={avatar1} 
      name="JacK_SparroW" 
      posts="323" 
      followers="3.5k" 
      following="260" 
      about="A wordsmith who believes in the power of language to shape our
              world, inspire change, and connect us all. I bring a unique
              perspective to the writing, blending the knowledge and experiences
              into thought-provoking narratives."/>

              <br></br>


        <h1 className="check">Check my latest blog posts</h1>

      <Grid container spacing={4}>
        
      {boxes.map((box) => (
          
            <Grid size={{ lg: 3, md: 6, xs: 12, sm: 6 }}>
              <Box
                img={box.img}
                title={box.title}
                description={box.description}
              />
            </Grid>
        ))}
        <Grid size={{ lg: 3, md: 6, xs: 12, sm: 6 }}>
        <Discoverbox />
        </Grid>
      
      </Grid>
        <Form/>
      <Foot
        company="Company "
        about="About Us"
        team="Team"
        product="Product"
        blog="Blog"
        pric="Pricing"/>
       
    

      
      {/* <div>
        <Button label="login" btnType="Secondary" customStyle="after" />
        <Button label="block"  />        

      {/* <Button label="follow" className='extra'/> */}
      {/* </div>   */} */

      {/* <div className="head1"></div>
      <div className="container">
        <div className="profile-card">
          <img src={avatar1} alt="profile" className="profile-img" />
          <div className="profile-name">
            <h1>Emma Roberts</h1>
            <div className="posts">
              <span>
                <strong>323</strong>Posts
              </span>
              <span>
                <strong>3.5k</strong>Followers
              </span>
              <span>
                <strong>323</strong>Following
              </span>
            </div>
            <p className="parah">
              A wordsmith who believes in the power of language to shape our
              world, inspire change, and connect us all. I bring a unique
              perspective to the writing, blending the knowledge and experiences
              into thought-provoking narratives.
            </p>
            <a href="/" className="more">
              MORE ABOUT ME &rarr;
            </a>
          </div>
        </div>
      </div> */}
      
      {/* 
      <div className="box">
        <Box
          image={m4}
          title="Hydrogen-Powered Vehicles"
          description="This article delves into hydrogen fuel cells and their environmental benefits."
        />

        <Box
          image={blog}
          title="Mental Health in the Digital Age"
          description="This article explores social media usage and mental health."
        />

        <Box
          image={blogg}
          title="Mars Colonization and Beyond"
          description="This article takes readers on a journey through space exploration."
        />
       
      </div> */}
      
        {/* <div className="box" > */}
        

      {/* <div size={{ lg: 2, md: 6, xs: 12, sm: 6 }}>
        <Form data={Forms} />
      </div> */}

      {/* </div> */}
      {/* <div className="foot"> */}
     
      {/* </div> */}
      
    </>

);
}

export default Home;   