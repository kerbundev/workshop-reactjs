import React, {Component} from 'react';
import './sign-in.styles.scss';

import FormInput from '../../Components/form-input/form-input.component';
import CustomButton from '../../Components/custom-button/custom-button.component';

class SignInPage extends Component {
    constructor() {
        super();
        this.state = {
            email:'',
            password:'',
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        // aqui autenticamos        
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({ [name] : value});
    }

    render(){
        return(
            <div className='sign-in'>
                <h3>
                    Sign In with email and password
                </h3>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        handleChange={this.handleChange}
                        name='email'
                        label='email'
                        type='email'
                        value={this.state.email}
                        required
                    ></FormInput>
                    <FormInput
                    handleChange={this.handleChange}
                    name='password'
                    label='password'
                    type='password'
                    value={this.state.password}
                    required
                    ></FormInput>
                    <CustomButton type='submit'>Submit</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignInPage;