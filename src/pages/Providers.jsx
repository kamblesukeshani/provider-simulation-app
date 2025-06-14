import { useEffect, useState } from 'react';
import { fetchProviders } from '../api/fakeApi';
import ProviderCard from '../components/ProviderCard';

function Providers() {
  const [providers, setProviders] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProviders().then((data) => {
      setProviders(data);
      setLoading(false);
    });
  }, []);

  const filteredProviders = providers.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Provider Directory</h2>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name or specialization"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading ? (
        <p>Loading providers...</p>
      ) : filteredProviders.length === 0 ? (
        <p>No providers match your search.</p>
      ) : (
        <div className="grid">
          {filteredProviders.map((provider) => (
            <ProviderCard key={provider.id} provider={provider} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Providers;
