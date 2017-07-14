/**
 * Test #1 - Removes code and file in production mode
 */
if (process.env.NODE_ENV !== 'production') {
  const image = require('./thumbs-up.jpg');

  console.log('Test #1:', image);
}

/**
 * Test #2 - Removes code but keeps file in production mode
 */
const obj = Object.assign(
  {a: 1},
  process.env.NODE_ENV !== 'production' && {b: require('./thumbs-down.jpg')}
);

console.log('Test #2:', obj);
