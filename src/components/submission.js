import React, {Component} from 'react';
import styled from 'styled-components';
import Button from './button';


const Flexbox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;


const Card = styled(Flexbox)`
  padding: 1rem;
  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
  border-radius: 4px;
`;

class Status extends Component{

    

    state = {
        form: null
    }

    componentWillMount(){
        this.setState({form: JSON.parse(localStorage.getItem('form'))});
    }

    removeMOC = () => {
        localStorage.removeItem('form');
        this.setState({form: null});
    }

    goBackHandler = () => {
        this.props.history.replace('/');

    }

    render(){

        let button = null

        let list = null

        let heading = <Card> <h1>No Data To Show</h1></Card>

        const listStyling = {
            'list-style-type': 'none'
        }

        

        if(this.state.form){
         button = <Button auto onClick={this.removeMOC}>
                        Remove Item
                    </Button>
        }

        

        if(this.state.form !== null){
            list =  Object.keys(this.state.form).map( fieldName => {
                return (
                    <Card>
                    <li>{fieldName} - {this.state.form[fieldName]}</li>
                    </Card>
                )
            })
        }

        if(this.state.form){
            heading = (<div>
            <Card>
            <h1> Your Form Is Submitted</h1>
            </Card>
            <Card>
            <h2>Please see your data here</h2>
            </Card>
            </div>)
        }

        return (
            
            <React.Fragment>
            {heading}
            
            <ul style={listStyling}>
             { list}
            </ul>

            {button}
        
            <Button auto onClick={this.goBackHandler}>
            Go Back
            </Button>
            </React.Fragment>
        )

        
    

    }

}



export default Status;