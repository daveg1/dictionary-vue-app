const endpoint = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

export default function(query) {
  const url = endpoint + query
  const res = fetch(url)
    .then(res => res.json())
    .catch(console.error)

  return res;
}