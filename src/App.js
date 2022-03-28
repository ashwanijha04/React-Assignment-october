import './App.css';
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <div className="App col-md-6">
    
    <ProfileCard name="Ashwani Jha" email="ashwanijha@gmail.com" phone="912312" website="abc.com"/>
    <ProfileCard name="Akash" email="akash@gmail.com" phone="98292" website="cde.com"/>
    <ProfileCard name="Amrendra" email="amrendra@gmail.com" phone="4224" website="efg.com"/>
    <ProfileCard name="Anurag" email="anurag@gmail.com" phone="99833" website="hij.com"/>
    <ProfileCard name="Arshad" email="arshad@gmail.com" phone="7774633" website="klm.com"/>
    <ProfileCard name="Aditya" email="aditya@gmail.com" phone="345545" website="mno.com"/>
    </div>
  );
}

export default App;
