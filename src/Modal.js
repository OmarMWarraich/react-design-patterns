import { useState } from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
`;

const ModalBody = styled.div`
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
`;

const ModalClose = styled.span`
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    &:hover,
    &:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }
`;

export const Modal = ({ children }) => {
    const [shouldShow, setShouldShow] = useState(false);

    return (
        <>
          <button onClick={() => setShouldShow(true)}>Open Modal</button>
          {shouldShow && (
            <ModalBackground onClick={() => setShouldShow(false)}>
                <ModalBody onClick={(e) => e.stopPropagation()}>
                    <ModalClose onClick={() => setShouldShow(false)}>Close</ModalClose>
                    {children}
                </ModalBody>
            </ModalBackground>
          )}
        </>
    );
};