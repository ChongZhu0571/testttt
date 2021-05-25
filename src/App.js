import './App.css';

export const groceryList = [
  {
    name: 'apple',
    quantity: 5,
    id: 1,
  },
  {
    name: 'orange',
    quantity: 4,
    id: 2,
  },
  {
    name: 'cucumber',
    quantity: 3,
    id: 3,
  },
];

const Header = (props) => {
  console.log(props);
  return (
    <header>
      <h1>{props.title}</h1>
      <span className='stats'>Items: {props.totalItems}</span>
    </header>
  );
};

const Grocery = (props) => {
  return (
    <div className='grocery'>
      <span className='grocery-name'>{props.name}</span>
      <div className='counter'>
        <button className='counter-action decrement'> - </button>
        <span className='counter-items'> {props.quantity}</span>
        <button className='counter-action increment'> + </button>
      </div>
    </div>
  );
};
const App = (props) => {
  return (
    <div>
      <Header
        title='My Grocery List'
        totalItems={props.initialGroceryList.length}
      />
      {props.initialGroceryList.map((grocery) => (
        <Grocery name={grocery.name} quantity={grocery.quantity} />
      ))}
    </div>
  );
};


export default App;
