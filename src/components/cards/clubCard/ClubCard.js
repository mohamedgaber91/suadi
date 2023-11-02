// ------------------------------------------------------------ //
// ------------------------- Packages ------------------------- //
// ------------------------------------------------------------ //
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Avatar, Badge } from 'antd';
// ------------------------------------------------------------ //
// ------------------------ Components ------------------------ //
// ------------------------------------------------------------ //
import { Dropdown } from '../../dropdown/dropdown';
// import { clubDeleteData } from '../../../../redux/clubs/ClubSlice';
import { Button } from '../../buttons/buttons';
// ------------------------------------------------------------ //
// ------------------------- Utilities ------------------------ //
// ------------------------------------------------------------ //
import UilPhone from '@iconscout/react-unicons/icons/uil-phone';
import UilEnvelope from '@iconscout/react-unicons/icons/uil-envelope';
import UilMapMarker from '@iconscout/react-unicons/icons/uil-map-marker';
import UilEllipsisH from '@iconscout/react-unicons/icons/uil-ellipsis-h';
// ------------------------------------------------------------ //
// ------------------------- Component ------------------------ //
// ------------------------------------------------------------ //
function ContactCard({ user, showEditModal }) {
  // --------------------------------------------------------- //
  // ------------------------ Redux -------------------------- //
  const dispatch = useDispatch();
  const { users } = useSelector((state) => {
    return {
      users: state.clubs.data,
    };
  });
  // ----------------------- /Redux -------------------------- //
  // --------------------------------------------------------- // 
  // --------------------------------------------------------- //
  // ------------------------ Static ------------------------- //
  const { id, clubName, logo, contact_info, address, company } = user;
  console.log(logo)
  // ----------------------- /Static ------------------------- //
  // --------------------------------------------------------- //
  // --------------------------------------------------------- //
  // ----------------------- Callbacks ----------------------- //
  const onHandleDelete = () => {
    const value = users.filter((item) => item.id !== id);
    dispatch(clubDeleteData(value));
  };
  // ---------------------- /Callbacks ----------------------- //
  // --------------------------------------------------------- //
  // --------------------------------------------------------- //
  // ----------------------- Renderers ----------------------- //
  return (
    <div className="bg-white dark:bg-white10 shadow-[0_5px_20px_rgba(173,181,217,0.01)] p-[25px] rounded-10 relative">
      <NavLink to={`/clubs/details/${id}`}>
        <figure className="m-0 text-center">
          <Avatar
            className="inline-flex items-center justify-center z-100 bg-gray-100 w-32 h-32 " size="large"
            src={logo}
          />
          {/* <img className="inline-block rounded-full w-[120px] h-[120px]" src={require(`../../../../${img}`)} alt="" /> */}
          <figcaption className="mt-[20px]">
            <h2 className="text-[22px] font-semibold mb-0 text-dark dark:text-white87">{clubName.ar}</h2>
            <span className="text-[20px] text-theme-gray dark:text-white60">{clubName.en}</span>
          </figcaption>
        </figure>
        <div className="mt-[20px] dark:border-white10 border-t-1 pt-[25px]">
          <ul className="flex flex-col flex-wrap gap-[14px]">
            <li className="flex items-center text-light dark:text-white60 gap-[12px]">
              <UilPhone className="w-[16px] h-[16px]" />
              {contact_info.phone}
            </li>
            <li className="flex items-center text-light dark:text-white60 gap-[12px]">
              <UilEnvelope className="w-[16px] h-[16px]" />
              {contact_info.email}
            </li>
            <li className="flex items-center text-light dark:text-white60 gap-[12px]">
              <UilMapMarker className="w-[16px] h-[16px]" />
              {address.city}
            </li>
          </ul>
        </div>

      </NavLink>

    </div>
  );
}
ContactCard.propTypes = {
  user: PropTypes.object,
  showEditModal: PropTypes.func,
};
export default ContactCard;
