import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ThemeContext from './ThemeContext';
import Carousel from "./Carousel";
import ErrorBoundary from './ErrorBoundary';

class Details extends Component {

    state = { loading: true };

    async componentDidMount() {
        const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`);
        const json = await res.json();
        this.setState(Object.assign(
            {
                loading: false
            },
            json.pets[0]))
    }

    render() {
        const { animal, breed, city, description, name, state, loading, images } = this.state;

        if (loading) {
            return <h2>loading ...!</h2>
        }
        return (
            <div className="details">
                <Carousel images={images} />
                <div>
                    <h1>{name}</h1>
                    <h2>{animal} - {breed} - {city}, {state}</h2>
                    <ThemeContext.Consumer>
                        {([theme]) => {
                            return <button style={{ backgroundColor: theme }}>Adopt {name}!</button>
                        }}
                    </ThemeContext.Consumer>
                    <p>{description}</p>
                </div>
            </div>
        )
    }
}

// replace export
const DetailsWithRouter = withRouter(Details);

export default function DetailsErrorBoundary(props) {
    return (
        <ErrorBoundary>
            <DetailsWithRouter {...props} />
        </ErrorBoundary>
    );
}