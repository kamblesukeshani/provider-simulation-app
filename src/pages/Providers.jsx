import React, { useEffect, useState } from 'react';
import { fetchProviders } from '../api/fakeApi';
import ProviderCard from '../components/ProviderCard';

const Providers = () => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    fetchProviders().then(data => setProviders(data));
  }, []);

  return (
    <div>
      <h2>Provider Directory</h2>
      {providers.length === 0 ? (
        <p>Loading providers...</p>
      ) : (
        providers.map((provider) => (
          <ProviderCard key={provider.id} provider={provider} />
        ))
      )}
    </div>
  );
};

export default Providers;
