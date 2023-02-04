const isProd = () => {
  return process.env.NODE_ENV === 'production'
}

export {
  isProd
}