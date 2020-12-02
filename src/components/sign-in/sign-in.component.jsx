import { Component } from 'react';

import { SignInDiv, TitleH2, ButtonsDiv } from './sign-in.styles';

import { connect } from 'react-redux';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    };

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        const { emailSignInStart } = this.props;

        emailSignInStart(email, password);
    };

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        const { googleSignInStart } = this.props;
        return (
            <SignInDiv>
                <TitleH2>I already have an account</TitleH2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        value={this.state.email}
                        required
                        handleChange={this.handleChange}
                        label='Email'
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        required
                        handleChange={this.handleChange}
                        label='Password'
                    />
                    <ButtonsDiv>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sign In with Google</CustomButton>
                    </ButtonsDiv>
                </form>
            </SignInDiv>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);