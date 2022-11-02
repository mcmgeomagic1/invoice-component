
import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`

	@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
	
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body,html {
		width: 100%;
		height: 100%;
		background: "#0A2540";
		color: #fff;
		font-size: 18px;
		font-family: 'Roboto', sans-serif;
		overflow-x: hidden;
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

`

export default GlobalStyles