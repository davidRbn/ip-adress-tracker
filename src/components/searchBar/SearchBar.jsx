import React from 'react'
import styled from 'styled-components'
import logoInput from '../assets/icon-arrow.svg'


const SearchBar = ({setDataLocalisation,getDataIp,setAdressIp,adressIp}) => {



  

    return (
       <Form onSubmit={getDataIp}>
           <InputSearch type='text' placeholder='Search for any IP adress or domain'  onChange={e => setAdressIp(e.target.value)}></InputSearch>
           <InputSubmit type="submit" value='' />
       </Form>

    )
}

const Form = styled.form`

  display:flex;
  justify-content:center;
  align-items:center;
  margin: 0 20px ;

`

const InputSearch = styled.input`
       margin-top:20px; 
       width:380px;
       height:40px;
       border:none;
       border-radius: 10px 0 0 10px;
       padding-left:20px;

`
const InputSubmit = styled.input`
    height:42px;
    width:45px;
    border:none;
    background-color:black;
    background-image:url(${logoInput});
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 0 10px 10px 0;
    color:white;
    font-size:16px;
    font-weight: 1000;
    bottom: -10px;
    position: relative;

`

export default SearchBar