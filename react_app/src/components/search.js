import React, { Component } from 'react';
import { InstantSearch, SearchBox, Hits, Highlight } from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';

// console.log(process.env.ALGOLIA_APP_ID);
// console.log(process.env.ALGOLIA_SEARCH_KEY);

const searchClient = algoliasearch('MNU0QYCQTA', '375b2670b2fd2faee001efea39b4be4b');

class Search extends Component {
  render() {
    return (
      <InstantSearch searchClient={searchClient} indexName="hot_springs">
        <div className="px-4 text-gray-900">
          <SearchBox />
          <Hits hitComponent={Hit} />
        </div>
      </InstantSearch>
    );
  }
}

const Hit = ({ hit }) => (
  <div className="mb-6  z-999 my-2 p-4 rounded-xl bg-gray-900 text-gray-100 shadow-lg shadow-indigo-300">
    <div className="">
      <h3 className="">
        <Highlight attribute="properties.name" hit={hit} />
      </h3>
      <p className="text-white m-4">
        <Highlight attribute="properties.address" hit={hit} />
      </p>
    </div>
  </div>
);

export default Search;
