import styled, {keyframes} from "styled-components"

const dalayedFade = keyframes`
    0% {
        margin-left: -.5em;
        opacity: 0;
    }
    100% {
        margin-left: 0;
        opacity: 1;
    }
`

const dalayedFadeTotal = keyframes`
    0% {
        opacity: 0;
    }
    75%{
        font-size: 130%;
    }
    100% {
        opacity: 1;
    }
`
const FadeInRight = keyframes`
    0% {
        opacity: 0;
        margin-right: -20em;
        transform: scale(0) rotate(-10deg)
    }
    50% {
        opacity: 0;
        margin-right: -10em;
    }
    90%{
        opacity: 1;
        margin-right: 2em;
        margin-left: -2em;
        transform: scale(1) rotateZ(0)
    }
    100% {
        margin-right: 0;
    }
`

export const InvoiceBoxDiv = styled.div`
    width: 100%;
    height: 98%;
    background: ${({theme})=> theme.colors.brighterBlue};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em 1em 0 1em;
    animation: ${FadeInRight} 0.9s ease-in-out;
    animation-delay: 0.8s;
    animation-fill-mode: backwards;
    z-index: 1;

    @media(max-width: ${({theme}) => theme.tablet}) {
        height: 100vh;
	}
`

export const InvoiceHeader = styled.div`
    height: 10%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3em 0;

    @media(max-width: ${({theme}) => theme.mobile}) {
        text-align: center;
	}

    p {
        font-size: ${({theme})=> theme.fontSize.small};
        margin-top: -0.5em;

        @media(max-width: ${({theme}) => theme.mobile}) {
            text-align: center;
            font-size: 81%;
	    }
    }

    h3 {
        @media(max-width: ${({theme}) => theme.mobile}) {
            margin-bottom: .6em;
	    }
    }
    
    
`

export const  InvoiceBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 77%;

`

export const FirstColumn = styled.div`
    flex:90%;
    height: 40px;
    animation: ${dalayedFade} 0.2s ease-in-out;
`
export const SecondColumn = styled.div`
    flex: 35%;
    height: 40px;
    text-align:right;
    animation: ${dalayedFade} 0.2s ease-in-out;

    @media(max-width: ${({theme}) => theme.mobile}) {
        display: none;
	}
`
export const ThirdColumn = styled.div`
    flex: 40%;
    height: 40px;
    text-align:right;
    animation: ${dalayedFade} 0.2s ease-in-out;

    @media(max-width: ${({theme}) => theme.mobile}) {
        display: none;
	}
`
export const FourthColumn = styled.div`
    flex: 40%;
    height: 40px;
    text-align:right;
    animation: ${dalayedFade} 0.2s ease-in-out;
`

interface itemRowProps {
    itemType: string
}

export const InvoiceRows = styled.div<itemRowProps>`
    display: flex;
    border-bottom: ${props => props.itemType === "single"  ? " 1px solid rgba(255,255,255,0.1)": "0"};
    padding-bottom: .5em;
    color: #fff;
    display: flex;
    align-items: center;
`

export const ItemRow = styled.div<itemRowProps>`
   
    padding: ${props => props.itemType === "single"? ".7em 0": ".7em 0 .7em 1em" };

    @media(max-width: ${({theme}) => theme.mobile}) {
        padding: ${props => props.itemType === "single"? ".7em 0": ".7em 0 .7em 1em" };
	}

    p {
        font-size: ${({theme})=> theme.fontSize.small};
    }
`

export const InvoiceFooter = styled.div`
    border-top: 1px solid rgba(255,255,255,0.1);
    height: 9%;
    width: 100%;
    display: flex;
    align-items: center;
    animation: ${dalayedFadeTotal} 0.5s ease-in-out;
    animation-delay:1.1s;
    animation-fill-mode: backwards;

    div {
        width: 100%;
        font-weight: bold;
        font-size: 120%;

        &:last-child {
            display: flex;
            justify-content: flex-end;
        }
    }

    @media(max-width: ${({theme}) => theme.mobile}) {
        height: 70px;
	}
`

export const ColumnTitle = styled.div`
    display: flex;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    padding-bottom: 0.5em;
`

export const InvoiceNote = styled.div`
    margin-top: 1em;
    animation: ${dalayedFade} 0.2s ease-in-out;

    @media(max-width: ${({theme}) => theme.mobile}) {
        margin-top: 2.5em;
	}
`

export const DescountRow = styled.div`
    display: flex;
    padding-top: .7em;
    animation: ${dalayedFade} 0.2s ease-in-out;
    p {
        flex: 50%;
        font-size: ${({theme})=> theme.fontSize.small};
        &:last-child {
            text-align: right;
        }
    }
`