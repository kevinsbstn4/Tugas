import React,{Component} from 'react';
import Axios from 'axios'
import Cards from '../component/Card';

export default class Example extends React.Component {
  state={
    books:[]
  };

  getBook=()=>{
    Axios.get('https://api-demo.koding.sch.id/api/book/')
    .then((res)=>{
      console.log(res.data.data);
      this.setState({
        books : res.data.data
      })
      
    })
    .catch((err)=>{
        console.log(err);
    });
  };
  
  componentDidMount(){
    this.getBook();
  }

  render() {
    return (
      <div>
        {this.state.books.map((value,index)=>{
          return<Cards title={value.id_author} id={value.judul}/>
        })}
      </div>
    );
  }
}