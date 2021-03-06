import { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends PureComponent {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
        }
    }

    render() {
        const {
            children
        } = this.props;

        return children;
    }
}

export default withRouter(ScrollToTop);
