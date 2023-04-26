 

 
import React from "react";
import HardWorkCard from "./HardWorkCard";
import cardImg from "../assets/images/credit-card-icon.svg";
import studentImg from "../assets/images/student-icon.svg";
import bookImg from "../assets/images/books-icon.svg";


const HardWorkShortCutSection = () => {
  return (
     <>
       <h1 className="mt-16 text-5xl text-center text-blue-800 font-medium">Pure Hardwork, No Shortcuts!</h1>
       <div className="border-t-4 w-36 border-[#EAAA2E] mx-auto mt-3"></div>
       <div className="flex justify-evenly mt-16">
         <HardWorkCard img={bookImg} alt={"book img"} count="600+" discription = "Different Courses" />
         <HardWorkCard img={studentImg} alt={"student Img"} count="700000+" discription="Students Enrolled"/>
         <HardWorkCard img={cardImg} alt={"Card Img"} count="10000+" discription="Successful Transition"/>
         
       </div>
     </>
  )
}

export default HardWorkShortCutSection
