import styled from 'styled-components';


export const BtnContent = styled.div`
    display:flex;
    flex-direction:row;
    align-items: flex-end;
    height:220px;

    button{
        background-color:transparent;
        border:none;
    }
`;

export const CardImage = styled.div`
 
  float:left;
  width: auto;
  height: 503px;
  min-width:250px;
  box-sizing: border-box;
  border: 0;

    img{
        width:25vw;
        min-width:250px;
        height:503px;
        object-fit:cover;

    }

`;

export const CardText = styled.div`
   
   display:flex;
   flex-direction:column;
    width:50%;
    height: 503px;
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
   
    width:  50vw;
    height: auto;
    min-width: 500px;
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

