import styled from "styled-components"
import React, { FC, ReactElement, ReactNode, Component } from "react"

import ModulePanelBookedSmall from "../module-panel-booked-small"

interface IProps {

}

interface State {
  isMobile?: boolean,
}

const StyledBookingConfirmationHead = styled.section`
  font: Moderat;

  .confirmation-notify__list {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .confirmation-notify__heading {
    font-weight: bold;
    text-align: initial;
  }

  .download-app__heading{
  	font-weight: bold;
    text-align: initial;
    color: var(--primary);
  }

  .confirmation-notify__description>a,
  .confirmation-notify__description,
  .booking-advantages__description {
    text-align: initial;
    color: var(--gray);
  }

  .app-store-navigation__list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: grid;
  }

  .app-store-navigation__link {
    color: none;
    text-decoration: none;
  }

  .icon-appstore,
  .icon-playstore {
    font-size: 2.5rem;
    color: var(--darkgray);
  }

  .path1 {
    color: var(--mildwhite);
  }

  .booking-confirmation__img-container {
    margin: 0;
    display: flex;
    justify-content: center;
  }

  @media screen and (min-width: 320px) and (max-width: 1439px) {
    display: grid;
    grid-row-gap: 16px;
    padding: 30px 20px;
    grid-template-rows: auto auto auto auto auto;
    grid-template-columns: 1fr;

    .booking-advantages__description {
      color: var(--black);
    }

    .confirmation-notify__heading {
      font-size: 1.5rem;
    }

    .confirmation-notify__description {
      font-size: 0.875rem;
      max-width: 200px;
    }

    .download-app__heading{
      font-size: 2.17rem;
      max-width: 273px;
      margin-block-end: 0.2em;
    }

    .app-store-navigation__list {
      grid-column-gap: 20px;
      grid-template-columns: 40% 40%;
    }

    .booking-advantages__list{
      list-style-type: none;
      display: grid;
      grid-template-columns: 1fr;
      max-width: 281px;
      padding: 5px 0px 0px 0px;
    }

    .booking-advantages__heading{
      font-size: 1.125rem;
    }

    .booking-advantages__description{
      font-size: 0.875rem;
    }

    .booking-confirmation__img {
      width: 70%;
      object-fit: cover;
    }

    .booking-confirmation__img-container{
      position: relative;
    }

    .app-showcase__img-shadow{
      width: 100%;
      position: absolute;
      border-radius: 50%;
      background-color: var(--licorice);
      height: 20px;
      width: 50%
      z-index: -1;
      bottom: 10px;
    }
  }

  @media screen and (min-width: 1440px) {
    display: grid;
    grid-row-gap: 16px;
    padding: 58.12px 212px;
    grid-column-gap: 170px;
    grid-template-rows: auto auto auto auto auto;
    grid-template-columns: 48% 1fr;
    grid-auto-flow: column;

    grid-template-areas:
    "confirmation-notify__list module-container"
    "download-app__heading module-container"
    "app-store-navigation module-container"
    "booking-advantages__list module-container"
    "booking-confirmation__img-container module-container";

    .module-container{
      grid-area: module-container;
    }

    .booking-advantages__list{
      margin: 0;
      padding: 30px 0px 0px 0px;
      list-style-type: none;
      display: grid;
      grid-row-gap: 1em;
      grid-column-gap: 100px;
      grid-template-rows: auto auto;
      grid-template-columns: auto auto;
    }

    .booking-confirmation__img {
      width: 50%;
      object-fit: cover;
    }

    .booking-advantages__list{
      margin: 0;
      padding: 30px 0px 0px 0px;
      list-style-type: none;
      display: grid;
      grid-row-gap: 1em;
      grid-column-gap: 100px;
      grid-template-rows: auto auto;
      grid-template-columns: auto auto;
    }

    .confirmation-notify__heading {
      font-size: 1.8rem;
    }

    .confirmation-notify__description,
    .booking-advantages__description {
  	  font-size: 0.82rem;
  	}

  	.download-app__heading{
  	  font-size: 1.9rem;
  	}

	  .app-store-navigation__list {
      grid-column-gap: 54px;
      grid-template-columns: repeat(2,122px);
    }

    .booking-advantages__heading{
      font-size: 0.7rem;
    }

    .booking-confirmation__img-container>img:nth-child(2) {
  	  position:relative;
  	  left:-30px;
  	}
  }

  @media screen and (min-width: 1920px) {
    padding: 58.12px 283px;
    .booking-advantages__heading{
      font-size: 1.2rem;
    }

    .confirmation-notify__heading {
      font-size: 2.5rem;
    }

    .confirmation-notify__description,
    .booking-advantages__description {
	  font-size: 1.08rem;
	}

	.download-app__heading{
	  font-size: 2.9rem;
	}

	.app-store-navigation__list {
      grid-template-columns: repeat(2,132px);
    }

    .app-store-navigation__list-item {
      width: 132px;
      height: 44px;
    }

    .booking-confirmation__img-container>img:nth-child(2) {
	  position:relative;
	  left:-40px;
	}
  }
`

const searchResults = {
  id: 1,
  name: "Frida Kahlo Rooftop Suite",
  address: "Chapultepec 23, Condesa",
  price: 120,
  equipment: {
    people: 4,
    bedrooms: 2,
    bathrooms: 2,
  }
}

