import React from 'react'
import styled from 'styled-components'
import fond from '../assets/pattern-bg.png'
import ResultDetail from '../resultDetail/ResultDetail'
import SearchBar from '../searchBar/SearchBar'

const Header = ({setDataLocalisation,dataLocalisation,getDataIp,setAdressIp,adressIp}) => {




    return(
        <HeaderCont>
           <Title>IP Adress Tracker</Title>
           <SearchBar setDataLocalisation={setDataLocalisation} getDataIp={getDataIp} setAdressIp={setAdressIp} adressIp={adressIp} />
           <ResultDetail dataLocalisation={dataLocalisation} />
        </HeaderCont>


    )
}

const HeaderCont = styled.header`
  background-image : url(${fond});
  width : 100% ; 
  height:30vh;
  position: relative;
  @media only screen and (max-width: 500px){
       height: 30vh;
       min-height: 250px;
  }
`

const Title = styled.h1`
    margin:0;
    padding-top:20px;
    color:white;


`

export default Header