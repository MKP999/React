const { default: BookForm } = require("./components/BookForm")
const { default: BookList } = require("./components/BookList")
const { default: Navbar } = require("./components/Navbar")
const { default: BookContextProvider } = require("./contexts/BookContext")


function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <BookForm/>
     </BookContextProvider>
    </div>
  );
}

export default App;