class BookingConfirmationHead extends Component<IProps, State> {
  constructor(props: IProps, state: State) {
    super(props)

    this.state = {
      isMobile: false,
    }
  }

  handleWindowResize = () => {
    this.setState({ isMobile: window.innerWidth < 992 });
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize);
    /*alert(window.innerWidth);
    this.setState({ isMobile: window.innerWidth < 380 });*/
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  }

  render(){
    return(
      <StyledBookingConfirmationHead>
      	<ul className="confirmation-notify__list">
          <li>
            <h2 className="confirmation-notify__heading">
        			Thank you Sebastian!<br/>
        			We are excited to host you
            </h2>
            <p className="confirmation-notify__description">
              We sent a confirmation email to email@mail.com.<br/>
              Haven't received it? <a href="#">Send it again</a>
            </p>
          </li>
        </ul>
        {this.state.isMobile &&
          <ModulePanelBookedSmall result={searchResults} coverImg/>
        }
        <h1 className="download-app__heading">Upgrade your stay, download our versatile app</h1>
    	  <nav className="app-store-navigation">
            <ul className="app-store-navigation__list">
              <li className="app-store-navigation__list-item">
                <a href="#" className="app-store-navigation__link">
                  <span className="icon-appstore">
                    <span className="path path1"></span>
                    <span className="path path2"></span>
                    <span className="path path3"></span>
                    <span className="path path4"></span>
                    <span className="path path5"></span>
                    <span className="path path6"></span>
                    <span className="path path7"></span>
                    <span className="path path8"></span>
                    <span className="path path9"></span>
                    <span className="path path10"></span>
                    <span className="path path11"></span>
                    <span className="path path12"></span>
                    <span className="path path13"></span>
                    <span className="path path14"></span>
                    <span className="path path15"></span>
                    <span className="path path16"></span>
                    <span className="path path17"></span>
                    <span className="path path18"></span>
                    <span className="path path19"></span>
                    <span className="path path20"></span>
                    <span className="path path21"></span>
                    <span className="path path22"></span>
                    <span className="path path23"></span>
                    <span className="path path24"></span>
                    <span className="path path25"></span>
                    <span className="path path26"></span>
                    <span className="path path27"></span>
                    <span className="path path28"></span>
                    <span className="path path29"></span>
                    <span className="path path30"></span>
                  </span>
                 </a>
              </li>
              <li className="app-store-navigation__list-item">
                <a href="#" className="app-store-navigation__link">
                <span className="icon-playstore">
                    <span className="path path1"></span>
                    <span className="path path2"></span>
                    <span className="path path3"></span>
                    <span className="path path4"></span>
                    <span className="path path5"></span>
                    <span className="path path6"></span>
                    <span className="path path7"></span>
                    <span className="path path8"></span>
                    <span className="path path9"></span>
                    <span className="path path10"></span>
                    <span className="path path11"></span>
                    <span className="path path12"></span>
                    <span className="path path13"></span>
                    <span className="path path14"></span>
                    <span className="path path15"></span>
                    <span className="path path16"></span>
                    <span className="path path17"></span>
                    <span className="path path18"></span>
                    <span className="path path19"></span>
                    <span className="path path20"></span>
                    <span className="path path21"></span>
                    <span className="path path22"></span>
                    <span className="path path23"></span>
                    <span className="path path24"></span>
                    <span className="path path25"></span>
                    <span className="path path26"></span>
                    <span className="path path27"></span>
                    <span className="path path28"></span>
                    <span className="path path29"></span>
                    <span className="path path30"></span>
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        <ul className="booking-advantages__list">
          {!this.state.isMobile &&
          <li>
          	<h3 className="booking-advantages__heading">Control your apartment</h3>
            <p className="booking-advantages__description">
              Dim the lights, turn on your TV, or play your favorite song. Control
              your apartment in just one click.
            </p>
          </li>
          }
          {!this.state.isMobile &&
          <li>
          	<h3 className="booking-advantages__heading">Access Room Services</h3>
            <p className="booking-advantages__description">
              Order food, get a ride, or even schedule an in-house massage.
            </p>
          </li>
          }
          <li> 
          	<h3 className="booking-advantages__heading">Always stay Connected</h3>
            <p className="booking-advantages__description">
              Live chat with our 24/7 concierge staff and browse through our 
              curated city guides.
            </p>
          </li>
          {!this.state.isMobile &&
          <li> 
          	<h3 className="booking-advantages__heading">Easily manage your trip</h3>
            <p className="booking-advantages__description">
              Access all of your booking details, directions and check-in codes all in one place.
            </p>
          </li>
          }
        </ul>
        {!this.state.isMobile ?
          <figure className="booking-confirmation__img-container">
          	<img className="booking-confirmation__img" alt="people" src="/img/crowd.png"/>
          	<img className="booking-confirmation__img" alt="people" src="/img/crowd.png"/>
          </figure>
        :
          <figure className="booking-confirmation__img-container">
            <img className="booking-confirmation__img" alt="people" src="/img/women.png"/>
            <div className="app-showcase__img-shadow"></div>
          </figure>
        }
        {!this.state.isMobile &&
          <div className="module-container">
            <ModulePanelBookedSmall result={searchResults} coverImg/>
          </div>
        }
      </StyledBookingConfirmationHead>
    );
  }
}


export default BookingConfirmationHead
