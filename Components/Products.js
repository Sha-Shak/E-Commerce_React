import styled from 'styled-components';
import { topItems } from '../data';
import ProductsItem from './ProductsItem';

const Container = styled.div`
	display: flex;
	padding: 20px;
	flex-wrap: wrap;
	overflow: hidden;
    justify-content:space-between;
`;

const Products = () => {
  return (
		<Container>
			{topItems.map((topItem) => (
				<ProductsItem topItem={topItem} />
			))}
		</Container>
	);
}

export default Products