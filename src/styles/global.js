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
        padding: 24px 20px;
    }

    button{
        cursor: pointer;
    }
`;