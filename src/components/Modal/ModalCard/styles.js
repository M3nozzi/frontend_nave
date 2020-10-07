import styled from 'styled-components';


export const CardImage = styled.div`
  background-position: center;
  float:left;
  width: 50%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;  
  border: 0;
`;

export const CardText = styled.div`
    /* border: 2px solid #C53030; */
    float:right;
    width:50%;
    height: 100%;
    padding-left: 4%;
    padding-top:5%;
    color:#212121;
    border: 0;

    h1{
        size:24px;
        margin-bottom:10px;
        line-height:24px;
    }

    p{
        size:16px;
        margin-top:0px;
        margin-bottom:10px;
    }

    h5{
        size:16px;
        font-weight: bold;
        margin-top:0px;
        margin-bottom:10px;

    }

   
`;

export const Card = styled.div`

    position:fixed;
    /* border: 2px solid #C53030; */
    width: 1006px;
    height: 503px;
    top: 50%; 
    left: 50%; 
    background: #FFFFFF;
    transform: translate(-50%, -50%);
   
         svg { 
             
             text-decoration: none;
             color:#212121;
             margin: 29px 29px 0 0; 
             -moz-transition: all 0.3s;
	        -webkit-transition: all 0.3s;
	        transition: all 0.3s;


             &:hover{
                -moz-transform: scale(1.8);
	            -webkit-transform: scale(1.8);
	            transform: scale(1.8);
            
             }

        } 


        svg.FiX{
            position:absolute;
             margin: 29px 29px 0 0; 
             right:0;
        }
`;


export const Container = styled.div`
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 100%; 
    background: rgba(0, 0, 0, 0.5)

`;

