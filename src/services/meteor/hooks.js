import Meteor from 'meteor-react-js';
import * as getters from './getters';


export const useLinks = () => Meteor.useTracker(() => getters.getlinks(), []);

