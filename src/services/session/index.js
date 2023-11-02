import _ from 'lodash';
import Meteor, { observe, subscribe, subscribed, unsubscribe } from '../meteor';
import reduxStore from 'redux/store';
import * as actions from 'redux/authentication/authSlice';
import { toObject } from 'services/helper/code';
import * as bidActions from 'redux/bids/BidsSlice'
import * as orderActions from 'redux/orders/OrderSlice'
import * as invoiceActions from 'redux/invoice/invoiceSlice'

const observeUser = (session) =>
    subscribe('user').then(() => {
        // Users collection reference
        let userCol = Meteor.collection('users').filter((user) => user.id === Meteor.userId);

        // Update user session to redux
        let user = toObject(userCol.fetch());
        // let role = (_.isArray(user.roles) && (user.roles[0] || {})._id) || ((reduxStore.getState().services.session.user.roles[0] || {})._id);

        reduxStore.dispatch(actions.updateUser({ ...user, ...session }));

        userCol.onChange(async () => {
            if (Meteor._loggedIn) {
                let updates = toObject(userCol.fetch());
                reduxStore.dispatch(actions.updateUser(updates));
            }
        });

        observe('bids', 'bids', null, { key: 'data', ...bidActions }, null);
        observe('orders', 'orders', null, { key: 'data', ...orderActions }, null);
        observe('invoices', 'invoices', null, { key: 'data', ...invoiceActions }, null);

    });

Meteor.on('login', (session) => {
    console.debug(`[onLogin] :: login with `, { session });
    observeUser(session);
});
export const login = (opts) => {
    //return Meteor.loginWithPassword(username, password);
    //return Meteor.logout().finally(() => Meteor.login(opts))
    // console.log('username,password', opts)
    return Meteor.login(opts);
};
