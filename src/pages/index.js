import React from 'react';
import { productsActions } from '@store/slices/products/productsSlice';
import { specialsActions } from '@store/slices/specials/specialsSlice';
import Head from 'next/head';
import RootPage from '@components/elements/root';
import GlobalLayout from '@layouts/global';
import useIsTablet from '@hooks/useIsTablet';
import { useRouter } from 'next/router';
import CartPage from '@components/elements/cart';
import ProductPage from '@components/elements/product';
import { AnimatePresence } from 'framer-motion';
import storeWrapper from '@store/index';

export const IndexCtx = React.createContext({ isTablet: false });

export default function IndexPage() {
  console.log('HOME');

  const router = useRouter();
  const isTablet = useIsTablet();

  return (
    <IndexCtx.Provider value={{ isTablet }}>
      <Head>
        <title>Доставка еды в вашем городе!</title>
      </Head>
      <GlobalLayout />
      <RootPage />
      <AnimatePresence>{router.query.id && <ProductPage />}</AnimatePresence>
      <AnimatePresence>{router.query.cart && <CartPage />}</AnimatePresence>
    </IndexCtx.Provider>
  );
}

export const getStaticProps = storeWrapper.getStaticProps(
  (store) => async () => {
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

    let specials, products;

    if (productsRef.empty || specialsRef.empty) {
      store.dispatch(productsActions.setError('sth went wrong'));
      store.dispatch(specialsActions.setError('sth went wrong'));
    } else {
      products = productsRef.docs.reduce((acc, curr) => {
        const data = curr.data();
        data.id = curr.id;

        const firstIng = data.ingredients[0];
        data.ingredients[0] = firstIng[0].toUpperCase() + firstIng.slice(1);

        acc[curr.id] = data;

        return acc;
      }, {});

      specials = specialsRef.docs[0].data();

      store.dispatch(productsActions.setItems(products));
      store.dispatch(specialsActions.setItems({ products, specials }));
    }

    console.log('SERVER');

    return {
      props: {},
      revalidate: 300,
    };
  }
);
