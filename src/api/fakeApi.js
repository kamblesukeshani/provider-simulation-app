import data from '../data/providers.json';

export function fetchProviders() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 800);
  });
}

export function fetchProviderById(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const provider = data.find((p) => p.id === Number(id));
      resolve(provider || null);
    }, 800);
  });
}
