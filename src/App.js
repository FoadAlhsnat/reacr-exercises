
import faker from 'faker'
import Card from './components/Card/Card'
function App() {
  return (
    <div style={{display:'flex'}} >
      <Card src={faker.image.cats()}/>
      <Card src={faker.image.cats()}/>
      <Card src={faker.image.cats()} />
    </div>

  );
}

export default App;
