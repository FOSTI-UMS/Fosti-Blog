import {lazy,Suspense,useState,useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Loading from './component/Loading'
import 'typeface-righteous'
import 'bootstrap'
import './vendor/css/bootstrap.min.css'
import './vendor/css/mediumish.css'
import '@coreui/icons'
import Navbar from "./component/Navbar";
import { ThemeProvider } from 'styled-components';
import '@fortawesome/fontawesome-free'
import { lightTheme, darkTheme } from './service/theme';
import { GlobalStyles } from './service/global';
import Ava from './vendor/img/ava.png'
import { Container, Button,lightColors, darkColors } from 'react-floating-action-button'
import Home from './page/Home'
import axios from "axios";
const Post = lazy(() => import('./page/Post'))

function App() {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }



      return (
          <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <>
              <GlobalStyles />
          <Navbar tema={theme}/>
          <Router>
            <Suspense fallback={<Loading />}>
              <Switch>
                <Route exact path="/:slug" >
                    <Post
                    tema={theme}
                    />
                </Route>
                <Route exact path="/">
                    <Home tema={theme}/>
                </Route>
              </Switch>
            </Suspense>
          </Router>
              <Container>
                  {
                      theme=="dark"?

                      <Button
                          tooltip="Light Mode, Supaya Kamu Nyaman :)"
                          icon="cil-moon"
                          styles={{backgroundColor: darkColors.black, color: lightColors.black}}
                          onClick={() => {
                          toggleTheme()
                      }}
                          >☀️</Button>
                          :
                      <Button
                          tooltip="Dark Mode, Supaya Kamu Nyaman :)"
                          icon="cil-moon"
                          styles={{backgroundColor: darkColors.black, color: lightColors.black}}
                          onClick={() => {
                              toggleTheme()
                          }}
                      >🌙</Button>
                  }
              </Container>
          </>
          </ThemeProvider>
      );
}

export default App;
