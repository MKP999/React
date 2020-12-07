import BookList from './component/BookList';
import Navbar from './component/Navbar'
import ThemContextProvider from './contexts/ThemContext'
import ThemToggle from './component/ThemToggle';
import LoginContextProvider from './contexts/LoginContext'
import BookContxtProvider from './contexts/BookContext'
import NumberContextProvider from './contexts/NumberContext';

function App() {
  return (
    <div className="App">
        {/* 使用context组件 将子组件进行包裹 */}
      <ThemContextProvider>
        <LoginContextProvider>
          <BookContxtProvider>
            <ThemToggle />
            <NumberContextProvider>
              <Navbar />
            </NumberContextProvider>
            <BookList />
          </BookContxtProvider>
        </LoginContextProvider>
      </ThemContextProvider>
    </div>
  );
}

export default App;
