import { Component, FunctionComponent, lazy } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import ThemeContext from "./ThemeContext";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import { Animal, PetAPIResponse } from "./APIResponseTypes";

const Modal = lazy(() => import("./Modal"));

interface MatchParams {
  id: "string";
}

class Details extends Component<RouteComponentProps<MatchParams>> {
  state = {
    loading: true,
    showModal: false,
    animal: "" as Animal,
    breed: "",
    city: "",
    state: "",
    description: "",
    name: "",
    images: [] as string[],
  };

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = (await res.json()) as PetAPIResponse;
    this.setState(
      Object.assign(
        {
          loading: false,
        },
        json.pets[0]
      )
    );
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });
  adopt = () => (window.location.href = "http://bit.ly/pet-adopt");
  render() {
    const {
      animal,
      breed,
      city,
      description,
      name,
      state,
      loading,
      images,
      showModal,
    } = this.state;

    if (loading) {
      return <h2>loading ...!</h2>;
    }
    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {city}, {state}
          </h2>
          <ThemeContext.Consumer>
            {([theme]) => {
              return (
                <button
                  style={{ backgroundColor: theme }}
                  onClick={this.toggleModal}
                >
                  Adopt {name}!
                </button>
              );
            }}
          </ThemeContext.Consumer>
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h2>would you like to adopt {name} ?</h2>
                <div className="buttons">
                  <button onClick={this.adopt}>Yes</button>
                  <button onClick={this.toggleModal}>Nah!</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

// replace export
const DetailsWithRouter = withRouter(Details);

const DetailsErrorBoundary: FunctionComponent = function () {
  return (
    <ErrorBoundary>
      <DetailsWithRouter />
    </ErrorBoundary>
  );
};
export default DetailsErrorBoundary;
