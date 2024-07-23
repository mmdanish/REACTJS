import logo from './logo.svg';
import './App.css';
import Card from './Card';
import profile from './profile.jpeg'

function App(props) {
  let details = [{
    name: "Adam Johnson",
    role: "Developer",
    image: profile,
    class: 'grey'
  },
  {
    name: "Linda Larson",
    role: "Manager",
    image: profile,
    class: 'white'
  },
  {
    name: "Marry Hudson",
    role: "Designer",
    image: profile,
    class: 'white'
  },
  {
    name: "Nina Hudson",
    role: "Designer",
    image: profile,
    class: 'white'
  },
  {
    name: "Margo Larson",
    role: "Manager",
    image: profile,
    class: 'white'
  },
  {
    name: "Nicole Scavo",
    role: "Designer",
    image: profile,
    class: 'grey'
  }
];


  return (
    <div className='card'>
      {details.map((item, index) => {
        return (
          <>
            <Card key = {index} name = {item.name} role = {item.role} image = {item.image} class = {item.class}/>
          </>
        )
      })}
    </div>
  );
}

export default App;
