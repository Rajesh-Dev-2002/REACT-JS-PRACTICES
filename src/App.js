import "./App.css";

//this is the object which have to render to the app function 💪
const dj = <h1>hello Buddy</h1>;
// this is functional components 
const xyz = () =>(
  
    <h2>Iam Rajesh Kumar</h2>
  
)
function App() {
  return (
    <div className="">
    
      <header className="">
        {dj}
        {xyz()}
        <xyz/>
      </header>
    </div>
  );
}

export default App;
