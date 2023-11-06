// ------------------------------------------------------------ //
// ------------------------- Packages ------------------------- //
// ------------------------------------------------------------ //
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// ------------------------------------------------------------ //
// ------------------------ Components ------------------------ //
// ------------------------------------------------------------ //
import Heading from 'components/heading/heading';
// ------------------------------------------------------------ //
// ------------------------- Component ------------------------ //
// ------------------------------------------------------------ //
function PlayerCards({ player }) {
  // --------------------------------------------------------- //
  // ------------------------ Static ------------------------- //
  const { id, playerName, playerImage, number, position, nationality, index } = player;
  console.log('playerImage', playerImage)
  // ----------------------- /Static ------------------------- //
  // --------------------------------------------------------- //
  // --------------------------------------------------------- //
  // ----------------------- Renderers ----------------------- //
  return (
    <div
      className="relative box-border  border-2 justify-center text-center 	 bg-white dark:bg-white10 mb-[30px] rounded-[10px] shadow-[0_5px_20px_rgba(173,181,217,0,1)]"
      style={{ padding: '10px', }}
    >
      <figure className="mb-0 h-80 justify-center text-center" >
        <img
          className=" rounded-t-[10px] h-80	 "
          src={playerImage}
          alt={`img${id}`}
          style={{ height: 250 }}
        />

      </figure>
      <figcaption className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 mt-2 py-2">
        <Link
          to={`player/playerDetails/${index + 1}`}
          className="text-dark hover:text-primary dark:text-white87 hover:dark:text-primary"
        >
          <Heading className=" text-lg font-semibold" as="h5">
            {playerName.en}
          </Heading>
          <Heading className="text-md" as="h5">
            {position}
          </Heading>
        </Link>

      </figcaption>
    </div>
  );
}
PlayerCards.propTypes = {
  player: PropTypes.object,
};
export default PlayerCards;
