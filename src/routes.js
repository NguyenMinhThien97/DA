import React from 'react';
import Home from './pages/Home/Home';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Coat from './pages/Product/Coat';
import Pants from './pages/Product/Pants';
import Shirt from './pages/Product/Shirt';
import Shoes from './pages/Product/Shoes';
import Shorts from './pages/Product/Shorts';
import T_Shirt from './pages/Product/T_Shirt';
import Blog from './pages/Blog/Blog';

const routes =[
    {
        path: '/',
        exact: true,
        main: () => <Home/>
    },
    {
        path: '/product/quan-dai',
        exact: false,
        main: () => <Pants />
    },
    {
        path: '/product/quan-short',
        exact: false,
        main: () => <Shorts />
    },
    {
        path: '/product/ao-somi',
        exact: false,
        main: () => <Shirt />
    },
    {
        path: '/product/ao-thun',
        exact: false,
        main: () => <T_Shirt />
    },
    {
        path: '/product/ao-khoac',
        exact: false,
        main: () => <Coat />
    },
    {
        path: '/product/giay',
        exact: false,
        main: () => <Shoes />
    },
    {
        path: '/blog',
        exact: false,
        main: () => <Blog />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }
];

export default routes;