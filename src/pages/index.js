import React, { useState } from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import SearchBar from '@theme/SearchBar';

const products = [
  {
    title: <>Beaver Builder</>,
    imageUrl: 'img/kb-home-beaver-builder.png',
    url: '/beaver-builder',
    classname: 'beaver-builder',
    productsname: 'Beaver Builder',
    description: (
      <>
        The Beaver Builder docs offer a valuable resource to unlock the full potential 
        of Beaver Builder whether you're a beginner or an experienced user.
      </>
    ),
  },
  {
    title: <>Beaver Themer</>,
    imageUrl: 'img/kb-home-beaver-themer.png',
    url: '/beaver-themer',
    classname: 'beaver-themer',
    productsname: 'Beaver Themer',
    description: (
      <>
        Explore comprehensive guides on creating dynamic Beaver Themer layouts using field 
        connections and conditional logic to enhance your website. 
      </>
    ),
  },
  {
    title: <>BB Theme</>,
    imageUrl: 'img/kb-home-bb-theme.png',
    url: '/bb-theme',
    classname: 'bb-theme',
    productsname: 'BB Theme',
    description: (
      <>
        These guides cover the full range of the BB Themes capabilities, including 
        customizable options, header layouts, Bootstrap CSS and more.
      </>
    ),
  },
  {
    title: <>Assistant</>,
    imageUrl: 'img/kb-home-bb-theme.png',
    url: '/assistant',
    classname: 'assistant',
    productsname: 'Assistant',
    description: (
      <>
        Our guides for Assistant cover leveraging cloud storage for assets to accelerate your 
        website creations and how to use the Assistant plugin to perform WordPress admin tasks. 
        
      </>
    ),
  },
];

// const integrations = [
//   {
//     title: <>Advanced Custom Fields</>,
//     url: '/beaver-themer/field-connections/connections-to-acf',
//     imageUrl: '/img/home--advanced-custom-fields-logo.png',
//   },
//   {
//     title: <>BigCommerce</>,
//     url: '/beaver-themer/integrations/bigcommerce',
//     imageUrl: 'img/home--bigcommerce-logo.png',
//   },
//   {
//     title: <>Easy Digital Downloads</>,
//     url: '/beaver-themer/integrations/easy-digital-downloads',
//     imageUrl: 'img/home--easy-digital-downloads-logo.png',
//   },
//   {
//     title: <>The Events Calendar</>,
//     url: '/beaver-themer/integrations/the-events-calendar',
//     imageUrl: 'img/home--events-calendar-logo.png',
//   },
//   {
//     title: <>WooCommerce</>,
//     url: '/beaver-themer/integrations/woocommerce/',
//     imageUrl: 'img/home--woocommerce-logo.png',
//   },
// ];

const community = [
  {
    title: <>Courses</>,
    url: 'https://courses.wpbeaverbuilder.com',
    icon: <><i className="fa-solid fa-graduation-cap"></i></>,
  },
  {
    title: <>YouTube</>,
    url: 'https://www.youtube.com/c/BeaverBuilderWP',
    icon: <><i className="fab fa-youtube"></i></>,
  },
  {
    title: <>Facebook</>,
    url: 'https://www.facebook.com/groups/beaverbuilders/',
    icon: <><i className="fab fa-facebook-f"></i></>,
  },
  {
    title: <>Slack</>,
    url: 'https://www.wpbeaverbuilder.com/go/slack/',
    icon: <><i className="fab fa-slack"></i></>,
  },
   {
    title: <>Discord</>,
    url: 'https://www.wpbeaverbuilder.com/discord/',
    icon: <><i className="fab fa-discord"></i></>,
  },
  {
    title: <>Forum</>,
    url: 'https://community.wpbeaverbuilder.com/',
    icon: <><i className="fab fa-discourse"></i></>,
  },
];

function Products({imageUrl, title, classname, productsname, url, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--6', styles.products, classname)}>
      <a className="bb-docs-home-box" href={url} title={`${productsname} Docs`}>
        <h3><span>{title}</span></h3>
        <p>{description}</p>
      </a>
    </div>
  );
}

function SubmitTicket({imageUrl, title, classname, url, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--6', styles.products, classname)}>
        <h3><span>{title}</span></h3>
        <p>{description}</p>
        <a className="bb-docs-home-box" href={url}>
          <button className="button button--primary button--lg">Submit a Ticket</button>
        </a>
    </div>
  );
}

function Community({title, url, icon}) {
  return (
    <div className={classnames('col community-icon', styles.community)}>
      <a className="community-link" href={url} target="_blank" rel="noopener noreferrer">
        <div className="community-content">
          {icon}
          <h3>{title}</h3>
        </div>
      </a>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const [isSearchBarExpanded, setIsSearchBarExpanded] = useState(false);
  return (
    <Layout
      description="Frequently asked questions and support documentation for Beaver Builder products.">
      <header className={classnames('hero', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">How can we help?</h1>
          <div className="hero__search">
              <SearchBar
                  handleSearchBarToggle={setIsSearchBarExpanded}
                  isSearchBarExpanded={isSearchBarExpanded}
                  inputId='home_search_input'
              />
          </div>
        </div>
      </header>
      <main>
        {products && products.length && (
          <section className={styles.products}>
            <div className="container">
              <div className="row products-row">
                {products.map((props, idx) => (
                  <Products key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        {community && community.length && (
          <section className="community">
            <div className="container">
              <div className="row community-heading">
                <div className="col">
                  <h2>Resources & Communities</h2>
                  <p>Expand your horizons with Beaver Builder's additional resources and communities. Connect with like-minded individuals, access a treasure trove of knowledge, and freely share ideas.</p>
                </div>
              </div>
              <div className="row community-icons">
                  {community.map((props, idx) => (
                    <Community key={idx} {...props} />
                  ))}
              </div>
            </div>
          </section>
        )}
        <section className="submit-ticket">
          <div className="container">
            <div className="row">
              <div className="col">
                <h2>Need some help?</h2>
                <p>If you're unable to find a solution in our knowledge base, don't worry! Visit our 
                support page, and we'll guide you on how to get in touch with our friendly support team.</p>
                <a className="button button--primary" href="https://www.wpbeaverbuilder.com/beaver-builder-support/" target="_blank" rel="noopener noreferrer">Submit Ticket</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
