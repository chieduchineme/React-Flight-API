import React, { Component } from 'react';

class ErrorBoundaryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error('Error caught by error boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h2>Something went wrong:</h2>
          <p>{this.props.error}</p>
        </div>
      );
    }

    return this.props.children; // Render the dashboard component as normal
  }
}

export default ErrorBoundaryComponent;