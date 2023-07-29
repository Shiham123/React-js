const date = new Date(),
  day = date.getDate(),
  month = date.getMonth(),
  year = date.getFullYear();

export const cardArray = [];
for (let i = 0; i < 3; i++) {
  cardArray.push(
    <Card
      key={i}
      title={`Title ${i}`}
      description={`Description ${i}`}
      index={`Index ${i}`}
    />
  );
}

const cartDescription = 'Card description',
  cartTitle = 'Card Title';

function Card(extraction) {
  const { title, description, index } = extraction;

  return (
    <div className="card">
      <h1 className="cart-title">{cartTitle}</h1>
      <p className="cart-description">{cartDescription}</p>

      <p className="cart-description">{title}</p>
      <p className="cart-description">{description}</p>
      <h1 className="cart-title">{index}</h1>

      <h3 className="cart-date">{`${day} / ${month} / ${year}`}</h3>
    </div>
  );
}

export default Card;
