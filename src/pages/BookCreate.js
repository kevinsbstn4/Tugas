import React,{Component} from 'react'
import Axios from 'axios';
import './bookcreate.css'
export default class BookCreate extends Component{
    state = {
        author: [],
        judul:"",
        id_author:2
    }
    getAuthor=()=>{
        Axios.get('https://api-demo.koding.sch.id/api/author/')
        .then((res)=>{
            console.log(res.data.data);
            this.setState({
                author:res.data.data
            })
            console.log(this.state.author)
        })
        .catch((err)=>{
            console.log(err);
        });       
    }

    postBook=()=>{
        Axios.post("https://api-demo.koding.sch.id/api/book",{
            judul:this.state.judul,
            id_author:this.state.id_author
        })
        .then(()=>{
            alert("berhasil")
        })
        .catch(()=>{
            alert('gagal')
        })
    }
    batal=()=>{
        this.setState({
            judul:""
        })
    }
    handleChanges=(event)=>{
        this.setState({
            judul:event.target.value
        })
    }
    selectHandleChanges=(event)=>{
        console.log(event.target.value)
        this.setState({
            id_author: event.target.value
        })
    }

    componentDidMount(){
        this.getAuthor();
    };

    render(){
        const {author} = this.state
        return(
            <center>
           <div className="bc">
           <h1>Selamat Datang</h1>
           <hr />
               <input onChange={this.handleChanges}placeholder="Nama Buku" value={this.state.judul}/> 
              
             <p>  Nama Penulis : </p>
               <select onChange={this.selectHandleChanges}>
                   {author.map((value, index)=>{
                        return <option value={value.id}>{value.name}</option>
                   })}
               
               
               </select><br />
                <button onClick={()=>{this.postBook()}}>Simpan</button>
                <button onClick={()=>{this.batal()}} >Batal</button><br/>
           </div>
           </center>
        )
    }
}