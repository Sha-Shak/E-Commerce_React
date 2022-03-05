import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styled from 'styled-components';
const Info = styled.div`
    opacity:0;
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background-color: rgba(0,0,0,0.2);
    z-index:3;
    display:flex;
    align-items:center;
    justify-content:center;
    transition: all 0.5s ease;
   
`
const Container = styled.div`
	flex: 1;
	margin: 5px;
	min-width: 280px;
	height: 350px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #d6eaf8;
	position: relative;
	&:hover ${Info} {
		opacity: 1;
	}
`;

const Circle = styled.div`
    width:200px;
    height: 200px;
    border-radius:50%;
    background-color: teal;
    position:absolute;
`
const Image = styled.img`
    height: 75%;
    z-index: 0;
`
const Icon = styled.div`
	height: 40 px;
	width: 40 px;
	border-radius: 50%;
	background: white;
	display: flex;
	justify-content: center;
	align-items: center;
    margin:10px;
    padding:6px;
    transition: all 0.5s ease;
    &:hover{
        background: #e9f5f5;
        transform:scale(1.1);
    }
`;
  
;
const Button = styled.button`
    padding: 5px 10px;
`

const ProductsItem = ({topItem}) => {
    function h(){
        //alert("s");
        
    }
  return (
		<Container>
			<Circle />
			<Image src={topItem.img} />
            <Info>
			<Icon>
            <ShoppingCartIcon onclick={h()}/>
			</Icon>
			<Icon>
            <SearchIcon />
			</Icon>
			<Icon>
            <FavoriteBorderIcon />
			</Icon>
            </Info>

            </Container>
	);
}

export default ProductsItem