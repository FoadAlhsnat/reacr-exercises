
import Btn from './components/Buttonstate/Btn'
import ChangingBox from './components/ChangingBox/ChangingBox';
import LifeCycle from './components/LifeCycle/LifeCycle';
import Show from './components/ShowAndHidd/Componenet'


function App() {
  return (
    // <div style={{display:'flex'}} >
    //   <Card src={faker.image.cats()}/>
    //   <Card src={faker.image.cats()}/>
    //   <Card src={faker.image.cats()} />
    // </div>
    <div>
       {/* <Show/>
       <Btn/> */}
       {/* <LifeCycle/> */}
       <ChangingBox size="50px" color="salmon" top="10px"/>
        <ChangingBox size="70px" color="blue" top="70px"/>
        <ChangingBox size="90px" color="purple" top="150px"/>
    </div>
   
  );
}

export default App;
