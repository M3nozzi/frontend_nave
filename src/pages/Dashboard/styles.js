import styled from 'styled-components';
import { shade } from 'polished';


export const Container = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top:2%;
    margin-bottom: 10px;
  
    h1 {
    font-size: 40px;
    line-height: 48px;
    font-weight: 600;
    margin-left: 6%;
  }

  a{
    margin-right: 4%;
  }

  @media (max-width: 370px) {
     h1 {
      display: none;
    }
      a {
      margin: auto;
    }
  }

  button {
        width: 176px;
        height:40px;
        background:#212121;
        color: #FFF;
        margin-right: 32px;
        transition: background-color 0.2s;
        margin: 32px 32px 32px 32px;
        &:hover{
            background:${shade(0.9, '#212121')}
        }

    }

`;

export const Text = styled.span`
text-align: left;
`;

export const Navers = styled.div`
  display:inline-block;
  left: 32px;
  top: 193px;
  border-radius: 0px;
  
    div{
      margin: 32px 32px;
      height: 420px;
      width: 281px;
      transition: transform 0.2s;

      &:hover{
            transform: translateX(10px);   
        }
    }



    img{
      cursor: pointer;
      width: 100%;
      margin-bottom:16px;
    }


    h4{
      font-weight:bold;
      text-align: left;
    }
    p{
      size: 16px;
      margin-left:0px;
      margin-top:8px;
      margin-bottom:4px;
      text-align: left;
    }

    svg{
       text-decoration:none;
       color: #212121;
       margin-top: 13px;
       margin-left:0px;
       margin-right:16px;
       -moz-transition: all 0.3s;
	     -webkit-transition: all 0.3s;
	     transition: all 0.3s;

       &:hover{
                -moz-transform: scale(1.8);
	            -webkit-transform: scale(1.8);
	            transform: scale(1.8);
            
       }
    }

    button {
      background-color:transparent;
      border:none;
      display:block;
      align-items:left;
      margin-right:0;
      padding:0px 0px;
    }

  

   
`;

export const Group = styled.span`
  position: absolute;
  top: 50%; 
  left: 50%; 

`;

export const List = styled.ul`
  text-align: center
`;