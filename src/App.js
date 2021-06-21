import Header from './components/Header';
import Wrapper from './components/Wrapper';
import StaffInfo from './components/StaffInfo';
import StaffCard from './components/StaffCard';
import employees from './employees.json';

function App() {
  return (
    <div className='container'>
      <Header />
      <Wrapper />
    </div>
  )
}

export default App