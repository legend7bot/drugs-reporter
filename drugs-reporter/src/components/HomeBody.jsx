import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '@mui/material/Button';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import SosRoundedIcon from '@mui/icons-material/SosRounded';
function HomeBody() {
  return (
    <>
        <div className='row'>
            <div className='col-lg-6 col-md-12'>
                <img className='poster' src="https://thumbs.dreamstime.com/b/say-no-to-drugs-lettering-no-drugs-allowed-drugs-icon-prohibition-red-circle-just-say-no-isolated-illustration-white-157714881.jpg" alt='heheheh'></img>
            </div>
            <div className='col-lg-6 col-md-12'>
            <h1 className='proj-name'>
                Project
            </h1>
            <h2 className='salogan'>
                ek salogan to show how dharmik we are
            </h2>
            <p className='homepagecontent'>
            Lorem, ipsum dolor sit amet consecessimos nisi nesciunt, repellat commodi illum eligendi similique corporis. Quis quidem quae hic ullam quo voluptate quos, obcaecati cumque optio repudiandae aliquid similique nemo velit doloremque fugit. Rerum sunt vero qui cum ducimus, iusto voluptates. Cumque aut quidem, deleniti eos magnam harum eveniet vero? Incidunt corporis nam minus enim debitis et ipsam suscipit rem temporibus. Eos iusto dicta quae temporibus cupiditate vero eum vel ratione ducimus modi, rem repellat soluta maxime illum fugiat? Inventore distinctio sint quo asperiores exercitationem, dolores hic dolor dicta aliquam, quisquam, quia nostrum minima. Animi iure aliquam explicabo accusamus qui. 
            A maxime alias eum, autem ad rerum facere .... 
            <NavLink to= "/about">
                Read more
            </NavLink>
            <br/>
            <br/>
            <span className='leftbtn'>
                <NavLink to="/File%20Report">
                    <Button variant="contained" color="error"> <ReportProblemIcon sx={{margin:"0.5rem"}}/> File Report</Button>
                </NavLink>
            </span>
            <NavLink to="/Awareness%20Programs">
                <Button variant="outlined" color="success" > <SosRoundedIcon sx={{margin:"0.5rem"}}/> Reach for help</Button>
            </NavLink>
            

            </p>
            </div>
            
        </div>
    </>
  )
}

export default HomeBody