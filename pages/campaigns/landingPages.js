import React, { Component } from 'react';
import { Button, Card, Grid } from 'semantic-ui-react';
import Campaign from '../../ethereum/campaign';
import ContributeForm from '../../components/ContributeForm';
import Layout from '../../components/Layout';
import Link from 'next/link';
import web3 from '../../ethereum/web3';

class landingPages extends Component {
    render() {
        return (
          <div>
            <br />
            <div className="justify-content-md-center">
              <span>
                <img className="landing-page-image" src='../image' alt="Landing page image" fluid />
              </span>
              <span>
                <br />
                <br />
                <center className="landing-page-button">
                  <span className="heading-content">Welcome !</span>
                  <br />
                  <br />
                  <div className="d-grid gap-4">
                    <Button variant="primary" className="btn-primary" size="lg">
                      <Link to="/login/customer">Start a new contribution..</Link>
                    </Button>
                    <Button variant="success" size="lg">
                      <Link to="/login/restaurant">Startup Request..</Link>
                    </Button>
                  </div>
                </center>
              </span>
            </div>
            {/* </Container> */}
          </div>
        );
    }    
}

export default landingPages;