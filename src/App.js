import NavBar from './components/NavBar/NavBar';
import WlcmCard from './components/WlcmCard/WlcmCard';
import MealList from './components/Meals/MealList';
import CartContextProvider from './store/CartContextProvider';


function App() {
  return (
    <CartContextProvider>
      <NavBar />
      <WlcmCard />
      <MealList/>
    </CartContextProvider>
  );
}

export default App;
