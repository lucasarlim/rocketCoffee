import styled from "styled-components";

export const Container = styled.div`
    display: flex;

    padding: 11px 40px; 
    cursor: pointer;

    border: 1px solid var(--button);
    border-radius: 8px;

    transition: background-color 0.3s ease-out;

    &: hover, focus{
        background-color: var(--button);
    }
`

export const Label = styled.p`
    font-size: 11px;
    font-weight: 700;
    color: var(--text-color);
`