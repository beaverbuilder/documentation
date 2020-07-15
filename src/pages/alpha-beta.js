import React, { useState } from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const alphaproducts = [
  {
    title: <>Beaver Builder</>,
    imageUrl: 'img/kb-home-beaver-builder.png',
    url: '/next/beaver-builder',
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
    url: '/next/beaver-themer',
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
    url: '/next/bb-theme',
    description: (
      <>
        Tips on how to customize theme settings to enhance Beaver Builder
        layouts, pages, and posts.
      </>
    ),
  },
];

function AlphaProducts({imageUrl, title, url, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.alphaproducts)}>
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

function Alphabeta() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title="Alpha & Beta Documentation"
      permalink="/alpha-beta"
      description="Beaver Builder alpha & beta release documentation">
      <section className={classnames('hero', styles.heroBanner)}>
        <div className="container">
          <span class="badge badge--danger">No Support is provided for alpha releases.</span>
          <h1 className="hero__title">Alpha & Beta Documentation</h1>
          <p className="hero__subtitle">
            We strongly recommend that you do not install alpha
             and beta releases on live sites.
          </p>
        </div>
      </section>
      {alphaproducts && alphaproducts.length && (
        <section className={styles.alphaproducts}>
          <div className="container">
            <div className="row">
              {alphaproducts.map((props, idx) => (
                <AlphaProducts key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
    );
  }

  export default Alphabeta;
