import React from 'react';
import { Route } from 'react-router-dom';
import classes from './burger.module.css';
import Navigation from './components/Nav/Navigation';
import ProductsPage from './containers/Products';
import FavoritesPage from './containers/Favorites';

const App = props => {
  return (
    <div className = {classes.Box}>&nbsp;
      <div className = {classes.Breadtop}>&nbsp;</div>
    </div>
  );
    // <React.Fragment>
    //   <Navigation />
    //   <main>
    //     <Route path="/" component={ProductsPage} exact />
    //     <Route path="/favorites" component={FavoritesPage} />
    //   </main>
    // </React.Fragment>
  //);
};

export default App;
