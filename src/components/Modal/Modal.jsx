import React from 'react';

import { FiX } from 'react-icons/fi';

import { Container, Mod, ModalText, ModalSubText } from './styles';


const Modal = (props) => {
    {
        let fix = props.children.split(",");
        const handleModalWrapper = () => { props.setVisible(false); };

        return (
            <>
                {props.visible && (
                    <Container onClick={handleModalWrapper}>
                        <Mod>
                            <div>
                                <ModalText>{fix[0]}</ModalText>
                                <FiX size={20}/>
                            </div>
                            <ModalSubText>
                                {fix[1]}
                            </ModalSubText>
                        </Mod>
                    </Container>
                )}
            </>
        );
    };
};

export default Modal;
