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
            judul:"Belajar menyimpan",
        id_author:1,
        })
        .then(()=>{
            alert("berhasil")
        })
        .catch(()=>{
            alert('gagal')
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
               <input placeholder="Nama Buku" /> 
              
             <p>  Nama Penulis : </p>
               <select name="Author">
                   {author.map((value, index)=>{
                       return <option value={index}>{value.name}</option>
                   })}
               
               
               </select><br />
               <button onClick={()=>{this.postBook()}}>Simpan</button>
               <button onClick={()=>{this.postBook()}}>Batal</button>
           </div>
           </center>
        )
    }
}