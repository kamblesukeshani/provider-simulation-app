import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProviderById } from '../api/fakeApi';

const ProviderDetail = () => {
  const { id } = useParams();
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    fetchProviderById(id).then(data => setProvider(data));
  }, [id]);

  if (!provider) return <p>Loading provider...</p>;

  return (
    <div>
      <h2>{provider.name}</h2>
      <p><strong>Specialization:</strong> {provider.specialization}</p>
      <p><strong>Location:</strong> {provider.location}</p>
      <p><strong>Rating:</strong> {provider.rating} / 5</p>
      <p>{provider.longDescription}</p>
      <p><strong>Email:</strong> {provider.contactEmail}</p>
      <p><strong>Phone:</strong> {provider.phoneNumber}</p>
      <Link to="/">← Back to List</Link>
    </div>
  );
};

export default ProviderDetail;
