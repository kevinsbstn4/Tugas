import React,{Component} from 'react'
import Book from './Book'
import Navbar from '../component/Navbar';
import './home.css'
export default class Home extends Component{
    render(){
        return(
            <div className="myhome">
               <Navbar />
            </div>
        )
    }
}