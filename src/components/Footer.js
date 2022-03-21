import React, { Component } from 'react'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';


export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab title="Eemeli Kyrölä" size="small" onClick={() => window.open('https://www.linkedin.com/in/eemeli-kyr%C3%B6l%C3%A4-8b53731b7/')}>
                <LinkedInIcon />
            </Fab>
            <Tooltip title="+358 400 998 515">
                <Fab size="small" onClick={() => alert('kopioitu') && navigator.clipboard.writeText('+358 400 998 515')}>
                    <PhoneIcon />
                </Fab>
            </Tooltip>
            <Tooltip title="eemeli.kyrola@gmail.com">
                <Fab size="small" onClick={() =>  navigator.clipboard.writeText('eemeli.kyrola@gmail.com')}>
                    <EmailIcon />
                </Fab>   
            </Tooltip>
            <Fab title="GitHub" size="small" color="secondary">
                <GitHubIcon />
            </Fab>
        </Box>
      </div>
      
    )
  }
}
