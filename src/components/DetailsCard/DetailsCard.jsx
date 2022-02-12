import React from 'react';
import './DetailsCard.css'

export default function DetailsCard({cardname,cardvalue}) {
  return <div className='card'>
      <div className="card-name">{cardname}</div>
      <div className="card-value">{cardvalue}</div>

  </div>;
}
