import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import './PricingStyles.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Record from '../data/items.json'
import { ShoppingCartProvider, useShoppingCart } from './useShoppingCart';


import ali from '../assets/Alisson.jpg'
import vvd from '../assets/vvd.jpg'
import matip from '../assets/matip.jpg'
import taa from '../assets/taa.jpg'
import robo from '../assets/robertson.jpg'
import fabi from '../assets/fabi.jpg'
import hendo from '../assets/henderson.jpg'
import wij from '../assets/wijnaldum.jpg'
import mo from '../assets/salah.jpg'
import mane from '../assets/mane.jpg'
import bobby from '../assets/firmino.jpg'
import { Link } from 'react-router-dom';

const PricingCards = () => {
    const data =[ {
        "id":1,
        "name": "Alisson",
        "position": "GK",
        "availability": "Monday, Tuesday",
        "value": 10000,
        "image": ali,
        "bio": "Brazilian professional footballer who plays as a goalkeeper for Premier League club Liverpool and the Brazil national team.He is widely regarded to be one of the best goalkeepers in the world"
    },
    {
        "id":2,
        "name": "Matip",
        "position": "CB",
        "availability": "Thursday, Wedsnday",
        "value": 8000,
        "image": matip,
        "bio": "Joël Matip, né le 8 août 1991 à Bochum,est un footballeur international camerounais qui évolue au poste de défenseur central au Liverpool FC."
    },
    {
        "id":3,
        "name": "Van Djik",
        "position": "CB",
        "availability": "Tuesday, Wedsnday",
        "value": 30000,
        "image": vvd,
        "bio": "Dutch professional footballer who plays as a centre-back for Premier Leagueclub Liverpool and the Netherlands national team. Considered one of the best defenders in the world."
    },
    {
        "id":4,
        "name": "Alexander-Arnold",
        "position": "RB",
        "availability": "Thursday , Friday",
        "value": 50000 ,
        "image": taa,
        "bio": "English professional footballer who plays as a right-back for Premier League club Liverpool and the England national team.Known for his range of crossing and assists."
    },
    {
        "id":5,
        "name": "Robertson",
        "position": "LB",
        "availability": "Saturday , Friday",
        "value": 30000 ,
        "image": robo,
        "bio": "Scottish professional footballerwho plays as a left-back for Premier League club Liverpool and captains the Scotland national team."
    },
    {
        "id":6,
        "name": "Fabinho",
        "position": "CDM",
        "availability": "Saturday , Sunday",
        "value": 10000 ,
        "image": fabi,
        "bio": "Brazilian professional footballer who plays as a midfielder for Premier League club Liverpool and the Brazil national team.A versatile player who mainly plays as a defensive midfielder."
    },
    {
        "id":7,
        "name": "Henderson (C)",
        "position": "CM",
        "availability": "Monday , Wedsnday",
        "value": 50000 ,
        "image": hendo,
        "bio": "English professional footballer who plays as a midfielder for Premier League club Liverpool and the England national team."
    },
    {
        "id":8,
        "name": "Wijnaldum",
        "position": "CM",
        "availability": "Sunday , Wedsnday   ",
        "value": 18000 ,
        "image": wij,
        "bio": "Wijnaldum is regarded as a club “legend” (in the words of former manager Jürgen Klopp) who played a major part in Liverpool’s successes over his years at the club."
    },
    {
        "id":9,
        "name": "Firmino",
        "position": "BU",
        "availability": "Friday , Tuesday ",
        "value": 50000,
        "image": bobby,
        "bio": "Brazilian professional footballer who plays as a forward or attacking midfielder for Premier League club Liverpool and the Brazil national team."
    },
    {
        "id":10,
        "name": "Mane",
        "position": "LW",
        "availability": "All week",
        "value": 100000,
        "image": mane,
        "bio": "Senegalese professional footballer who played  as a forward for Premier League club Liverpool and the Senegal national team.Considered one of the best players in the world and amongst the greatest African players of all time."
    },
    {
        "id":11,
        "name": "Salah",
        "position": "RW",
        "availability": "All week",
        "value": 100000,
        "image": mo,
        "bio": "Egyptian professional footballer who plays as a forward for Premier League club Liverpool and captains the Egypt national team. Considered one of the best players in the world."
    }]
const [searchTerm, setSearchTerm] = useState("");
const [filteredPlayers, setFilteredPlayers] = useState(data);
const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity,openCart, removeFromCart,cartQuantity} = useShoppingCart()

const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filteredPlayers = data.filter(player => 
        player.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPlayers(filteredPlayers);
}







return (
    <div className='pricing'>
        <div className="search-container">
            <input 
                type="text" 
                placeholder="Search players by name" 
                value={searchTerm} 
                onChange={handleSearch} 
            />
        </div>
        <div className='card-container'>
            {
                filteredPlayers.map( data => {
                    const quantity = getItemQuantity(data.id);
                    
                    
                    try {
                        console.log(data.image);
                    } catch (error) {
                        console.log('Error: ', error);
                    }
                    
                    return(
                        <Card bg={'Dark'.toLowerCase()} key={data.id} text={'Dark'.toLowerCase() === 'light' ? 'dark' : 'white'} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={data.image} />
                        
                        <Card.Body>
                       
                            <Card.Title>  {data.name} </Card.Title>
                            <Card.Text>{data.bio}</Card.Text>
                        </Card.Body>
                        
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Position : {data.position} </ListGroup.Item>
                            <ListGroup.Item>Availaible : {data.availability} </ListGroup.Item>
                            <ListGroup.Item>Value : {data.value} $ </ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                        <div className="mt-auto"> 

                        <Link to='/cart'>
                        <Button className="w-100" > Contact us   </Button>
                        </Link>
                        
                        
                        
                       
                        
                        </div>

                        </Card.Body>
                   </Card>
                    )})
            
                    
            }
        </div>
    </div>
)
}

export default PricingCards;
                            