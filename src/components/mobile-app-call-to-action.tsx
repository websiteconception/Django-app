import styled from "styled-components"
import React, { FC, ReactElement } from "react"


const StyledMobileAppCallToAction = styled.section`
  display: grid;
  .call-to-action__heading {
    margin: 0;
  }

  .call-to-action__heading {
    font-weight: normal;
    color: var(--primary);
    letter-spacing: -0.96px;
  }

  .app-perks__list,
  .app-store-navigation__list {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .app-store-navigation__list {
    display: grid;
  }

  .app-perks__list {
    grid-area: perk-navigation;
  }

  .app-perk__description {
    margin: 0;
    font-weight: 300;
  }

  .icon-appstore,
  .icon-playstore {
    font-size: 2.5rem;
    color: var(--darkgray);
  }

  .app-showcase__img-container {
    position: relative;
  }

  .app-showcase__img {
    z-index: 1;
    width: 100%;
    height: 100%;
    position: relative;
  }

  .app-showcase__img-shadow {
    z-index: 0;
    width: 100%;
    position: absolute;
    border-radius: 50%;
    background-color: var(--licorice);
  }

  .app-store-navigation__link {
    color: none;
    text-decoration: none;
  }

  .path1 {
    color: var(--mildwhite);
  }

  @media screen and (min-width: 1440px) {
    grid-row-gap: 56px;
    padding: 340px 140px;
    grid-column-gap: 70px;
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr auto 1fr;
    grid-template-areas:
      "call-to-action-heading perk-navigation call-to-action-img"
      "app-store-navigation perk-navigation call-to-action-img";

    .call-to-action__heading {
      width: 362px;
      font-size: 3rem;
      grid-area: call-to-action-heading;
    }

    .app-store-navigation {
      grid-area: app-store-navigation;
    }

    .app-store-navigation__list {
      grid-column-gap: 54px;
      grid-template-columns: repeat(2,122px);
    }

    .app-perks__list {
      height: 100%;
      display: flex;
    }

    .app-showcase__img-container {
      margin: 0;
      grid-area: call-to-action-img;
    }

    .app-perk__heading {
      font-size: 1.5rem;
    }

    .app-perk__description {
      width: 250px;
      line-height: 35px;
      font-size: 1.5rem;
    }

    .app-showcase__img-container {
      height: 420px;
      max-width: 380px;
    }

    .app-showcase__img-shadow {
      height: 40px;
      bottom: 25px;
    }
  }


  @media screen and (min-width: 1920px) {
    .call-to-action__heading {
      width: 600px;
      font-size: 5rem;
    }

    .app-store-navigation__list {
      grid-template-columns: repeat(2,132px);
    }

    .app-store-navigation__list-item {
      width: 132px;
      height: 44px;
    }

    .app-perk__description {
      width: 400px;
      line-height: 50px;
      font-size: 2.25rem;
    }

    .app-perk__heading {
      font-size: 1.875rem;
    }

    .app-showcase__img-container {
      height: 556px;
      max-width: 470px;
    }

    .app-showcase__img-shadow {
      bottom: 40px;
    }
  }
`


const MobileAppCallToAction: FC = () : ReactElement => (
  <StyledMobileAppCallToAction>
    <h1 className="call-to-action__heading">
      Upgrade your stay,
      download our versatile app
    </h1>
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
      <ul className="app-perks__list">
        <li className="app-perks__list-item">
          <h3 className="app-perk__heading">Stay connected</h3>
          <p className="app-perk__description">
            Live chat with our dedicated concierge staff,
            discover where to get the best coffee, or search for the coolest
            events near you.
          </p>
        </li>
         {/* <li className="app-perks__list-item">
          <h3 className="app-perk__heading">organize your trip</h3>
          <p className="app-perk__description">
            Get all your booking details saved in one place. Sync all your
            travel documents on our app and arrive at ease.
          </p>
        </li>
        <li className="app-perks__list-item">
          <h3 className="app-perk__heading">relax and enjoy</h3>
          <p className="app-perk__description">
            Order food, get a ride or even schedule an in-house massage.
            Tell us what you need and we’ll bring it to your front door.
          </p>
        </li> */}
      </ul>
      <figure className="app-showcase__img-container">
        <img className="app-showcase__img" alt="women" src="/img/women.png"/>
        <div className="app-showcase__img-shadow"></div>
      </figure>
  </StyledMobileAppCallToAction>
)


export default MobileAppCallToAction