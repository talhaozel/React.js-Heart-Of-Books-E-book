import BookList from "./component/BookList";
import BookContextProvider from "./contexts/BookContext";
import Home from "./component/Home";
import BookCard from "./component/BookCard";

function App() {
  return (
    <div className="App">

      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
           
                
            <BookContextProvider>
              <Home/>             
                 <BookList />           

            </BookContextProvider>
         </div>
        </div>
       </div>
     </div>
  );
}

export default App;
