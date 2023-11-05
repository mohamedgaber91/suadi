import // UilAirplay,
  // UilAt,
  // UilBookAlt,
  // UilBookOpen,
  // UilBookReader,
  // UilChartBar,
  // UilCheckSquare,
  // UilCircle,
  // UilClipboardAlt,
  // UilClock,
  // UilCompactDisc,
  // UilCreateDashboard,
  // UilDatabase,
  // UilDocumentLayoutLeft,
  // UilEdit,
  // UilExchange,
  // UilExclamationOctagon,
  // UilExpandArrowsAlt,
  // UilFile,
  // UilFileShieldAlt,
  // UilHeadphones,
  // UilIcons,
  // UilImages,
  // UilLayerGroup,
  // UilMap,
  // UilPresentation,
  // UilQuestionCircle,
  // UilSearch,
  // UilServer,
  // UilSetting,
  // UilTable,
  // UilUsdCircle,
  // UilWindowSection,
  '@iconscout/react-unicons';
import { Menu } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import UilEllipsisV from '@iconscout/react-unicons/icons/uil-ellipsis-v';
import propTypes from 'prop-types';
// import { NavTitle } from './Style';

// import { changeDirectionMode, changeLayoutMode, changeMenuMode } from '../redux/themeLayout/actionCreator';

const MenuItems = ({ toggleCollapsed }) => {
  const { t } = useTranslation();

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const { topMenu } = useSelector((state) => {
    return {
      topMenu: state.ChangeLayoutMode.topMenu,
    };
  });

  // const dispatch = useDispatch();

  const path = '/admin';

  const pathName = window.location.pathname;
  const pathArray = pathName.split(path);
  const mainPath = pathArray[1];
  const mainPathSplit = mainPath?.split('/');

  const [openKeys, setOpenKeys] = React.useState(
    !topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : [],
  );

  const onOpenChange = (keys) => {
    setOpenKeys(keys[keys.length - 1] !== 'recharts' ? [keys.length && keys[keys.length - 1]] : keys);
  };

  const onClick = (item) => {
    if (item.keyPath.length === 1) setOpenKeys([]);
  };
  const items = [
    getItem(
      <NavLink onClick={toggleCollapsed} to="/admin">
        {t('Dashboard')}
      </NavLink>,
      'admin',
      null,
    ),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/header`}>
        {t('Header')}
      </NavLink>,
      'header',
      null,
    ),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/announcements`}>
        {t('Announcements')}
      </NavLink>,
      'announcements',
      null,
    ),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/adminclubs`}>
        {t('AdminClubs')}
      </NavLink>,
      'adminClubs',
      null,
    ),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/orders`}>
        {t('orders')}
      </NavLink>,
      'orders',
      null,
    ),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/leagues`}>
        {t('leagues')}
      </NavLink>,
      'leagues',
      null,
    ),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/players`}>
        {t('players')}
      </NavLink>,
      'players',
      null,
    ),




    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/client`}>
        {t('client')}
      </NavLink>,
      'client',
      null,
    ),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/contact`}>
        {t('contact')}
      </NavLink>,
      'contact',
      null,
    ),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/privacy`}>
        {t('policy privacy')}
      </NavLink>,
      'privacy',
      null,
    ),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/terms`}>
        {t('terms and conditions')}
      </NavLink>,
      'terms',
      null,
    ),

    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/permission`}>
        {t('permission')}
      </NavLink>,
      'permission',
      null,
    ),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/faqs`}>
        {t('FAQs')}
      </NavLink>,
      'faqs',
      null,
    ),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/stadium`}>
        {t('stadium')}
      </NavLink>,
      'stadium',
      null,
    ),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/staff`}>
        {t('staff')}
      </NavLink>,
      'staff',
      null,
    ),
    getItem(t('logs'), 'table', !topMenu && <></>, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/login`}>
          {t('login')}
        </NavLink>,
        'login',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/create`}>
          {t('create account')}
        </NavLink>,
        'create',
        null,
      ),
    ]),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/payment`}>
        {t('payment methods')}
      </NavLink>,
      'payment',
      null,
    ),
    // __________________Customer__________________
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/match`}>
        {t('match')}
      </NavLink>,
      'match',
      null,
    ),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/orderhistory`}>
        {t('order history ')}
      </NavLink>,
      'orderhistory',
      null,
      
    ),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/checkout`}>
        {t('Check Out ')}
      </NavLink>,
      'checkout',
      null,
      
    ),
  ];

  return (
    <Menu
      onOpenChange={onOpenChange}
      onClick={onClick}
      mode={!topMenu || window.innerWidth <= 991 ? 'inline' : 'horizontal'}
      // // eslint-disable-next-line no-nested-ternary
      defaultSelectedKeys={
        !topMenu
          ? [
            `${mainPathSplit.length === 1 ? 'home' : mainPathSplit.length === 2 ? mainPathSplit[1] : mainPathSplit[2]
            }`,
          ]
          : []
      }
      defaultOpenKeys={!topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : []}
      overflowedIndicator={<UilEllipsisV />}
      openKeys={openKeys}
      items={items}
    />
  );
}

MenuItems.propTypes = {
  toggleCollapsed: propTypes.func,
};

export default MenuItems;
