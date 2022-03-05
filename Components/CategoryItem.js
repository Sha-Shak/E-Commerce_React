import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
flex: 1;
text-align:center;
margin: 10px;
position:relative;
height: 70vh;
overflow:hidden;
`;    

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;

`
const Info= styled.div `
	position:absolute;
	width:100%;
	height: 100%;
	top:0;
	left:0;
	display:flex;
	align-item:center;
	justify-content:center;
	flex-direction:column;
`
const Title = styled.h1`
	color:white;
`
const Button= styled.button`
padding: 7px 15px;
background: rgba(0,000,000, 0.6);
border: thin solid lightgray;
margin: 5px 80px;
color: white;
font-weight: 600;
`

const CategoryItem = ({category}) => {
	return (
		<Container>
			<Link to={`/products/${category.cat}`}>
				<Image src={category.img} />
				<Info>
					<Title>{category.title}</Title>
					<Button>Shop Now</Button>
				</Info>
			</Link>
		</Container>
	);
};

export default CategoryItem;
