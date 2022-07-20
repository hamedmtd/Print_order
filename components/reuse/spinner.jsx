import React from 'react'
import styled from 'styled-components'

export default function Spinner(props) {
	const { color = null, size = 'small' } = props

	return (
		<div className={'flex w-full h-full flex-1 bg-transparent items-center justify-center'}>
			<SpinnerStyle color={color} size={size} />
		</div>
	)
}

const SpinnerStyle = styled.div`
	align-self: center;
	width: ${props => props?.size === 'small' ? '40px' : '90px'};
	height: ${props => props?.size === 'small' ? '10px' : '17px'};
	color : ${props => props?.color};
	background: 
		radial-gradient(circle closest-side,currentColor 90%,#0000) 0%   50%,
		radial-gradient(circle closest-side,currentColor 90%,#0000) 50%  50%,
		radial-gradient(circle closest-side,currentColor 90%,#0000) 100% 50%;
		background-size:calc(100%/3) 100%;
		background-repeat: no-repeat;
		animation:d7 1s infinite linear;
	};
	@keyframes d7 {
		33%{background-size:calc(100%/3) 0%  ,calc(100%/3) 100%,calc(100%/3) 100%};
		50%{background-size:calc(100%/3) 100%,calc(100%/3) 0%  ,calc(100%/3) 100%};
		66%{background-size:calc(100%/3) 100%,calc(100%/3) 100%,calc(100%/3) 0%  };
	};
`;
