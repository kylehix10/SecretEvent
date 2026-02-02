import './App.css';
import Countdown from './CountdownTimer.jsx'
import testSlot from './images/testSlot.png'

function App() {
  const launchDate = new Date("2027-02-19T23:59:59");

  return (
    <div class = 'app'>
      <h2>Caption</h2>
      <Countdown targetDate={launchDate} />
      <img src={testSlot} alt="test"></img>
      
    </div>
  );
}

export default App;
