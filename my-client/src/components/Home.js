import Container from 'react-bootstrap/Container';
import React, {Component} from 'react';
import {Row,Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import logo from '../images/hi.jpg';
import Form from 'react-bootstrap/Form';
import Axios from "axios";

class Home extends Component {
    //Sate Variables are Declared
    constructor(props) 
    {
        super(props);
        this.state = {
            firstNumber: 0,
            secondNumber: 0,
            result: 0,
            value: "SAIRAJ GOUD PADALA",
            Body:"Hello, my name is Sairaj Goud, and I am writing to introduce myself. I am currently pursuing Master of Computer Science at Suny Albany. I have completed my Undergrad in Information Technology stream from Anurag University in the year 2021. My hobbies include learning latest technical skills, Reading Mythologies, Photography, playing musical instruments. My ultimate aim is to settle up as a reputed Software developer in Product Based Companies. Thank You!!"
        }
    }
    mySubmitHandler = () =>{
        Axios.get(`http://54.146.66.239:3000/add/${this.state.firstNumber}/and/${this.state.secondNumber}`).then((response)=>
        {
           this.setState({result: response.data.Sum_of_Numbers}); 
           console.log(response.data.Sum_of_Numbers);
        });
    }
    
        
    render() 
    {
        return(
        <>
        <div class="border">
        <Container>
            <Row>
                <Col xs={4}>
                <Card style={{ width: '18rem'}}>
                <Card.Img variant="top" src={logo} />
                </Card>
                </Col>
                <Col> 
                <Form.Control size="lg" type="text" defaultValue={this.state.value} />
                <br />
                <Form.Control className="form" 
                     as="textarea"
                     placeholder="Leave a comment here"
                     style={{ height: '300px'}}
                     defaultValue={this.state.Body}
                    />
                </Col>
            
            </Row>
        </Container>
        </div>
        <div className="border">
                    <form >
                    <Container>
                        <div className="form-group ">
                        <Row>
                             <Col xs={3}>
                                <label className='form-group'>Enter First Number</label> </Col>
                             <Col>
                               <input
                                type="number"
                                name="firstNumber"
                                id="firstNumber"
                                className="form-control"
                                onChange={(e)=>this.setState({firstNumber:e.target.value})}
                                style={{ width: '20rem' }} 
                                />
                            </Col>
                               
                        </Row>  
                </div>

                <div className="form-group mt-3 mb-3">
                    <Row>
                        <Col xs={3}>
                            <label className='form-group'>{'  '}Enter Second Number</label>
                        </Col>
                        <Col>
                            <input
                                type="number"
                                name="secondNumber"
                                id="secondNumber"
                                className="form-control"
                                onChange={(e)=>this.setState({secondNumber:e.target.value})}
                                style={{ width: '20rem' }} 
                            />
                        </Col>
                    </Row>
                </div>
                </Container>
                </form>
                    <div className='Submit' >
                        <button type="submit"
                         className="btn btn-primary mb-3" onClick={this.mySubmitHandler}>Submit</button>

                        </div>
                    </div>
                    <div className="rows-1 mt-3 mb-1">
                        <h5>Your Addition Result (from server) is : {this.state.result} </h5>
                    </div>
                    <div className="rows-2">
                        <h5>Your Addition Result (from ReactJS) is : {parseInt(this.state.firstNumber) + parseInt(this.state.secondNumber)} </h5>
                    </div>
        </>
        );
    }
}
export default Home;