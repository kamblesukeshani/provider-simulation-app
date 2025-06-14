import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchProviderById } from '../api/fakeApi';

function ProviderDetail() {
  const { id } = useParams();
  const [provider, setProvider] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProviderById(id).then((data) => {
      setProvider(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <div className="container"><p>Loading provider...</p></div>;
  if (!provider) return <div className="container"><p>Provider not found.</p><Link to="/providers">← Back to list</Link></div>;

  return (
    <div className="container">
      <h2>{provider.name}</h2>
      <p><strong>Specialization:</strong> {provider.specialization}</p>
      <p><strong>Location:</strong> {provider.location}</p>
      <p><strong>Rating:</strong> {provider.rating} / 5</p>
      <p>{provider.longDescription}</p>
      <p><strong>Email:</strong> <a href={`mailto:${provider.contactEmail}`}>{provider.contactEmail}</a></p>
      <p><strong>Phone:</strong> {provider.phoneNumber}</p>
      <Link to="/providers">← Back to List</Link>
    </div>
  );
}

export default ProviderDetail;