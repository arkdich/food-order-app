export default function getURLSearch(url, query) {
  if (typeof url !== 'string' || typeof query !== 'string')
    throw new Error('Argumets must be of type String');

  return new URLSearchParams(url.substring(url.indexOf('?'))).get(query);
}
