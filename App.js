import './App.css';
import Test from "./components/Test"
import Employee from './components/Employee'
import Accordion from './components/Accordion'
import Balok from './pages/Balok'
import Student from './pages/Student'

function App() {
  return (
    <div>
      <div className="App">
        <h3 align="center">This is my custom components</h3>
        {
          /**
           * nama element : h3
           * attributes/properties: align
           */
        }

        {/**<Test name="Wlee" city="Gatau" fontColor="magenta"
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFyEGuS9IT7Kz_bqTyxDf5Qo28HIgojurw1WOtrJdYsZIsZO4HjvskLcaPlqV2dtymvxc&usqp=CAU">
          Rambut pendek
          <button>Melet</button>
        </Test>
        <Test name="Sad" city="TakTahu" fontColor="gray"
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQANmfpcnik8fPdkOce-SKBIQfGyro5TU62hw&usqp=CAU">
          Im sad 
          <button>Be Oke</button>
        </Test>
        <Test name="Wink" city="ManaTahu" fontColor="navy"
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGPWaQrIEj1Rt8boIKKv-eYIKKKI9AQ-lo8w&usqp=CAU">
          Kelilipan
          <button>Twing</button>
      </Test> */}
      <Balok title="Lemari"></Balok>
      <Balok title="Kotak Pensil"></Balok>
      </div>

      
      {/**<Employee 
      name="Laili " email="lailirachma4@gmail.com"
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0R0sjIpNeL2I-yx72vn5FwiSUJcMdl1XqVQ&usqp=CAU"
      tgl="2004-07-06"
      telepon="12345" 
      gender="P" 
      divisi="Anggota">
      </Employee>

      <Accordion>
      Hello everyone! My name is Laili Nur Rachmawati, usually called Laili. 
       I'm seventeen years old and currently studying at SMK Telkom Malang
    </Accordion>*/}
      
    </div>
  );
}

export default App;