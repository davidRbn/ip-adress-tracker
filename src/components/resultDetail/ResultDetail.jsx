import React from 'react'
import styled from 'styled-components'

const ResultDetail = ({dataLocalisation}) => {

const data = dataLocalisation.data[0]
console.log(dataLocalisation);

    return(
      <>

       { dataLocalisation.loaded ? <DivResult>
             
                 <DivData >
                     <div>
                        <H3Data>IP ADRESS</H3Data>
                        <PData >{data.ip}</PData> 
                    </div>
                    <Span/>     
                        <div>
                          <H3Data>LOCATION</H3Data>
                          <PData>{data.location}</PData>
                         </div>  
                    <Span/>     
                            <div>    
                                <H3Data>TIMEZONE</H3Data>
                               {data.timezone && <PData>UTC {data.timezone}</PData>}
                            </div>
                    <Span/>     

                            <div>
                                 <H3Data>ISPData</H3Data>
                                 <PData>{data.isp}</PData>     
                             </div>            
                </DivData>
             

              
        </DivResult>: null}
        </>

    )


}

const DivResult = styled.div`
       width:80%;
       height:120px;
       background-color:white;
       border-radius:15px;
       position: absolute;
       bottom: -60px;
       z-index: 10;
       left: 50%;
       transform: translateX(-50%);
       @media only screen and (max-width: 500px){
           height: auto;
          height:220px;
          bottom: -110px;
  }
       
`  
const DivData = styled.div`
            display:flex;     
            justify-content: space-around;
            height: 100%;
            align-items: center;
  @media only screen and (max-width: 500px){
      flex-direction: column;
      justify-content: center;
  }

`
const Span = styled.span`
        border: 1px solid black;
        height: 40px;
        margin:auto 0;
        opacity:0.3 ;
        @media only screen and (max-width: 500px){
       display: none;
  }
`

const H3Data = styled.h3`
      color: grey;
      font-weight: 500;
      font-size: small;
     @media only screen and (max-width: 500px){
       margin: 10px 0 10px 0;
       
  }

`

const PData = styled.p`

@media only screen and (max-width: 500px){
       margin: 5px;
  }

`



export default ResultDetail