import styled from "styled-components"
import { IUnit } from "types/generics"
import React, { FC, ReactElement, ReactNode, Component } from "react"
import { ISearchResult } from "types/generics"

interface IProps {
  children?: ReactNode,
  result?: ISearchResult,
  coverImg?: boolean,
}

interface State {
  showDatePicker?: boolean,
  checkIn?: string,
  checkOut?: string,
  days?: number,
  bookingSuccess?: boolean,
  showCouponInput?: boolean,
  couponCode?: string,
}

interface IStyledProps {
}

const StyledModulePanelBooking = styled.div<IStyledProps>`
  position: relative;
  border-radius: 6px;
  background-color: var(--licorice);

  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr;

  .pricing-breakdown{
    display: grid;
    grid-template-rows: 30px 30px 30px 30px;
    grid-template-columns: 1fr auto;
    color: var(--antiflashwhite);
    padding-top: 25px
  }

  .pricing-breakdown>p{
    margin-block-start: 0em;
    margin-block-end: 0em;
  }

  .search-result__img-container {
    margin: 0;
    z-index: 0;
  }

  .search-result__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .booking-panel{
    padding: 5px 32px;
  }

  .booking-panel__heading{
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 50% 50%;
  }

  .name,
  .price,
  .address {
    color: var(--antiflashwhite);
  }

  .price {
    display: flex;
    text-align: end;
    align-items: flex-end;
    justify-content: flex-end;
  }
  
  .name,
  .price {
    font-weight: bold;
  }


  .price::before {
    content: "$";
  }

  .price::after {
    content: "/Night";
  }

  .address{
    margin-block-start: 0px;
    margin-block-end: 0px;
    font-weight: normal;
    margin-bottom: 72px;
  }
  
  .add-coupon__controls-container,
  .add-guest__controls-container {
    display: flex;
    position: relative;
    align-items: center;
    background-color: var(--raisinblack);
  }

  .add-coupon__controls-container{
    margin-top: 30px;
    border-bottom: 1px solid var(--primary);
    background-color: #1A1A1A;
  }

  .email-input {
    flex-grow: 1;
    border: none;
    outline: none;
    color: var(--antiflashwhite);
    background-color: var(--transparent);
  }

  .coupon-input{
    flex-grow: 1;
    border: none;
    outline: none;
    color: var(--dimgray);
    background-color: var(--transparent);
  }

  .email-input::placeholder {
    color: var(--antiflashwhite);
    font-weight: normal;
  }

  .coupon-input::placeholder{
    color: var(--dimgray);
    font-weight: normal;
  }

  .send-request__link {
    text-align: center;
    color: var(--white);
    border-radius: 40px;
    text-decoration: none;
    box-sizing: border-box;
    background-color: var(--primary);
    margin: 1.5em 0em 1.5em 0em;
    border: none;
    width: 100%;
  }

  #dummy-datepicker{
    width: 790px;
    height: 360px;
    position: absolute;
    background-color: #303030;
    right: 32px;
  }

  .pricing-total{
    margin-top: 30px !important;
  }

  .pricing-total:before{
    content:"";
    display: block;
    position: relative;
    vertical-align: bottom;
    width: 100%;
    height: 1px;
    background-color: #707070;
    top: -15px;
  }

  .pricing-breakdown-cost{
    text-align: right;
  }

  .discount-row{
    color: #00C49C;
  }

  .add-coupon__link{
    color: var(--primary);
  }

  .add-coupon__link-container{
    margin-top: 45px;
  }
  
  .add-coupon__link,
  .coupon-input-apply{
    text-decoration: underline;
  }
  
  .payment-info,
  .payment-method-info{
    color: var(--antiflashwhite);
    font-weight: normal;
  }

  .payment-method-info{
    margin-top: 50px;
  }

  .payment-info{
    margin-bottom: 30px;
  }

  @media screen and (min-width: 1440px) {
    width: 440px;

    .name{
      font-size: 1.53rem;
    }

    .price{
      font-size: 1.33rem;
    }

    .address{
      font-size: 1.07rem;
    }
    
    .add-coupon__controls-container,
    .add-guest__controls-container {
      height: 48px;
      width: 100%;
    }
    
    .coupon-input-apply,
    .coupon-input,
    .email-input {
      font-size: 1rem;
    }
    
    .payment-method-info,
    .coupon-input::placeholder,
    .email-input::placeholder {
      font-size: 0.9rem;
    }

    .coupon-input{
      padding: 0 22px;
    }
    
    .coupon-input-apply,
    .icon-circle-right-arrow {
      color: var(--antiflashwhite);
      padding: 0 22px;
    }

    .send-request__link {
      padding: 20px 25px;
      font-size: 0.92rem;
    }
    
    .add-coupon__link,
    .pricing-breakdown>p{
      font-size: 0.8rem;
    }

    .payment-info{
      font-size: 0.7rem;
    }
  }

  @media screen and (min-width: 1920px) {
    width: 536px;

    .name{
      font-size: 1.93rem;
    }

    .price{
      font-size: 1.73rem;
    }

    .address{
      font-size: 1.375rem;
    }
    
    .add-coupon__controls-container,
    .add-guest__controls-container {
      height: 55px;
      width: 100%;
    }
    
    .coupon-input-apply,
    .coupon-input,
    .email-input {
      font-size: 1.125rem;
    }
    
    .payment-method-info,
    .coupon-input::placeholder,
    .email-input::placeholder {
      font-size: 1.125rem;
    }

    .send-request__link {
      padding: 25px 35px;
      font-size: 1.2rem;
    }
  
    .add-coupon__link,
    .pricing-breakdown>p{
      font-size: 1.05rem;
    }

    .payment-info{
      font-size: 1rem;
    }
  }
`

