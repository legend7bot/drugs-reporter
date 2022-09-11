import React ,{useState} from 'react'
import Navbar from "../components/Navbar"
import Report from '../components/Report'
import Footer from "../components/Footer"
function FileReport() {
  const [data,setData]=useState({
    name:"",
    email:"",
    location:"",
    pincode:"",
    sightingTime:"",
    type:"",
    description:""
  });
  return (
    <div style={{backgroundColor:"rgba(400, 222, 222, 0.795)"}}>
        <Navbar />
        <Report data={data} setData={setData} />
        <Footer />
    </div>
  )
}

export default FileReport