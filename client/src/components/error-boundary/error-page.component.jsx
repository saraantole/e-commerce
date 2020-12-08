import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './error-boundary.styles';

const ErrorPage = () => {
    return (
        <ErrorImageOverlay>
            <ErrorImageContainer imageUrl='https://i.imgur.com/3suxlvm.png' />
            <ErrorImageText>Oh no! We tripped up!</ErrorImageText>
        </ErrorImageOverlay>
    )
};

export default ErrorPage;