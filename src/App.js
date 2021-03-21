
import BoxColor from './components/BoxColor/BoxColor';
import Btn from './components/Buttonstate/Btn'
import ChangingBox from './components/ChangingBox/ChangingBox';
import Checkbox from './components/CheckBox/Checkbox';
import Butten from './components/ChildToFather/Butten';
import Buttons from './components/ChildToFather/Buttons';
import Form from './components/Form/Form';
import LifeCycle from './components/LifeCycle/LifeCycle';
import Norris from './components/Norris/Norris';
import Show from './components/ShowAndHidd/Componenet'
import Spinner from './components/Spinner/Spinner';


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
       {/* <ChangingBox size="50px" color="salmon" top="10px"/>
        <ChangingBox size="70px" color="blue" top="70px"/>
        <ChangingBox size="90px" color="purple" top="150px"/> */}
        {/* <BoxColor/> */}
        {/* <Spinner/> */}
       {/* <Buttons/>
        <Checkbox/> */}
        {/* <Form/> */}
        <Norris/>
    </div>
   
  );
}

export default App;
