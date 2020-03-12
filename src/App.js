import React from 'react';
import { Route } from 'react-router-dom';
import classes from './burger.module.css';
import Navigation from './components/Nav/Navigation';
import ProductsPage from './containers/Products';
import FavoritesPage from './containers/Favorites';

const App = props => {
  return (
    <div className = {classes.Box}>&nbsp;
      <div className = {classes.BreadTop}>&nbsp;
        <div className = {classes.Seeds}>&nbsp;</div>
        <div className = {classes.Seeds2}>&nbsp;</div>
      </div>
      <div className= {classes.Salad}>&nbsp;</div>
      <div className= {classes.Salad}>&nbsp;</div>
      <div className= {classes.Bacon}>&nbsp;</div>
      <div className= {classes.Cheese}>&nbsp;</div>
      <div className= {classes.Boca}>&nbsp;</div>
      <div className= {classes.BreadBottom}>&nbsp;</div>
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
