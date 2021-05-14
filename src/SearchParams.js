import { useState } from 'react';

const SearchParams = () => {
    const [location, setLocation] = useState('San Francisco, CA');

    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
            <input id="location" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SearchParams;