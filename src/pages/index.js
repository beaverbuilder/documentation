import React, { useState } from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import SearchBar from '@theme/SearchBar';

const general = [
  {
    title: <>Pre-Sales</>,
    imageUrl: 'img/kb-home-pre-sales.png',
    url: '/general/pre-sales',
    description: (
      <>
        Thinking about purchasing Beaver Builder? See the commonly asked
        pre-purchase questions here.
      </>
    ),
  },
  {
    title: <>FAQ</>,
    imageUrl: 'img/kb-home-faq.png',
    url: '/general/faq',
    description: (
      <>
        We answer questions you didn’t know you had about how Beaver Builder
        works and what it works with.
      </>
    ),
  },
  {
    title: <>Account & Billing</>,
    imageUrl: 'img/kb-home-account-billing.png',
    url: '/general/account-billing',
    description: (
      <>
        How to renew or cancel your subscription, download your products,
        manage websites that use your license.
      </>
    ),
  },
];

const products = [
  {
    title: <>Beaver Builder</>,
    imageUrl: 'img/kb-home-beaver-builder.png',
    url: '/beaver-builder',
    description: (
      <>
        All the basics about building Beaver Builder layouts, plus tips for
        power users and developers.
      </>
    ),
  },
  {
    title: <>Beaver Themer</>,
    imageUrl: 'img/kb-home-beaver-themer.png',
    url: '/beaver-themer',
    description: (
      <>
        How to use our add-on product to create Beaver Builder layouts to style
        headers, footers, and more.
      </>
    ),
  },
  {
    title: <>BB Theme</>,
    imageUrl: 'img/kb-home-bb-theme.png',
    url: '/bb-theme',
    description: (
      <>
        Tips on how to customize theme settings to enhance Beaver Builder
        layouts, pages, and posts.
      </>
    ),
  },
];

const popular = [
  {
    title: <>Install Beaver Builder</>,
    url: '/beaver-builder/getting-started/install-beaver-builder',
  },
  {
    title: <>Difference between free and premium versions</>,
    url: '/general/pre-sales/difference-between-free-and-premium-versions',
  },
  {
    title: <>Upgrade your premium license</>,
    url: '/general/account-billing/upgrade-your-premium-license',
  },
  {
    title: <>Which Beaver Builder Packages include Beaver Themer?</>,
    url: '/general/pre-sales/which-beaver-builder-packages-include-beaver-themer',
  },
  {
    title: <>Is Beaver Builder compatible with Gutenberg?</>,
    url: '/general/faq/is-beaver-builder-compatible-with-gutenberg',
  },
];

const developers = [
  {
    title: <>Custom Module Guide (Beaver Builder)</>,
    url: '/beaver-builder/developer/custom-modules',
  },
  {
    title: <>Beaver Builder Developer Docs</>,
    url: '/beaver-builder/developer',
  },
  {
    title: <>Beaver Themer Developer Docs</>,
    url: '/beaver-themer/developer',
  },
  {
    title: <>BB Theme Developer Docs</>,
    url: '/bb-theme/developer',
  },
  {
    title: <>Hooks</>,
    url: 'https://hooks.wpbeaverbuilder.com/bb-plugin/',
  }
];

const integrations = [
  {
    title: <>Advanced Custom Fields</>,
    url: '/beaver-themer/field-connections/connections-to-acf',
    imageUrl: '/img/home--advanced-custom-fields-logo.png',
  },
  {
    title: <>BigCommerce</>,
    url: '/beaver-themer/integrations/bigcommerce',
    imageUrl: 'img/home--bigcommerce-logo.png',
  },
  {
    title: <>Easy Digital Downloads</>,
    url: '/beaver-themer/integrations/easy-digital-downloads',
    imageUrl: 'img/home--easy-digital-downloads-logo.png',
  },
  {
    title: <>The Events Calendar</>,
    url: '/beaver-themer/integrations/the-events-calendar',
    imageUrl: 'img/home--events-calendar-logo.png',
  },
  {
    title: <>WooCommerce</>,
    url: '/beaver-themer/integrations/woocommerce/',
    imageUrl: 'img/home--woocommerce-logo.png',
  },
];

