import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import Layout from './components/Layout';
import Homepage from './pages/Homepage/Homepage';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Products from './pages/Products/Products';
import LoginUser from './pages/LoginPage/LoginUser';
import Cart from './pages/Cart/Cart';
import NotFound from './pages/NotFound/NotFound';
import Survey from './pages/Survey/Survey';
import StartSurvey from './pages/Survey/StartSurvey';
import { CartContextProvider } from './context/CartContext/CartContext';
import { SearchSortContextProvider } from './context/SearchSortContext/SearchSortContext';
import PrivateRoutes from './utils/PrivateRoute';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext/AuthContext';

const theme = createTheme({
  palette: {
    primary: {
      main: '#252525',
    },
    secondary: {
      main: '#64DFDF',
    },
  },
  typography: {
    fontFamily: 'Poppins',
    fontWeightLight: 400,
    fontWeightRegular: 500,
  },
});

function App() {
  const { auth } = useContext(AuthContext);
  return (
    <>
      <CartContextProvider>
        <SearchSortContextProvider>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <Layout>
                <Routes>
                  <Route path="/" element={<Homepage />} />
                  <Route path="/login" element={<LoginUser />} />
                  <Route path="*" element={<NotFound />} />
                  <Route element={<PrivateRoutes auth={auth} />}>
                    <Route path="/products" element={<Products />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/survey" element={<Survey />} />
                    <Route path="/survey" element={<Survey />} />
                    <Route path="/start" element={<StartSurvey />} />
                    <Route
                      path="/productDetails/:productId"
                      element={<ProductDetails />}
                    />
                  </Route>
                </Routes>
              </Layout>
            </BrowserRouter>
          </ThemeProvider>
        </SearchSortContextProvider>
      </CartContextProvider>
    </>
  );
}

export default App;
