import { createSelector } from 'reselect';

// Filters
// ---------------------------- //
const _rehydrated = state => state._persist.rehydrated;
const _theme = state => state.services.ui.theme;
const _lang = state => state.services.ui.lang;
const _dir = state => state.services.ui.dir;
const _cameraPermission = state => state.services.ui?.permissions?.camera;
const _geoPermission = state => state.services.ui?.permissions?.geolocation;

// Selectors
// ---------------------------- //
export const getRehydrated = createSelector(_rehydrated, data => data);
export const getUITheme = createSelector(_theme, data => data);
export const getUILang = createSelector(_lang, data => data);
export const getUIDir = createSelector(_dir, data => data);
export const getCameraPermission = createSelector(_cameraPermission, data => data);
export const getGeoPermission = createSelector(_geoPermission, data => data);