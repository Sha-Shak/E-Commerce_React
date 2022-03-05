import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React, { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";


const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	position: relative;
	overflow: hidden;
`;
const Arrow = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: #fff7f7;
    display:flex;
    align-items:center;
    justify-content:center;
    position: absolute;
    top:0; 
    bottom:0;
    margin:auto;
    left: ${props=> props.direction === "left" && "10px" };
    right: ${props=>{return (props.direction === "right" && "10px" )}};
    opacity: 0.7;
    cursor: pointer;
	z-index:2;
`;
const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 1.5s ease;
	transform: translateX( ${(props)=>(props.slideIndex *-100)}vw);
	
    
`;
const Slide = styled.div`
    display:flex;
    align-items:center;
    width:100vw;
    height:100vh;
    background-color: #${props=> {return(props.bg)}};
`

const ImageContainer = styled.div`
	flex: 0.3;
	height: 100%;
	align-items: center;
`;
const Image = styled.img`
    height: 98%;
	

`
const InfoContainer = styled.div`
	flex: 0.7;
	padding: 50px;
	align-self: flex-start;
`;
const Title = styled.h1`
	font-size: 58px;
	font-weight: 900;
	
	
`;
const Description = styled.p`
	margin: 50px 0;
	font-size: 20px;
	font-weight: 500;
	letter-spacing: 3px;
	
	
`;
const Button = styled.button`
    background: #3b8beb;
    border: thin solid #3b8beb;
	color: white;
	font-weight: 600;
	font-size: 18px;
    padding: 10px 15px;
    cursor: pointer;

`  


const Slider = () => {
	const [slideIndex, setSlideIndex] = useState(0);
	//console.log(slideIndex);
	const handleClick= (direction)=>{
		console.log(slideIndex);
	if(direction === 'left'){
	//	console.log(slideIndex);
		setSlideIndex(slideIndex>0 ? slideIndex-1 : 4);
	} else {
		setSlideIndex(slideIndex<2 ? slideIndex+1 : 0);
	}
}
	return (
		<Container>
			<Arrow
				direction="left"
				onClick={() => {
					handleClick("left");
				}}
			>
				<ArrowBackIosIcon />
			</Arrow>
			<Wrapper slideIndex={slideIndex}>
				{sliderItems.map((items) => (
					<Slide bg={items.bg}>
						<ImageContainer>
							<Image src={items.img} />
						</ImageContainer>
						<InfoContainer>
							<Title>{items.title}</Title>
							<Description>{items.desc}</Description>
							<Button>Buy Now</Button>
						</InfoContainer>
					</Slide>
					
				)
				)
					
			}
			</Wrapper>
			<Arrow
				direction="right"
				onClick={() => {
					handleClick("right");
				}}
			>
				<ArrowForwardIosIcon />
			</Arrow>
		</Container>
	);
};

export default Slider;
