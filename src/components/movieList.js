import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col, Container } from "reactstrap";
import { getMovies } from "../actions/movieActions";
import { connect } from "react-redux";

class MovieList extends Component {
  render() {
    return (
      <Container>
        <Row>
          {this.props.movies.movies.results ? (
            this.props.movies.movies.results.map(result => {
              return (
                <Col key={result.id} lg="4" md="6" sm="12" className="d-flex align-items-stretch mt-4">
                  <Card>
                    {result.backdrop_path ? (
                      <CardImg
                        top
                        width="100%"
                        src={"https://image.tmdb.org/t/p/original/" + result.backdrop_path}
                        alt=""
                      />
                    ) : (
                      <CardImg top width="100%" src={"https://via.placeholder.com/150"} alt="" />
                    )}
                    <CardBody>
                      <CardTitle>{result.original_title}</CardTitle>
                      <CardSubtitle>{result.release_date}</CardSubtitle>
                      <CardText>
                        {result.overview.length < 100 ? result.overview : result.overview.slice(0, 100)}...{" "}
                      </CardText>
                      <Button>Button</Button>
                    </CardBody>
                  </Card>
                </Col>
              );
            })
          ) : (
            <Col lg="4" md="6" sm="12" className="d-flex align-items-stretch mt-4">
              No Results
            </Col>
          )}
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
)(MovieList);
