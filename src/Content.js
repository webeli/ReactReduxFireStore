import React, { Component } from 'react';
import { Grid, Row, Col, Thumbnail, Button, Carousel } from 'react-bootstrap';

class Content extends Component {
    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={12} mdOffset={0}>
                        <Carousel style={{border:'2px solid #CCC', borderRadius:'3px', margin:'0px 0px 20px 0px'}}>
                            <Carousel.Item>
                                <img width={900} height={500} alt="900x500" src="https://dizw242ufxqut.cloudfront.net/images/content/160815-kurs16-50-990-ll-se.jpg"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img width={900} height={500} alt="900x500" src="https://dizw242ufxqut.cloudfront.net/images/content/160815-kurs16-50-990-ll-se.jpg"/>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col xs={12} md={3}>
                        <Thumbnail src="https://s-media-cache-ak0.pinimg.com/564x/cd/05/0a/cd050aa0ef2b25c93249e0a25857d222.jpg" alt="242x200">
                            <h3>Product 1</h3>
                            <p>Description</p>
                            <p>
                                <Button bsStyle="primary">View</Button>&nbsp;
                                <Button bsStyle="default">Add to cart</Button>
                            </p>
                        </Thumbnail>
                    </Col>
                    <Col xs={12} md={3}>
                        <Thumbnail src="https://s-media-cache-ak0.pinimg.com/564x/cd/05/0a/cd050aa0ef2b25c93249e0a25857d222.jpg" alt="242x200">
                            <h3>Product 1</h3>
                            <p>Description</p>
                            <p>
                                <Button bsStyle="primary">View</Button>&nbsp;
                                <Button bsStyle="default">Add to cart</Button>
                            </p>
                        </Thumbnail>
                    </Col>
                    <Col xs={12} md={3}>
                        <Thumbnail src="https://s-media-cache-ak0.pinimg.com/564x/cd/05/0a/cd050aa0ef2b25c93249e0a25857d222.jpg" alt="242x200">
                            <h3>Product 1</h3>
                            <p>Description</p>
                            <p>
                                <Button bsStyle="primary">View</Button>&nbsp;
                                <Button bsStyle="default">Add to cart</Button>
                            </p>
                        </Thumbnail>
                    </Col>
                    <Col xs={12} md={3}>
                        <Thumbnail src="https://s-media-cache-ak0.pinimg.com/564x/cd/05/0a/cd050aa0ef2b25c93249e0a25857d222.jpg" alt="242x200">
                            <h3>Product 1</h3>
                            <p>Description</p>
                            <p>
                                <Button bsStyle="primary">View</Button>&nbsp;
                                <Button bsStyle="default">Add to cart</Button>
                            </p>
                        </Thumbnail>
                    </Col>
                    <Col xs={12} md={3}>
                        <Thumbnail src="https://s-media-cache-ak0.pinimg.com/564x/cd/05/0a/cd050aa0ef2b25c93249e0a25857d222.jpg" alt="242x200">
                            <h3>Product 1</h3>
                            <p>Description</p>
                            <p>
                                <Button bsStyle="primary">View</Button>&nbsp;
                                <Button bsStyle="default">Add to cart</Button>
                            </p>
                        </Thumbnail>
                    </Col>
                    <Col xs={12} md={3}>
                        <Thumbnail src="https://s-media-cache-ak0.pinimg.com/564x/cd/05/0a/cd050aa0ef2b25c93249e0a25857d222.jpg" alt="242x200">
                            <h3>Product 1</h3>
                            <p>Description</p>
                            <p>
                                <Button bsStyle="primary">View</Button>&nbsp;
                                <Button bsStyle="default">Add to cart</Button>
                            </p>
                        </Thumbnail>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Content;