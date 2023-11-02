
// ------------------------------------------------------------ //
// ------------------------- Packages ------------------------- //
// ------------------------------------------------------------ //
import React, { useEffect } from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import { publicConfig } from 'services/const/config';
import { observe } from 'services/meteor';
import * as clubActions from 'redux/clubs/ClubSlice';
import * as playerActions from 'redux/player/allPlayerSlice'
import * as productActions from 'redux/product/allProductSlice'
import * as matchActions from 'redux/match/MatchSlice'
import * as countryAction from 'redux/countries/CountriesSlice'
import * as auctionsActions from 'redux/auctions/AuctionSlice'
import * as bidActions from 'redux/bids/BidsSlice'
import * as orderActions from 'redux/orders/OrderSlice'
import * as invoiceActions from 'redux/invoice/invoiceSlice'
import * as leagueActions from 'redux/leagues/leagueSlice'

const Observer = () => {
    useEffect(() => {
        try {
            observe('clubs', 'clubs', null, { key: 'data', ...clubActions }, null);
            observe('players', 'players', null, { key: 'data', ...playerActions }, null);
            observe('products', 'products', null, { key: 'data', ...productActions }, null);
            observe('matches', 'matches', null, { key: 'data', ...matchActions }, null);
            // observe('countries', 'countries', null, { key: 'data', ...countryAction }, null);
            observe('auctions', 'auctions', null, { key: 'data', ...auctionsActions }, null);
            observe('bids', 'bids', null, { key: 'data', ...bidActions }, null);
            observe('orders', 'orders', null, { key: 'data', ...orderActions }, null);
            observe('invoices', 'invoices', null, { key: 'data', ...invoiceActions }, null);
            observe('leagues', 'leagues', null, { key: 'data', ...leagueActions }, null);
            // _.each(_.reject(publicConfig,  c => (
            //     !subscribed(c) && observe(c, c, null, { key: c, ...configActions })
            // )));
        }
        catch (err) {
            console.log('Error Observer')
        }
    }, []);
    return <span key='observer' style={{ display: 'hidden' }}></span>;
}
export default Observer;