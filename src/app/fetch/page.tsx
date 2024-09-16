// src/app/components/Fetch.tsx
'use client';
import React, { useState } from 'react';
import { fetchProducts, createProduct, removeProduct } from '@/lib/api';
import Image from 'next/image';

const Fetch = () => {
  type ProductProps = {
    id: string;
    name: string;
    price: number;
    description?: string;
    images: {
      url: string;
      width?: number;
      height?: number;
    }[];
  };

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [products, setProducts] = useState<ProductProps[]>([]);

  const handleGetProducts = async () => {
    const fetchedProducts = await fetchProducts();
    setProducts(fetchedProducts);
  };

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    const slug = name.toLowerCase().replace(/\s+/g, '-');
    const newProduct = await createProduct({ name, description, price, slug });
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    setName('');
    setPrice(0);
    setDescription('');
  };

  const handleDeleteProduct = async (id: string) => {
    await removeProduct(id);
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  return (
    <div>
      {/* Form for adding products */}
      <form onSubmit={handleAddProduct}>
        <input
          onChange={(e) => setName(e.target.value)}
          type='text'
          placeholder='Name'
          value={name}
          required
        />
        <input
          onChange={(e) => setPrice(Number(e.target.value))}
          type='number'
          placeholder='Price'
          value={price === 0 ? '' : price}
          required
        />
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Description'
          value={description}
        />
        <button type='submit'>Add Product</button>
      </form>

      {/* Button to fetch products */}
      <button onClick={handleGetProducts}>Get Products</button>

      {/* Display fetched products */}
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <Image
              src={product.images[0]?.url || '/placeholder.jpg'}
              alt={product.name}
              width={100}
              height={100}
            />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button onClick={() => handleDeleteProduct(product.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fetch;
