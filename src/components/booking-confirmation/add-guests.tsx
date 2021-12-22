import styled from "styled-components"
import React, { FC, ReactElement, ReactNode, Component } from "react"

interface IProps {

}

interface State {
  guests?: Array<{email:string,admin:boolean}>
}


const StyledAddGuests = styled.section`
  display: grid;

  .add-guest__controls-container {
    display: flex;
    position: relative;
    align-items: center;
    background-color: var(--lightgray);
    border-bottom: 1px solid var(--primary);
  }

  .email-input {
    flex-grow: 1;
    border: none;
    outline: none;
    padding: 0 22px;
    color: var(--gray);
    background-color: var(--transparent);
  }

  .email-input::placeholder {
    color: var(--gray);
  }

  .submit-button {
    right: 0;
    width: 48px;
    height: 48px;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    position: absolute;
    color: var(--white);
    background-color: var(--transparent);
  }
  
  .add-guest-link-navigation__list,
  .add-guests__list {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .add-guest-link-navigation__list {
    display: grid;
  }

  .add-guests__heading {
    font-weight: bold;
    text-align: initial;
  }
    
  .add-guests__description {
    font-weight: 300;
    text-align: initial;
  }

  .add-guest__advice{
    color: var(--gray);
  }

  .add-new-guest{
    color: var(--gray);
    text-align: right;
    text-decoration: underline;
  }

  .add-guest-share__link {
    color: var(--primary);
    text-decoration: none;
  }

  .add-guest-share-action__link{
    color: var(--gray);
  }

  .add-guests__heading:before{
    content:"";
    display: block;
    position: relative;
    vertical-align: bottom;
    width: 100%;
    height: 1px;
    background-color: #707070;
    opacity: 0.6;
  }

  .added-guests{
    border-bottom: none;
  }

  .added-guests-admin{
    color: #00C49C !important;
  }

  @media screen and (min-width: 320px) and (max-width: 1439px) {
    display: grid;
    grid-row-gap: 16px;
    padding: 50px 20px 50px 20px;
    grid-template-rows: auto auto auto auto;
    grid-template-columns: 1fr;

    .add-guests__heading:before{
      top: -38px;
    }

    .add-guests__heading{
      font-size: 1.125rem;
    }
    
    .add-guest-share__link,
    .add-guest__advice,
    .add-guests__description{
      font-size: 0.875rem;
    }

    .add-guest__controls-container {
      height: 55px;
      width: 100%;
    }
    
    .added-guests-actions,
    .add-guest-share-action__link,
    .email-input {
      font-size: 0.75rem;
    }

    .icon-circle-right-arrow {
      margin-right: 22px;
    }

    .add-guest-link-navigation__list {
      grid-template-columns: 207px 60px 1fr;
    }

    .added-guests-actions{
      color: #707070;
      margin-right:14px;
    }
  }

  @media screen and (min-width: 1440px) {
    /*grid-row-gap: 26.16px;*/
    padding: 58.12px 212px;
    /*grid-column-gap: 70px;*/
    grid-template-rows: auto auto auto auto auto;
    grid-template-columns: repeat(1, minmax(485px, 48%));

    .added-guests-actions{
      color: #707070;
      margin: 0px 16px;
    }

    .add-guests__heading {
      /*max-width: 260px;*/
      font-size: 1.6rem;
    }

    .added-guests{
      margin-block-start: 1.2em
    }

    .add-guests__heading:before{
      top: -70px;
    }
    
    .add-guests__description {
      font-size: 1.4rem;
    }

    .add-guest__controls-container {
      height: 48px;
      width: 100%;
    }
    
    .added-guests-actions,
    .email-input {
      font-size: 1rem;
    }

    .icon-circle-right-arrow {
      margin-right: 16px;
    }

    .add-guest__advice{
      font-size: 1.08rem;
    }

    .add-guest-link-navigation__list {
      grid-template-columns: 163px 112.5px 1fr;
    }
    
    .add-new-guest,
    .add-guest-share__link,
    .add-guest-share-action__link{
      font-size: 0.81rem;
    }
  }

  @media screen and (min-width: 1920px) {
    padding: 58.12px 283px;
    .add-guest__controls-container {
      height: 55px;
      width: 100%;
    }
    
    .,added-guests-actions,
    .email-input {
      font-size: 1.125rem;
    }

    .add-guest-link-navigation__list {
      grid-template-columns: 164px 110px 1fr;
    }

    .add-new-guest,
    .add-guest-share__link,
    .add-guest-share-action__link{
      font-size: 1.05rem;
    }

    .add-guests__heading:before{
      top: -90px;
    }
  }
`

