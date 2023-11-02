import { LinksCollections } from './collections'
import Meteor from 'meteor-react-js';

export const getlinks = () => { Meteor.subscribe('pub_clubs'); const lnk = LinksCollections.find().fetch(); return lnk; };

