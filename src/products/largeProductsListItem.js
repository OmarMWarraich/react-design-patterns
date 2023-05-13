export const LargeProductListItem = ({ product }) => {
    const { name, price, description, rating } = product;

    return (
        <>
            <h1>{name}</h1>
            <p>Price: {price}</p>
            <p>Description: {description}</p>
            <p>Rating: {rating}</p>
        </>
    );
};
