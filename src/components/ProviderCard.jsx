import React from 'react';
import { Link } from 'react-router-dom';

const ProviderCard = ({ provider }) => {
  return (
    <div className="provider-card">
      <h3>{provider.name}</h3>
      <p><strong>Specialization:</strong> {provider.specialization}</p>
      <p><strong>Location:</strong> {provider.location}</p>
      <p>{provider.shortDescription}</p>
      <Link to={`/provider/${provider.id}`}>View Details</Link>
    </div>
  );
};

export default ProviderCard;
