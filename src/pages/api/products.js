import fetch from 'node-fetch';

export default async function handler(req, res) {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Error fetching products' });
  }
}