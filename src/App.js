//import logo from './logo.svg'; 
import './App.css';


import img from './Profile/youssef.jpg'
import Coordinate from './Profile/coordinate';
function App() {
  return (
    <div className="App">
      <h2>My Personal Profile</h2>
      
        <Coordinate
        img={img} 
        Contact
        LastName="ABDI" 
        Name="Youssef" 
        BirthDate="1994-01-06"
        MobileNumber="+216 21 205 035"
        Email="youssefelabdi2@gmail.com"  
        Address ="42 street omar ibn khattab Aouina,Tunis,Tunisia 2045" 
        />
    </div>
  );
}
export default App;
