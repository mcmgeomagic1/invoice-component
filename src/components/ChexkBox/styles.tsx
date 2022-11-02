import styled from "styled-components"
import plus  from "../../assets/images/plus.png"
import check  from "../../assets/images/check.png"

export const BillingOptionRow = styled.div`
    margin-top: 1.3em;
    display: flex;
    grid-gap: 0.5em;
    cursor: pointer;

    div {
        cursor: pointer;
        &:last-child {
           padding-left: .9em;
        }
    }

    p {
        font-size: ${({theme})=> theme.fontSize.small};
    }

    &:hover {
        label {
                &:after {
                    opacity: 0.7;
                    transition: all 0.4s;
                }
        }
    }
`
interface HiddenCheckBoxProps {
    checked: boolean
}

export const HiddenCheckbox = styled.input.attrs({type: 'checkbox'})<HiddenCheckBoxProps>`
    display: none;
`
interface LabelProps {
    checked: boolean
}
export const Label = styled.label<LabelProps>`
        font-size: ${({theme})=> theme.fontSize.small};
        font-weight: bold;
        position: relative;
    
        &::before {
            content: "";
            position: absolute;
            background: url(${plus});
            background-size: contain;
            width: 15px;
            height: 15px;
            left: -1.5em;
            top: 0em;
            display: ${props=> props.checked ? "none": "block"};
            cursor: pointer;
        }

        &::after {
            content: "";
            position: absolute;
            background: url(${check});
            background-size: contain;
            width: 15px;
            height: 15px;
            left: -1.5em;
            top: 0em;
            transform: ${props=> props.checked ? "scale(1) rotateZ(0deg)" : "scale(0) rotateZ(10deg)"};
            transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
            cursor: pointer;
        }
      
`
interface StyledCheckBoxProps {
    checked: boolean
}
export const StyledCheckBox = styled.div<StyledCheckBoxProps>`
    background: url(${props=> props.checked ? check : plus});
    background-size: contain;
    background-repeat: no-repeat;
    object-fit: cover;
    width: 15px;
    height: 15px;
`