import React from 'react';
import styled from 'styled-components';
import Button from './components/button';
import Dropdown from './components/dropdown';
import Group from './components/group';
import Input from './components/input';
import constants from './constants';
import './styles.css';
import { Formik, FastField, Field } from 'formik';
//import * as yup from 'yup';
import schema from './components/schema';
//import validationSchemas from './components/schema';


const Container = styled.div`
  width: 25%;
  padding: 2rem 1rem;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const Flexbox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: column;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      target_residue_type: '',
     // openArrChild: [],
    };
    //this.getOpenState = this.getOpenState.bind(this);
   // this.configureValidationSchema = this.configureValidationSchema.bind(this);
  }

// getOpenState(arr){
//   this.setState({openArrChild: arr});
// }


  render() {
    //const schema = null;
    //console.log(this.state.openArrChild);
    //console.log(this.state.target_residue_type)
    // if(this.state.target_residue_type==='api'){
    //   schema = schemas.validationSchemaInitial
    //   console.log('nside if');
    // }
    //console.log(schema);
    return (
      <Formik
        initialValues={constants.initialValues}
        validationSchema={schema.validationSchema}
        onSubmit={
          (values, actions) => {
            console.log(values);
            window.localStorage.setItem('form', JSON.stringify(values));
            this.props.history.push('/submission');
          }
        }
      >
        {(formikProps) => (
          <form name="leucene" onSubmit={formikProps.handleSubmit}>
            <Container>
              <Flexbox>
                {constants.sections[0].fields.map(field => {
                  if (field.type === 'dropdown') {
                    return (
                      <Field
                        component={Dropdown}
                        key={field.name}
                        name={field.name}
                        {...field}
                      />
                    );
                  }
                  return (
                    <FastField
                      component={Input}
                      key={field.name}
                      {...field}
                      name={field.name}
                    />
                  );
                })}

                {(formikProps.values.target_residue_type) && (
                  <Group
                    {...constants.customSection[formikProps.values.target_residue_type]}
                    {...formikProps}
                  />
                )}
                {constants.sections[1].fields.map(field => {
                  return (
                    <FastField
                      component={Input}
                      key={field.name}
                      {...field}
                      name={field.name}
                    />
                  );
                })}
                <Button big type="submit" onClick={formikProps.handleSubmit}>Submit</Button>
              </Flexbox>
            </Container>
          </form>
        )}
      </Formik>
    );
  }
}

export default App;
