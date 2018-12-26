import React,{Component} from 'react'
import Home from './pages/Home'
import {Route, Switch} from "react-router-dom"
import Book from './pages/Book'
import Author from './pages/Author';
import BookCreate from './pages/BookCreate';
import AuthorCreate from './pages/AuthorCreate';
export default class App extends Component{
  render(){
    return(
      <div>
        <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/book" exact  component={Book} />
                <Route path="/author" exact  component={Author} />
                <Route path="/book/create" component={BookCreate} />
                <Route path="/author/create" component={AuthorCreate} />
        </Switch>
      </div>
    )
  }
}