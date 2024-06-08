import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SearchResults = () => {
  const [searchResults, setSearchResults] = useState([]);
  const { results } = useParams(); // Obtenir les résultats de la recherche à partir des paramètres

  useEffect(() => {
    if (results) {
      setSearchResults(JSON.parse(results)); // Convertir la chaîne JSON en tableau
    }
  }, [results]);

  return (
    <div>
      {searchResults.length > 2 ? (
        <ul>
          {searchResults.map(result => (
            <li key={result.id}>{result.name}</li>
          ))}
        </ul>
      ) : (
        <p>Aucun résultat trouvé.</p>
      )}
    </div>
  );
};

export default SearchResults;
