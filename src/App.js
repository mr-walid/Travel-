import Data from './Data'
import Header from './Header'
import Body from  './Body'

function App() {

   
  const graph = Data.map(item=> {

    return (

      <Body 
        key = {item.title}
        item = {item}
      />
    )
  })

  return (
    <div className="App">
   
      <Header />
      {graph}
       
    </div>
  );
}

export default App;
