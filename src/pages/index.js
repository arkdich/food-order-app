import GlobalLayout from '@layouts/navigation';
import { Fragment, useEffect } from 'react';
import HomeLayout from './home';
import PropTypes from 'prop-types';
import Head from 'next/head';

export default function HomePage(props) {
  const { products, specials } = props;

  return (
    <Fragment>
      <Head>
        <title>Доставка еды в вашем городе!</title>
      </Head>
      <GlobalLayout />
      <HomeLayout />
    </Fragment>
  );
}

export async function getStaticProps() {
  const admin = require('firebase-admin');
  const serviceAccount = require('../../firebaseAdminSDK.json');

  if (admin.apps.length === 0) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }

  const db = admin.firestore();

  const [productsRef, specialsRef] = await Promise.all([
    db.collection('pizzas').get(),
    db.collection('specials').get(),
  ]);

  const products = productsRef.docs.reduce((acc, curr) => {
    const data = curr.data();
    data.id = curr.id;

    const firstIng = data.ingredients[0];
    data.ingredients[0] = firstIng[0].toUpperCase() + firstIng.slice(1);

    acc[curr.id] = data;

    return acc;
  }, {});

  const specials = specialsRef.docs[0].data();

  return {
    props: {
      products,
      specials,
    },
  };
}

HomePage.propTypes = {
  products: PropTypes.object,
  specials: PropTypes.object,
};