const community = [
  {
    title: <>Facebook Group</>,
    url: 'https://www.facebook.com/groups/beaverbuilders/',
    icon: <><i className="fab fa-facebook-f"></i></>,
  },
  {
    title: <>Slack</>,
    url: 'https://beaverbuilders.herokuapp.com/',
    icon: <><i className="fab fa-slack"></i></>,
  },
  {
    title: <>Community Forum</>,
    url: 'https://community.wpbeaverbuilder.com/',
    icon: <><i className="fab fa-discourse"></i></>,
  },
];

function General({imageUrl, title, url, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.general)}>
      <a className="bb-docs-home-box" href={url}>
        {imgUrl && (
            <img className={styles.featureImage} src={imgUrl} alt={title} />
        )}
        <h3>{title}</h3>
        <p>{description}</p>
      </a>
    </div>
  );
}

function Products({imageUrl, title, url, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.products)}>
      <a className="bb-docs-home-box" href={url}>
        {imgUrl && (
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        )}
        <h3>{title}</h3>
        <p>{description}</p>
      </a>
    </div>
  );
}

function Popular({title, url}) {
  return (
    <a className="jump-to" href={url}>
      <div className="jump-to--main">{title}</div>
      <div className="jump-to--icon"><i className="fas fa-chevron-right" aria-hidden="true"></i></div>
    </a>
  );
}

function Developers({title, url}) {
  return (
    <a className="jump-to" href={url}>
      <div className="jump-to--main">{title}</div>
      <div className="jump-to--icon"><i className="fas fa-chevron-right" aria-hidden="true"></i></div>
    </a>
  );
}

function Integrations({title, url, imageUrl}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--2', styles.products)}>
      <a className="jump-to integrations-box" href={url} title={title}>
      {imgUrl && (
        <img className={styles.integrationsImage} src={imgUrl} alt={title} />
      )}
      </a>
    </div>
  );
}

function Community({title, url, icon}) {
  return (
    <div className={classnames('col col--4 social-icons', styles.community)}>
      <a className="jump-to" href={url} target="_blank" rel="noopener noreferrer">
        <div className="jump-to--main">
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
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className="hero__search navbar">
              <SearchBar
                  handleSearchBarToggle={setIsSearchBarExpanded}
                  isSearchBarExpanded={isSearchBarExpanded}
                  inputId='home_search_input'
              />
          </div>
        </div>
      </header>
      <main>
        {general && general.length && (
          <section className={styles.general}>
            <div className="container">
              <div className="row">
                {general.map((props, idx) => (
                  <General key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        {products && products.length && (
          <section className={styles.products}>
            <div className="container">
              <div className="row">
                {products.map((props, idx) => (
                  <Products key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <section className="popular_src-pages- developer_src-pages-">
          <div className="container">
            <div className="row">
              <div className="col col--6">
              <h2>Popular Articles</h2>
                {popular && popular.length && (
                  <div className={styles.popular}>
                    {popular.map((props, idx) => (
                      <Popular key={idx} {...props} />
                    ))}
                  </div>
                )}
              </div>
              <div className="col col--6">
              <h2>Developer Guides</h2>
                {developers && developers.length && (
                  <div className={styles.developers}>
                    {developers.map((props, idx) => (
                      <Developers key={idx} {...props} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        {integrations && integrations.length && (
          <section className={styles.integrations}>
            <div className="container">
              <div className="row">
                <div className="col">
                  <h2>Beaver Themer Integrations</h2>
                </div>
              </div>
              <div className="row">
                  {integrations.map((props, idx) => (
                    <Integrations key={idx} {...props} />
                  ))}
              </div>
            </div>
          </section>
        )}
        {community && community.length && (
          <section className={styles.community}>
            <div className="container">
              <div className="row">
                <div className="col">
                  <h2>Community!</h2>
                  <p>You can also get information and help at any of our thriving community.<br/>
                  <strong>Note:</strong> That the Beaver Builder team monitors these community sites but doesn't
                  provide direct support there. You'll get lots of advice and help from other Beaver Builder users, but if you need real troubleshooting, <a href="https://www.wpbeaverbuilder.com/beaver-builder-support/" target="_blank" rel="noopener noreferrer">submit a Beaver Builder Support ticket</a>.</p>
                </div>
              </div>
              <div className="row">
                  {community.map((props, idx) => (
                    <Community key={idx} {...props} />
                  ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
