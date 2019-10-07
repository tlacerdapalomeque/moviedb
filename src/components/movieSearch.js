import React, { Component } from "react";
import { Row, Col, Container, Label, Input, Form, FormGroup } from "reactstrap";
import { getMovies } from "../actions/movieActions";
import { connect } from "react-redux";

class MovieSearch extends Component {
  handleChange = e => {
    let movieSearchText = e.target.value;
    this.props.getMovies(movieSearchText);
  };

  render() {
    return (
      <Container className="mt-4">
        <Row>
          <Col>
            <Form>
              <FormGroup>
                <Label htmlFor="txtMovie">Movie</Label>
                <Input type="text" name="txtMovie" id="txtMovie" placeholder="Search" onChange={this.handleChange} />
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(
  mapStateToProps,
  { getMovies }
)(MovieSearch);
