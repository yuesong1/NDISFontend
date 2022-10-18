//rfc
import React from 'react'
import { Box, Button } from '@mui/material'

export default function testCanvasAPI() {
    var bearerToken='Bearer vCb6CgirWrVy94LXz2xbcFJRWDkxUOCtWY6SGLascYb4lRPCgksmXCs2xFyUk2xU'
   var token='vCb6CgirWrVy94LXz2xbcFJRWDkxUOCtWY6SGLascYb4lRPCgksmXCs2xFyUk2xU'
    var canvasURL="http://192.168.1.249/api/"

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
              'Accept': '*/*',
            },
           
          });
        result.then(ret => {
            ret.json().then(data => {
              console.log(data)
            })
          })
    }
    function apiGetUserId(){
      
      const result = fetch(canvasURL+'v1/users/self'+'?access_token='+token, {
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
          
          //disable CORS to access local CANVAS server
          // do not attach token in headers, complicated headers will trigger CORS
          // preflight, it use OPTIONS method, this will cause 404 in canvasLMS server
          
        });
      result.then(ret => {
          ret.json().then(data => {
            console.log(data)
          })
        })
  }
    var mockUrl="https://3882fc6c-2378-4ded-9c2a-8bfe920a4972.mock.pstmn.io/NLP/api"
    function getNLPFeedback(){
      console.log('api-NLP module');
      const payload = JSON.stringify({
   
        });
        //change the port as you want
      const result = fetch(mockUrl, {
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
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
                <Button onClick={apiGetUserId}> API:get UID</Button>
                <Button> API:delete course</Button>
                <Button onClick={()=>getNLPFeedback()}> API:MOCK NLP SERVER</Button>


            </Box>


        </div>
        



    </div>
  )
}
