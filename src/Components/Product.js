import {useState} from 'react';

const ProductTable = () => {
    const city = [
        {
            id:1,
            name: "London"
        },
        {
            id:2,
            name: "Madrid"
        },
        {
            id:3,
            name: "Paris"
        },
        {
            id:4,
            name: "Amsterdam"
        }
    ];

    const [name, setName] = useState('');

    // the search result
    const [foundCity, setFoundCity] = useState(city);
  
    const filter = (e) => {
      const keyword = e.target.value;
  
      if (keyword !== '') {
        const results = city.filter((cities) => {
          return cities.name.toLowerCase().startsWith(keyword.toLowerCase());
          // Use the toLowerCase() method to make it case-insensitive
        });
        setFoundCity(results);
      } else {
        setFoundCity(city);
        // If the text field is empty, show all users
      }
  
      setName(keyword);
    };
    return (
        <div className="container">
          <input
            type="search"
            value={name}
            onChange={filter}
            className="input"
            placeholder="Filter by Name"
          />
    
          <div>
            {foundCity && foundCity.length > 0 ? (
              foundCity.map((cities) => (
                <li key={cities.id} >
                  <span >{cities.id} - </span>
                  <span >{cities.name}  </span>
                </li>
              ))
            ) : (
              <h3>No city found!</h3>
            )}
          </div>
        </div>
      );
    }
export default ProductTable;