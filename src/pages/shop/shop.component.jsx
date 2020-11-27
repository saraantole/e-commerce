import { Component } from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import Spinner from '../../components/spinner/spinner.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions.js';


const CollectionsOverviewWithSpinner = Spinner(CollectionsOverview);
const CollectionPageWithSpinner = Spinner(CollectionPage);


class ShopPage extends Component {
    state = {
        isLoading: true
    };

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({ isLoading: false });
        });
    };

    render() {
        const { match } = this.props;
        const { isLoading } = this.state;
        return (
            <div>
                <Route exact path={`${match.path}`}
                    render={(props) => <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />} />
                <Route path={`${match.path}/:collectionId`}
                    render={(props) => <CollectionPageWithSpinner isLoading={isLoading} {...props} />} />
            </div>
        );
    };
};

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);