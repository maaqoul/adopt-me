import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Carousel from "./Carousel";

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
                    <button>Adop Me!</button>
                    <p>{description}</p>
                </div>
            </div>
        )
    }
}


export default withRouter(Details);