import DDP from 'simpleddp';
import _ from 'lodash';
import reduxStore from 'redux/store';
import { simpleDDPLogin } from 'simpleddp-plugin-login';
import { config } from './config';
import "/node_modules/flag-icons/css/flag-icons.min.css";


const Meteor = new DDP(config, [simpleDDPLogin]);

Meteor.on('connected', async () => {
    // Maybe update react state
    console.debug('connected ✅');
});

Meteor.on('disconnected', () => {
    // Maybe update react state
    console.debug('disconnected ❌');
});

/**
 * Check if already subscribed to specified publication
 * 
 * @param {String} name publication name
 */
export const subscribed = (name) => !!_.find(Meteor.subs, { pubname: [!_.startsWith(name, 'pub_') ? `pub_${name}` : name] });

/**
 * Subscribe to meteor publication
 * 
 * @param {String} name publication name
 * @param {Object} args publication arguments
 * 
 * @returns Subscription
 */
export const subscribe = (name, args) => new Promise(async (resolve, reject) => {
    try {
        // Insure that subscription name has pub_ prefix
        if (!_.startsWith(name, 'pub_')) name = `pub_${name}`;

        // Try to get prev subscription (if already subscribed)
        let sub = _.find(Meteor.subs, { pubname: name });

        if (!sub || !_.isEqual(sub?.args, [args])) {
            // Subscribe to meteor publication
            sub = Meteor.subscribe(name, args);
            await sub.ready();
        }

        // Return subscription reference
        resolve(sub);
    }
    catch (error) {
        console.log(name, error)
        reject(error);
    }
});

/**
 * [*INTERNAL*] Unsubscribe specific subscription
 * @param {String} name publication name
 */
const _unsubscribe = (name) => {
    // Get subscription object from Meteor
    let sub = _.find(Meteor.subs, { pubname: name });
    // Unsubscribe from meteor publication
    sub && sub.remove && sub.remove();
};

/**
 * Unsubscribe from single | multiple | all publications
 * 
 * @param {String | [String] | ''} name publication name(s)
 * @param {Array | Object | ''} subs list of subscriptions objects
 */
export const unsubscribe = (name, subs) => new Promise((resolve, reject) => {
    try {
        // Unsubscribe from a specific subscription { given subscription name(s) }
        if (name) {
            if (_.isArray(name)) _.each(name, n => _unsubscribe(n));
            else _unsubscribe(name);
        }
        else if (!_.isEmpty(subs)) {
            let _subs = _.isArray(subs) ? subs : _.toArray(subs);
            let _subsLen = _subs.length;
            for (let i = 0; i < _subsLen; i++) {
                let _sub = _subs[0];
                _sub && _sub.pubname && _unsubscribe(_sub.pubname);
            }
        }
        else { // Unsubscribe from all subscriptions
            console.debug('[unsubscribe] :: UNSUBSCRIBING FROM ALL', { name, subs });
            // Unsubscribe 
            let subsLen = Meteor.subs.length;
            // Can't use 'each' here due to sub.remove() slicing array of subs
            for (let i = 0; i < subsLen; i++) {
                let sub = Meteor.subs[0]; // Always remove first 'sub' in 'subs' array
                sub.remove();
            }
        }

        // Retrun success signal
        resolve();
    }
    catch (error) {
        reject(error);
    }
});

/**
 * Subscribe and observe publication to update redux financier based on params
 * @param {String} pub Publication name
 * @param {String} collection Collection name
 * @param {Function} filter Filter sub results
 * @param {Object} redux {single: false, key: String, update: Function, addItem: Function, updateItem: Function, removeItem: Function, reset: Function}
 * @param {Object|String} args filter for publication
 */
export const observe = (pub, collection, filter, redux = { single: false, key: null, update: null, addItem: null, updateItem: null, removeItem: null, reset: null }, args, merge = false, reactive = false) => (
    subscribe(pub, args).then(sub => {

        try {
            // Collection reference
            // Handle collection filter (when using multiple pubs for the same collection)
            let col = (!_.isEmpty(filter)
                ? Meteor.collection(collection).filter(filter)
                : Meteor.collection(collection)
            );

            if (reactive) {
                col = col.reactive();
            }

            let updates = reactive ? col.data() : col.fetch();

            // Update redux
            if (redux.update) {
                if (redux.single) reduxStore.dispatch(redux.update(!_.isEmpty(redux.key) ? { [redux.key]: updates[0] } : { ...updates[0] }));
                else reduxStore.dispatch(redux.update(updates));
            }

            return sub;
        }
        catch (err) {
            console.log('Error Observe')
            return null;
        }
    })
)

/**
 * Observe composite publish
 * @param {String} sub Publication name
 * @param {Array} collections [{ collection, filter, redux, args }]
 */
export const observeMulti = (sub, collections) => {
    // { collection, filter, redux, args }
    return _.each(collections, c => observe(sub, c.collection, c.filter, { ...c.redux }, c.args, c.merge));
};

export default Meteor;



// import Meteor from 'meteor-react-js';
// import { config } from './config';

// export const connect = (settings) => {
//     Meteor.connect(settings.endpoint);

//     console.debug('[Meteor - connect] :: Setting Meteor URL: ', settings.endpoint);

//     var open = Meteor.getData().ddp?.socket?.addListener("open", () => console.debug('[Meteor] :: socket open ✅'));
//     var close = Meteor.getData().ddp?.socket?.addListener("close", function (...args) { console.debug('[Meteor] :: socket close ❌', { args }) });
// }

// connect(config);

// export const callApi = (method, args) => {
//     return new Promise((resolve, reject) => {
//         try {
//             Meteor.call(method, args, function (err, res) {
//                 if (err) {
//                     console.error('Error in [callApi]1 :: ', { method, err })
//                     reject(err);
//                 }
//                 else {
//                     console.debug('[callApi] :: ', { method, res })
//                     resolve(res);
//                 }
//             })
//         }
//         catch (err) {
//             console.error('Error in [callApi] 2:: ', { method, err })
//             reject(err);
//         }
//     })
// }