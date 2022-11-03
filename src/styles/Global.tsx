
import {createGlobalStyle, keyframes} from 'styled-components'

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

const GlobalStyles = createGlobalStyle`

	@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
	
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}


	body,html {
		width: 100%;
		height: auto;
		background: #0A2540;
		color: #fff;
		font-size: 18px;
		font-family: 'Roboto', sans-serif;
		overflow-x: hidden;
	}

	body:before {
        content: "";
        position: absolute;
        background: #FFCE48;
        width: 50%;
        height: 50%;
        top: 0;
        left:0;
        clip-path: polygon(36% 0, 0 0, 0 4%);
        animation: ${FadeInLeft} 0.3s ease-in-out;
        animation-fill-mode: backwards;

        @media(max-width: 949px) {
            display: none
        }
    }
    body:after {
        content: "";
        position: absolute;
        background: #FFCE48;
        width: 50%;
        height: 90%;
        bottom: 0em;
        right: 0em;
        clip-path: polygon(100% 100%, 100% 96%, 61% 100%);
        animation: ${FadeInRight} 0.3s ease-in-out;
        animation-delay: 0.2s;
        animation-fill-mode: backwards;

        @media(max-width: 949px) {
            display: none
        }
    }


	img{
		width: 100%;
		object-fit: cover;
	}

	p{
		opacity: 0.7;
		line-height: 25px;
		font-weight: 100;
	}

	h1, h3, h2{
		margin-bottom: 0.5em;
	}

	h1 {
		font-size: 183%;
		line-height: 43px;
		letter-spacing: -0.2px;
	}

	h4 {
		font-size: 83%;
	}

	span {
		font-size: 95%;
	}

	#root {
		width: 100%;
		height: 100%;
	}

`

export default GlobalStyles