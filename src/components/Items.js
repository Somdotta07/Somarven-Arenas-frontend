import React, { useState, useEffect } from 'react';

function Items() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;
  useEffect(() => {
    const getItems = async () => {
      setLoading(true);
      const response = await fetch('https://fakestoreapi.com/products');
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getItems();
  }, []);

  const Loading = () => <>Loading...</>;
  const ShowItems = () => (
    <>
      <div className="buttons d-flex justify-content-center mb-5 pb-5">
        <button type="button" className="btn btn-outline-dark">
          {' '}
          All
        </button>
      </div>
      {filter.map((product) => (
        <>
          <div className="col-md-3 mb-4">
            <div className="card text-center p-4" key={product.id}>
              <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
              <div className="card-body">
                <h5 className="card-title mb-0">{product.title.substring(0, 12)}</h5>
                <p className="card-text lead fw-bold">
                  $
                  {' '}
                  {product.price}
                </p>
                <a href="details" className="btn btn-primary">
                  Details
                </a>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-3 mb-5">
            <h2 className="display-6 fw-bolder text-center">Item List</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowItems />}
        </div>
      </div>
    </div>
  );
}

export default Items;
