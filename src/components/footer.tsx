import styled from "styled-components"
import React, { FC, ReactElement } from "react"
import NewsletterForm from "components/forms/newsletter-form"


const StyledFooter = styled.footer`
  display: grid;
  color: var(--white);
  background-color: var(--black);

  .community-panel {
    display: flex;
    flex-direction: column;
  }

  .community-panel__call-to-action {
    margin: 0;
    text-align: left;
    font-weight: normal;
  }

  .latest-blog-entry {
    margin: 0;
    margin-bottom: 10px;
    color: var(--antiflashwhite);
  }

  .social-network__list {
    margin: 0;
    padding: 0;
    display: grid;
    width: fit-content;
    list-style-type: none;
    grid-column-gap: 18px;
    grid-template-columns: repeat(4,1fr);
  }

  .social-network__link {
    width: 48px;
    height: 48px;
    padding: 4px;
    display: flex;
    font-size: 1.5rem;
    border-radius: 30px;
    align-items: center;
    text-decoration: none;
    box-sizing: border-box;
    justify-content: center;
    border: 2px solid whitesmoke;
    transition: background-color 0.2s;
  }

  .icon {
    color: var(--white);
    transition: color 0.2s;
  }

  .social-network__link:hover {
    background-color: var(--truewhite);
  }
  
  .social-network__link:hover .icon {
    color: var(--darkgray);
  }

  .icon-medium-letter {
    font-size: 1rem;
  }


  .copyright {
    display: flex;
    color: var(--gray);
  }

  .site-information {
    display: grid;
  }

  .site__list {
    margin: 0;
    padding: 0;
    display: grid;
    list-style-type: none;
  }

  .title {
    font-weight: normal;
    text-transform: capitalize;
  }

  .site__list-item {
    text-transform: capitalize;
  }

  .company-info__link {
    color: var(--white);
    text-decoration: none;
  }

  .icon-casai-logo-white {
    font-size: 2.875rem;
  }

  .latest-blog-entry__link {
    color: var(--primary);
    text-decoration: none;
  }

  .blog-post__img-container {
    margin: 0;
  }

  .blog-post__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .blog-post__title {
    margin: 0;
    margin-top: 20px;
    text-align: left;
  }

  .info__lists {
    flex-grow: 2;
    display: grid;
    grid-column-gap: 64px;
    grid-template-columns: auto 1fr;
  }

  @media screen and (min-width: 1440px) {
    padding: 100px 140px;
    grid-auto-flow: column;
    grid-column-gap: 180px;
    grid-template-rows: repeat(2,auto);
    grid-template-columns: repeat(3, 1fr);

    .community-panel__call-to-action {
      width: 250px;
      font-size: 1.5rem;
      margin-bottom: 40px;
    }

    .icon-casai-logo-white {
      font-size: 1.8rem;
      margin-bottom: 50px;
    }

    .copyright {
      height: 260px;
      font-size: 1rem;
      align-items: flex-end;
    }

    .blog-post__img-container {
      width: 230px;
      height: 230px;
    }

    .blog-post {
      grid-row: 1/-1;
    }

    .blog-post__title {
      width: 220px;
      font-size: 1.5rem;
      margin-bottom: 25px;
    }

    .latest-blog-entry,
    .latest-blog-entry__link {
      font-size: 1.125rem;
    }

    .title {
      margin: 0;
      font-size: 1.125rem;
      margin-bottom: 38px;
    }

    .site__list {
      grid-row-gap: 18px;
      grid-template-rows: repeat(3,22px);
    }


    .site-information {
      grid-auto-flow: column;
      grid-template-rows: auto 1fr;
      grid-template-columns: repeat(2,1fr);
    }
  }

  @media screen and (min-width: 1920px) {
    grid-column-gap: 254px;

    .community-panel {
      padding-right: 64px;
    }

    .community-panel__call-to-action {
      width: 328px;
      font-size: 2.25rem;
      letter-spacing: -0.16px;
    }

    .icon-casai-logo-white {
      margin-bottom: 72px;
    }

    .copyright {
      height: 340px;
      font-size: 1.375rem;
    }

    .blog-post__img-container {
      width: 294px;
      height: 294px;
    }

    .blog-post__title {
      width: 282px;
      margin-bottom: 30px;
      font-size: 1.875rem;
    }

    .latest-blog-entry,
    .latest-blog-entry__link {
      font-size: 1.375rem;
    }

    .site-information {
      font-size: 1.125rem;
    }
  }
`

const Footer: FC = (): ReactElement => (
  <StyledFooter>
    <nav className="community-panel">
      <i className="icon-casai-logo-white"></i>
      <h2 className="community-panel__call-to-action">
        Join the community. Start the conversation...
      </h2>
      <ul className="social-network__list">
        <li className="social-network__list-item">
          <a href="#" className="social-network__link">
            <i className="icon icon-facebook"/>
          </a>
        </li>
        <li className="social-network__list-item">
          <a href="#" className="social-network__link">
            <i className="icon icon-instagram" />
          </a>
        </li>
        <li className="social-network__list-item">
          <a href="#" className="social-network__link">
            <i className="icon icon-linkedin" />
          </a>
        </li>
      </ul>
    </nav>
    <small className="copyright">
      All rights reserved.
    </small>
    <nav className="blog-post">
      <a href="#" className="blog-post__img-link">
        <figure className="blog-post__img-container">
          <img className="blog-post__img" src="/img/blog-phone.png" alt="phone blog post"/>
        </figure>
      </a>
      <h2 className="blog-post__title">
        Hospitality in Mexico City
      </h2>
      <p className="latest-blog-entry">Our latest blog entry</p>
      <a className="latest-blog-entry__link" href="#">Read now &gt;</a>
    </nav>
    <nav className="site-information">
      <h6 className="title">
        casai
      </h6>
      <ul className="site__list company-info__list">
        <li className="site__list-item company-info__list-item">
          <a className="company-info__link" href="#">
            home
          </a>
        </li>
        <li className="site__list-item company-info__list-item">
          <a className="company-info__link" href="#">
            FAQ
          </a>
        </li>
        <li className="site__list-item company-info__list-item">
          <a className="company-info__link" href="#">
            my stays
          </a>
        </li>
      </ul>
      <h6 className="title">
        blog
      </h6>
      <ul className="site__list website-info__list">
        <li className="site__list-item website-info__list-item">
          <a className="company-info__link" href="#">
            Our Top 5
          </a>
        </li>
        <li className="site__list-item website-info__list-item">
          <a className="company-info__link" href="#">
            news
          </a>
        </li>
        <li className="site__list-item website-info__list-item">
          <a className="company-info__link" href="#">
            people
          </a>
        </li>
      </ul>
    </nav>
    <NewsletterForm />
  </StyledFooter>
)

export default Footer