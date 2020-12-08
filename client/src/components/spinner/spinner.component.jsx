import Loading from './loading.component';

const Spinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
    return isLoading ? <Loading /> : <WrappedComponent {...otherProps} />
};

export default Spinner;