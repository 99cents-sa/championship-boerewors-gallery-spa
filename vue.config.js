module.exports = {
    baseUrl: process.env.NODE_ENV === 'production' ? 'https://checkershosting.s3.amazonaws.com/championship-boerewors-gallery/' : './',
    //baseUrl: './',
    productionSourceMap: false
  };


  /* module.exports = {
    publicPath: 'https://checkershosting.s3.amazonaws.com/championship-boerewors-gallery/',
    productionSourceMap: false
  } */