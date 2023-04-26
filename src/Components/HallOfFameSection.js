 
import React from "react";
import HallOfFameCard from "./HallOfFameCard";
import person1 from "../assets/images/person1.jpeg";
import person2 from "../assets/images/person2.jpeg";
import person3 from "../assets/images/person3.jpeg";


const HallOfFameSection = () => {
  return (
    <div> 
      <p className="text-5xl text-center mt-14 text-blue-800 font-semibold">Hall of fame</p>
      <div className="flex justify-evenly my-24">
        <HallOfFameCard img={person1} alt={"person1"} name="SUNIL RAMESH DODDAMANI" designation={"SUNIL RAMESH DODDAMANI"} description="Hi All, I am a student of the NOV 2021 batch, I made a good decision by joining the Ineuron classes. A very big thank you to the entire ineuron team And special thanks to Krish Naik and Sudhanshu."/>
        <HallOfFameCard
          img={person2}
          alt={"image"}
          name="sai krishna gorantla"
          designation="Data Analyst, Tredence Analytics"
          description="Ineuron.ai came into existence exactly when I needed it the most. It helped me transition into Data science as Senior Data Engineer at blazeclan technologies and with the help of ineuron courses and internship,.."
        />
        <HallOfFameCard
          img={person3}
          alt={"image"}
          name="Dharmendra kumar Yadav"
          designation="Data Scientist Associate, Cognizant"
          description="Hello everyone I am an undergraduate from SRM University. I got placed in the Tredence Analytics it is all because of the excellent course called full stack data scientist in the ineuron."
        />
      </div>
      <p className="text-center text-slate-600 font-semibold">View More</p>
    </div>
  )
}

export default HallOfFameSection