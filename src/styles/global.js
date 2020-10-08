import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
    * {
        margin: 0;
        padding:0;
        outline:0;
        box-sizing: border-box;
    }

    body, input, button {
        font: 16px Montserrat, sans-serif;
    }

    #root {
        
        margin: 0 auto;
        padding: 30px 100px;
    }

    button{
        cursor: pointer;
    }

    @media only screen and (max-width: 500px){
         #root{
             padding: 30px 20px;
         }
    }

    @media only screen and (min-width: 501px) and (max-width:800px){
        #root {
            padding: 30px 50px;
        } 
    }

`;