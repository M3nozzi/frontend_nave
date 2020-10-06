import styled from 'styled-components';


export const Mod = styled.div`
    position: fixed; 
    background: white; 
    width: 592px; 
    height: 160px; 
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%); 
        div {
             margin: 0 auto; 
             width: 100%; 
             display: flex; 
             justify-content: space-between; 
             align-items: end; 
            }
         
         svg { 
             margin: 29px 29px 0 0; 
           } 
`;

export const ModalSubText = styled.p` 
    font-size: 1rem; 
    font-weight: 400; 
    margin: 24px 0px 32px 32px;
`;


export const ModalText = styled.p` 
    margin: 32px 32px 0 32px; 
    font-size: 1.5rem; 
    font-weight: 600; 
    line-height: 2.25rem;
`;

export const Container = styled.div`
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 100%; 
    background: rgba(0, 0, 0, 0.5)

`;