class AddGuests extends Component<IProps, State> {
  constructor(props: IProps, state: State) {
    super(props)

    this.state = {
      guests: [],
    }

    this.makeAdmin = this.makeAdmin.bind(this);
    this.removeAdmin = this.removeAdmin.bind(this);
    this.addGuest = this.addGuest.bind(this);
    this.removeGuest = this.removeGuest.bind(this);
  }

  addGuest(e){
    e.preventDefault();
    
    var newGuest = (document.getElementById("guest-input")) as HTMLInputElement;
    var newGuestVal = newGuest.value;
    if(newGuestVal !== ""){
      var newGuestsArray = this.state.guests.concat([{email:newGuestVal,admin:false}]);
      this.setState({
        guests: newGuestsArray,
      });
    }else{
      alert("Please, input a valid email.");
    }
  }

  makeAdmin(e, index){
    e.preventDefault();
  
    this.state.guests[index].admin = true;
    var newArray = this.state.guests;
    this.setState({
      guests: newArray,
    });
  }

  removeAdmin(e, index){
    e.preventDefault();
  
    this.state.guests[index].admin = false;
    var newArray = this.state.guests;
    this.setState({
      guests: newArray,
    });
  }

  removeGuest(e, index){
    e.preventDefault();

    this.state.guests.splice(index,1);
    this.setState({
      guests: this.state.guests,
    });
  }

  render(){
    return(
      <StyledAddGuests>
          <ul className="add-guests__list">
            <li>
              <h3 className="add-guests__heading">Add Guests</h3>
              <p className="add-guests__description">
                Don't leave anyone out. Let us know who's staying with you so we 
                can add them to your reservation and make them administrators of
                the reservation.
              </p>
            </li>
          </ul>
          <label className="add-guest__controls-container">
            <input id="guest-input" className="email-input" placeholder="Add guest Email"/>
            <input
              type="button"
              className="submit-button"
              onClick={ e => this.addGuest(e) }
            />
            <i className="icon-circle-right-arrow"></i>
          </label>
          {this.state.guests.map(function (guest, index) {
              return (
                <label className="add-guest__controls-container added-guests">
                  <input className="email-input" value={guest.email} readOnly/>
                  {guest.admin?
                    <a className="added-guests-actions added-guests-admin" href="#" onClick={ e => this.removeAdmin(e, index) }>Admin</a>
                    :
                    <a className="added-guests-actions" href="#" onClick={ e => this.makeAdmin(e, index) }>Make Admin</a>
                  }
                  <a className="added-guests-actions" href="#" onClick={ e => this.removeGuest(e, index) }>Remove</a>
                </label>
              ); 
            }, this)
          }
          {/*<p className="add-new-guest">Add New</p>*/}
          <p className="add-guest__advice">
            You can also share this link with added guests. Once they open it, they'll 
            be automatically added to your reservation and can access all of your trip details.
          </p>
          <ul className="add-guest-link-navigation__list">
              <li>
                <a className="add-guest-share__link" href="#">www.link.com</a>
              </li>
              <li>
                <a className="add-guest-share-action__link" href="#">Copy Link</a>
              </li>
              <li>
                <a className="add-guest-share-action__link" href="#">Share Link</a>
              </li>
          </ul>
      </StyledAddGuests>
    );
  }
}


export default AddGuests
