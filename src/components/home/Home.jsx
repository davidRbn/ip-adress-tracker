import axios from 'axios'
import React, { useState } from 'react'
// import styled from 'styled-components'
import Header from '../header/Header'
import Map from '../map/Map'
import ResultDetail from '../resultDetail/ResultDetail'

const Home = () => {


    const apiKey = process.env.REACT_APP_API_KEY   
    const [adressIp,setAdressIp] = useState('') //'8.8.8.8'
    const [dataLocalisation,setDataLocalisation] = useState({
        data : [{    ip:'',
                     location:'',
                     timezone:'',
                      isp:'',
                      lat:43.300000,
                      lng:5.400000
                    }],
                    loaded:false
       
        })


const getDataIp = (e) => {
    e.preventDefault()
    axios.get(`
    https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${adressIp}
    `)
    .then(res => setDataLocalisation({
        data:[{ ip:res.data.ip,
            location:res.data.location.city,
            timezone:res.data.location.timezone,
            isp:res.data.isp,
            lat:res.data.location.lat,
            lng:res.data.location.lng
        
        }],
            loaded:true
          
        
    },{  loaded:false}))

}

console.log(dataLocalisation);


    return (

            <>
                <Header dataLocalisation={dataLocalisation} setDataLocalisation={setDataLocalisation} getDataIp={getDataIp} setAdressIp={setAdressIp} adressIp={adressIp} />   
                <Map dataLocalisation={dataLocalisation}/>
           </>
           

    )
}



export default Home