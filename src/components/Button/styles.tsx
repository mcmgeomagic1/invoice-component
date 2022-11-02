import styled from "styled-components"


interface styledButtonProps {
    checked: boolean
}
export const StyledButton = styled.button<styledButtonProps>`
    padding: .7em 2em;
    border-radius: 25px;
    border: 0;
    font-weight: bold;
    font-size: 75%;
    background: ${props => props.checked ? "#FFCE48" : "#0C2E4E"};
    color: ${props => props.checked ? "#000" : "#fff"};
    cursor: pointer;
    z-index: 1;

`