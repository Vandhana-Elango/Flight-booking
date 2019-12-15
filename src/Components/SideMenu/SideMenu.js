import React, { Component } from 'react';
import adminLogo from '../Assets/adminLogo.png';
import Flight from '../Form/Flight';
import Posoffice from '../Form/Posoffice';
import './SideMenu.css';
import { connect } from 'react-redux';
import { getUserData } from '../Store/actions';

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showContent: false,
      showSale: true
    };
  }

  componentDidMount() {
    this.props.dispatch(getUserData());
  }

  handleSearchFlights = () => {
    this.setState({
      showSale: false,
      showContent: !this.state.showContent
    });
  };

  handleSales = () => {
    this.setState({
      showContent: false,
      showSale: !this.state.showSale
    });
  };

  render() {
    return (
      <div>
        <header className="navbar-header">
          <span>
            <i className="fa fa-search"></i>
            <input
              type="search"
              placeholder="TRIPID/AGENT REF"
              style={{
                border: "0px"
              }}
            />
          </span>
          <span>Hi, {this.props.userData.username}</span>
        </header>
        <aside className="main-sidebar">
          <section>
            <div className="Logo">
              <img src={adminLogo} alt="Logo" />
            </div>
            <br />
            <ul>
              <li>
                <i className="fa fa-home"></i>
                <span>Dashboard</span>
              </li>
              <li>
                <i className="fa fa-globe"></i>
                <span onClick={this.handleSales}>Point of Sale Managment</span>
                <span className="label label-primary pull-right">
                  <i className="fa fa-chevron-left"></i>
                </span>

                <ul>
                  <li>Add Point of Sale</li>
                  <li>List Point of Sale</li>
                  <li>Registrations</li>
                </ul>
              </li>
              <li>
                <i className="fa fa-user"></i>
                <span>User Role Mannagement</span>
                <span className="label label-primary pull-right">
                  <i className="fa fa-chevron-left"></i>
                </span>
              </li>
              <li>
                <i className="fa fa-globe"></i>
                <span>Setup/Configuration</span>
                <span className="label label-primary pull-right">
                  <i className="fa fa-chevron-left"></i>
                </span>
              </li>

              <li>
                <i className="fa fa-search"></i>

                <span>Search</span>
                <span className="label label-primary pull-right">
                  <i className="fa fa-chevron-left"></i>
                </span>

                <ul>
                  <li
                    style={{ color: "#cc0c00" }}
                    onClick={this.handleSearchFlights}
                  >
                    <i className="fa fa-plane"></i>Flights
                  </li>
                </ul>
              </li>
              <li>
                <i className="fa fa-globe"></i> <span>Corporates</span>
                <span className="label label-primary pull-right">
                  <i className="fa fa-chevron-left"></i>
                </span>
              </li>
              <li>
                <i className="fa fa-bookmark"></i> <span>Preset Package</span>
                <span className="label label-primary pull-right">
                  <i className="fa fa-chevron-left"></i>
                </span>
              </li>
              <li>
                <i className="fa fa-calendar"></i> <span>Bookings</span>
              </li>
              <li>
                <i className="fa fa-bookmark"></i> <span>Accounts</span>
                <span className="label label-primary pull-right">
                  <i className="fa fa-chevron-left"></i>
                </span>
              </li>
              <li>
                <i className="fa fa-indent"></i> <span>Report</span>
              </li>
              <li>
                <i className="fa fa-info-circle"></i> <span>Help</span>
              </li>
            </ul>
            <div>
        <footer className="navbar-footer">
          <h6>Powered By TPConnects 1.7.9</h6>
        </footer>
        </div>
        </section>
        </aside>
        
        <main>
          {this.state.showSale && <Posoffice />}
          {this.state.showContent && <Flight />}
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userData: state
  };
};

export default connect(mapStateToProps)(SideMenu);
