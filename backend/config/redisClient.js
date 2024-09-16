const Redis = require('ioredis');

const client = new Redis({
  host: '127.0.0.1', // Ensure this matches your Redis server's host
  port: 6379,        // Ensure this matches your Redis server's port
});

client.on('connect', () => {
  console.log('Connected to Redis');
});

client.on('ready', () => {
  console.log('Redis client is ready');
});

client.on('error', (err) => {
  console.error('Redis connection error:', err);
});

client.on('close', () => {
  console.error('Redis connection closed');
});

module.exports = client;
