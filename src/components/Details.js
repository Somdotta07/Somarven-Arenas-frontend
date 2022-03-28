import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

function Details() {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getItem = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setItem(await response.json());
      setLoading(false);
    };
    getItem();
  }, []);

  const Loading = () => <>Loading...</>;
  const ItemDetails = () => (
    <>
      <div className="col-md-6">
        <img
          src={item.image}
          alt={item.title}
          key={item.id}
          height="400px"
          width="400px"
        />
      </div>
      <div className="col-md-6">
        <h3 className="text-uppercase text-black-50">{item.title}</h3>
        <h3 className="text-uppercase text-black-50">
          $
          {item.price}
        </h3>
        <p className="lead">{item.description}</p>
        <button type="button" className="btn btn-outline-dark">Reserve</button>
      </div>
    </>
  );
  return (
    <div>
      <h2>Arena 2</h2>
      <div className="container py-5">
        <div className="row py-5">{loading ? <Loading /> : <ItemDetails />}</div>
      </div>
    </div>
  );
}

export default Details;
