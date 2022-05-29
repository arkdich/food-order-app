import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { productsActions } from '@store/slices/products/productsSlice';
import { specialsActions } from '@store/slices/specials/specialsSlice';
import Head from 'next/head';
import RootPage from '@components/elements/root';
import GlobalLayout from '@layouts/global';
import useIsTablet from '@hooks/useIsTablet';

export const IndexCtx = React.createContext({ isTablet: false });

export default function IndexPage(props) {
  const { products, specials } = props;

  console.log('HOME');

  const dispatch = useDispatch();
  const isTablet = useIsTablet();

  useEffect(() => {
    if (products && specials) {
      dispatch(productsActions.setItems(products));
      dispatch(specialsActions.setItems({ products, specials }));
      console.log('DISPATCH');
    }
  }, [dispatch, products, specials]);

  return (
    <IndexCtx.Provider value={{ isTablet }}>
      <Head>
        <title>Доставка еды в вашем городе!</title>
      </Head>
      <GlobalLayout />
      <RootPage />
    </IndexCtx.Provider>
  );
}

export async function getStaticProps() {
  const admin = require('firebase-admin');
  const serviceAccount = require('../../firebaseAdminSDK.json');
  const { store } = require('../store');

  console.log(store);

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

  console.log('SERVER');
  return {
    props: {
      products,
      specials,
    },
  };
}
IndexPage.propTypes = {
  products: PropTypes.object,
  specials: PropTypes.object,
};
