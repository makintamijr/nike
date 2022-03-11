import { createTheme, ThemeProvider } from "@mui/material/styles";
import { responsiveFontSizes } from "@mui/material";
import "./App.css";
import { globalTheme } from "./style/theme";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";
import WelcomeMessage from "./components/Welcome/WelcomeMessage";
import Promotion from "./components/Promotion/Promotion";
import ProductCard from "./components/ProductsCard/ProductCard";
import Categories from "./components/Categories/Categories";
import Featured from "./components/Featured/Featured";
import JoinUs from "./components/JoinUs/JoinUs";
import MoreNike from "./components/MoreNike/MoreNike";
import ShopLinks from "./components/ShopLinks/ShopLinks";
import Footer from "./components/Footer/Footer";
//

function App() {
  let theme = createTheme(globalTheme);
  theme = responsiveFontSizes(theme);
  // console.log("/", theme);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavigationMenu />
        <WelcomeMessage />
        <Promotion />
        <ProductCard />
        <Categories />
        <Featured />
        <JoinUs />
        <MoreNike />
        <ShopLinks />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
