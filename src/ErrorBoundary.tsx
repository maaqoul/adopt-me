// from react docs
import { Component, ErrorInfo, ReactNode } from "react";
import { Link, Redirect } from "react-router-dom";

interface stateType {
  hasError: boolean;
  redirect: boolean;
}
class ErrorBoundary extends Component {
  state: stateType = { hasError: false, redirect: false };

  static getDerivedStateFromError(): stateType {
    return { hasError: true, redirect: false };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error("ErrorBoundary caught an error", error, info);
  }

  componentDidUpdate(): void {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }
  render(): ReactNode {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else if (this.state.hasError) {
      return (
        <h2>
          There was an error with this listing. <Link to="/">Click here</Link>{" "}
          to back to the home page or wait five seconds.
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
