import { Link } from 'react-router-dom';

function ProviderCard({ provider }) {
  return (
    <div className="card">
      <h3>{provider.name}</h3>
      <p><strong>Specialization:</strong> {provider.specialization}</p>
      <p><strong>Location:</strong> {provider.location}</p>
      <p><strong>Rating:</strong> {provider.rating} / 5</p>
      <Link to={`/provider/${provider.id}`} className="btn">View Details</Link>
    </div>
  );
}

export default ProviderCard;
