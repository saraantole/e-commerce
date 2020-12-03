import { SignInAndSignUpPageDiv } from './sign-in-and-sign-up.styles';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUpPage = () => (
    <SignInAndSignUpPageDiv>
        <SignIn />
        <SignUp />
    </SignInAndSignUpPageDiv>
)

export default SignInAndSignUpPage;