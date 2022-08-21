//rfc
import React from 'react'
import { Box, Button } from '@mui/material'

export default function testCanvasAPI() {
    var token='Bearer WRKXTiazrqOTRgFwOYymCST02bvYb7IY9z81YyaLBonA4gZHPYOeQPhC2zaElp67'
    var canvasURL="http://192.168.1.200/api/"

    function apiGetCourselist(){
        
        console.log('api-get-courses');
        const payload = JSON.stringify({
            name: 'newCourse',
          });
          //change the port as you want
        const result = fetch(canvasURL+'v1/courses', {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            
            //disable CORS to access local CANVAS server
            //once disabled, authorization can't be attached to header
            //mode:"no-cors",
            
            headers: {
              accept: 'application/json',
              'Authorization': token,
              'Content-Type': 'application/json',
            
              
              
              
              
            },
           
          });
        result.then(ret => {
            ret.json().then(data => {
              console.log(data)
            })
          })
    }

    return (
    <div style={{width:'100%'}}>
        <div>
            <Box component="form" 
            style={{background: '#fff'}}>
                <Button onClick={()=>apiGetCourselist()}> API:get courses</Button>
                <Button> API:create course</Button>
                <Button> API:delete course</Button>


            </Box>


        </div>
        



    </div>
  )
}
