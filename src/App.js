import './App.css';
import Buttonjson from './Components/Buttonjson';
import Campo from './Components/Campo';
import Crono from './Components/Crono'
import Form from './Components/Form';
import Likebutton from './Components/Likebutton';
import Nombredad from './Components/Nombredad';
import Nombres from './Components/Nombres';
import PasswordStrength from './Components/Password';
import Users from './Components/Users';

function App() {
  return (
    <div className="App">
      <Crono/>
      <Likebutton/>
      <Users/>
      <Nombres/>
      <Nombredad/>
      <Campo/>
      <Buttonjson/>
      <PasswordStrength/>
      <Form/>
      <br/>
    </div>
  );
}

export default App;
