import React from 'react';
import './NotFound.scss';

export const NotFound: React.FC = () => {
  return (
    <tr className="Notfound">
      <td className="Notfound__title">
        No users were found according to these criteria!
      </td>
    </tr>
  );
};