class ModulePanelBooking extends Component<IProps, State> {
  constructor(props: IProps, state: State) {
    super(props)

    this.state = {
      showDatePicker: false,
      checkIn: null,
      checkOut: null,
      days: null,
      bookingSuccess: false,
      showCouponInput: false,
      couponCode: null,
    }

    this.assignDate = this.assignDate.bind(this);
    this.bookNow = this.bookNow.bind(this);
    this.showDatePicker = this.showDatePicker.bind(this);
    this.showCouponInput = this.showCouponInput.bind(this);
    this.applyCoupon = this.applyCoupon.bind(this);
  }

  componentDidMount() {
    
  }

  componentWillUnmount() {
    
  }

  showDatePicker() {
    if(!this.state.bookingSuccess){
      this.setState({
        showDatePicker: true,
      });
    }
  }

  assignDate() {
    alert("Assigned Random Date!");
    var checkInDate = new Date(2020, 2, 23);
    var checkOutDate = new Date(2020, 2, 27);
    var days = ((checkOutDate.getTime()-checkInDate.getTime())/(1000 * 3600 * 24));
    this.setState({
      checkIn: checkInDate.toString(),
      checkOut: checkOutDate.toString(),
      showDatePicker: false,
      days: days,
    });
  }

  bookNow(){
    if(this.state.checkIn === null || this.state.checkOut === null){
      alert("You must select dates first!");
    }else{
      this.setState({
        bookingSuccess: true,
      });
    }
  }

  showCouponInput(){
    if(!this.state.bookingSuccess){
      this.setState({
        showCouponInput: true,
      });
    }
  }

  applyCoupon(){
    var coupon = document.getElementsByClassName("coupon-input")["0"].value;
    if(coupon === ""){
      this.setState({
        couponCode: null,
        showCouponInput: false,
      });
    }else{
      this.setState({
        couponCode: coupon,
        showCouponInput: false,
      });
    }
  }

  render() {
    console.log(this.state);
    return(
      <StyledModulePanelBooking>
        { this.props.coverImg && 
          <figure className="search-result__img-container">
            <img
              alt="booking search result"
              src="/img/booking-panel.png"
              className="search-result__img"
            />
          </figure>
        }
        <div className="booking-panel">
          <div className="booking-panel__heading">
            <h3 className="name">{ this.props.result && this.props.result.name }</h3>
            <h3 className="price">{ this.props.result && this.props.result.price }</h3>
          </div>
          <h4 className="address">
            { this.props.result && this.props.result.address }
          </h4>
          <label className="add-guest__controls-container">
            <i className="icon-circle-right-arrow"></i>
            <input className="email-input" placeholder="Check In - Check Out" onClick={this.showDatePicker}/>
          </label>
          { this.state.showDatePicker && 
            <div id="dummy-datepicker" onClick={this.assignDate}></div>
          }
          {(this.state.days && this.state.couponCode) ? 
            <div className="pricing-breakdown">
              <p className="discount-row">Discount</p>
              <p className="pricing-breakdown-cost discount-row">$00</p>
              <p>{this.state.days} Night Price</p>
              <p className="pricing-breakdown-cost">$00</p>
              <p>Cleaning Fee</p>
              <p className="pricing-breakdown-cost">$00</p>
              <p>Tax</p>
              <p className="pricing-breakdown-cost">$00</p>
              <p className="pricing-total">Total</p>
              <p className="pricing-total">$0000</p>
            </div>
            : (this.state.days) ?
            <div className="pricing-breakdown">
              <p>{this.state.days} Night Price</p>
              <p className="pricing-breakdown-cost">$00</p>
              <p>Cleaning Fee</p>
              <p className="pricing-breakdown-cost">$00</p>
              <p>Tax</p>
              <p className="pricing-breakdown-cost">$00</p>
              <p className="pricing-total">Total</p>
              <p className="pricing-total">$0000</p>
            </div>
            : null
          }
          { (!this.state.bookingSuccess && this.state.days && !this.state.showCouponInput && this.state.couponCode === null) && 
            <div className="add-coupon__link-container">
              <a className="add-coupon__link" onClick={this.showCouponInput}>+ Add Coupon Code</a>
            </div>
          }
          { (!this.state.bookingSuccess && this.state.days && this.state.showCouponInput) && 
            <label className="add-coupon__controls-container">
              <input className="coupon-input" placeholder="Enter Promo code"/>
              {/*<i className="icon-circle-right-arrow"></i>*/}
              <a className="coupon-input-apply" onClick={this.applyCoupon}>Apply</a>
            </label>
          }
          { (this.state.days && this.state.couponCode !== null && this.state.showCouponInput === false) && 
            <div className="add-coupon__link-container">
              <a className="add-coupon__link" onClick={this.showCouponInput}>Promo code {this.state.couponCode} applied</a>
            </div>
          }
          { (!this.state.bookingSuccess) && 
            <button className="send-request__link" onClick={this.bookNow}>Book Now</button>
          }
          { (this.state.bookingSuccess) && 
            <div>
            <p className="payment-method-info">Paid with Mastercard ****6789 (11/11/11)</p>
            <p className="payment-info">On your statement the charge will appear under casai corp</p>
            </div>
          }
        </div>
      </StyledModulePanelBooking>
    );
  }
}

export default ModulePanelBooking