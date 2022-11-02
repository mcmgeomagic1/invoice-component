import styled, { keyframes} from "styled-components"



const FadeIn = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`

const FadeInLeft = keyframes`
    0% {
        width: 0;
        left: -10em;
    }

    100% {
        width: 50%;
        left: 0;
    }
`

const FadeInRight = keyframes`
    0% {
        width: 0;
        right: -10em;
    }

    100% {
        right: 0;
    }
`
export const GranualControlSection = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    p {
        color: ${({theme})=> theme.colors.textColor};
        opacity: 1;
    }

    &:before {
        content: "";
        position: absolute;
        background: ${({theme})=> theme.colors.primary};
        width: 50%;
        height: 50%;
        top: 0;
        left:0;
        clip-path: polygon(36% 0, 0 0, 0 4%);
        animation: ${FadeInLeft} 0.3s ease-in-out;
        animation-fill-mode: backwards;

        @media(max-width: ${({theme}) => theme.mobile}) {
            display: none
        }
    }
    &:after {
        content: "";
        position: absolute;
        background: ${({theme})=> theme.colors.primary};
        width: 50%;
        height: 90%;
        bottom: 0em;
        right: 0em;
        clip-path: polygon(100% 100%, 100% 96%, 61% 100%);
        animation: ${FadeInRight} 0.3s ease-in-out;
        animation-delay: 0.2s;
        animation-fill-mode: backwards;

        @media(max-width: ${({theme}) => theme.mobile}) {
            display: none
        }
    }
`

export const FlexLayout = styled.div`
    display: flex;
    grid-gap: 10%;
    height: 78vh;
    width: 100%;

    @media(max-width: ${({theme}) => theme.tablet}) {
		width: 100%;
        height: 90vh;
	}

    @media(max-width: ${({theme}) => theme.mobile}) {
		flex-direction: column;
        grid-gap: 2em;
	}
`

export const Flex1 = styled.div`
    flex: 30%;
    padding: 0 0.8em;
    animation: ${FadeIn} 0.7s ease-in-out;
    animation-delay: 0.7s;
    animation-fill-mode: backwards;

    @media(max-width: ${({theme})=> theme.mobile}) {
        flex: 0%;
    }

    span {
        margin-bottom: 5em;
        color: ${({theme})=> theme.colors.primary};
        font-weight: bold;
    }

    h1 {
        margin-top: 0.8em;
        margin-bottom: .8em;
        width: 95%;
    }
`

export const Flex2 = styled.div`
    flex: 40%;
    display: flex;
    justify-content: right;

    @media(max-width: ${({theme})=> theme.mobile}) {
        flex: 100%;
    }
`
export const CheckBoxDiv = styled.div`
    @media(max-width: ${({theme})=> theme.mobile}) {
        display: none;
    }
`

export const ButtonDiv = styled.div`
    width: 100%;
    display: none;
    overflow-x: scroll;

    &::-webkit-scrollbar {
		width: 0;
        display: none;
	}
    padding-top: 2em;

    @media(max-width: ${({theme})=> theme.mobile}) {
        display: block;
    }

`

export const Scrollable = styled.div`
    display: flex;
    width: 280%;
    grid-gap: 1em;

    @media(max-width: ${({theme}) => theme.tablet}) {
        width: 157.5%;
	}

    @media(max-width: ${({theme}) => theme.mobile}) {
        width: 255%;
	}

    @media(max-width: ${({theme}) => theme.smallerDevices}) {
        width: 325%;
	}
    @media(max-width: ${({theme}) => theme.smallerDevices2}) {
        width: 360%;
	}
    @media(max-width: ${({theme}) => theme.GalaxyFold}) {
        width: 466%;
	}
`
