import styled, {keyframes} from 'styled-components'

const animation = keyframes`
    0% {
        height: 0%;
        opacity: 0;
		border-left: 1px dashed rgba(255,255,255,0.9);
    }
    100% {
        height: 100%;
        opacity: 1;
		border-left: 1px dashed rgba(255,255,255,0.1);
    }
`

export const Row = styled.div`
	width: 1095px;
	height: 100vh;
	margin: 0 auto;
	position: relactive;
	border-left: 1px solid rgba(255,255,255,.1);
	border-right: 1px solid rgba(255,255,255,.1);
	display: flex;
	align-items: center;
	position: relative;

	@media(max-width: ${({theme}) => theme.tablet}) {
		width: 97%;
	}

	@media(max-width: ${({theme}) => theme.mobile}) {
		width: 95%;
	}

	&:before {
		content: "";
		position: absolute;
		width: 0px;
		height: 100%;
		border-left: 1px dashed rgba(255,255,255,0.1);
		top: 0;
		left: 32%;
		animation: ${animation} 0.9s ease-in-out;
		animation-fill-mode: backwards;
	}
	&:after {
		content: "";
		position: absolute;
		width: 0px;
		height: 100%;
		border-left: 1px dashed rgba(255,255,255,0.1);
		top: 0;
		right: 32%;
		animation: ${animation} 0.9s ease-in-out;
		animation-delay: 0.4s;
		animation-fill-mode: backwards;
	}
`