import React from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap'
import './card.css'
const Cards=(props)=>{
    return(
    <div>
        <Card>
        <CardBody className="mycard">
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>{props.id}</CardSubtitle>
          <Button>Simpan</Button>
          <Button>Hapus</Button>
        </CardBody>
      </Card>
    </div>
    )
}
export default Cards;
