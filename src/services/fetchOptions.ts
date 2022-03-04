const fetchOptions = async (value: string) => {
  const options = [
    'murilo',
    'peter',
    'fred',
    'joe',
  ];
  
  return new Promise(resolve => {
    setTimeout(() => resolve(options.filter(option => option.includes(value))), 200)
  })
}

export default fetchOptions;