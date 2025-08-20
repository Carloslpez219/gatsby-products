require("dotenv").config(); 

module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-apiserver",
      options: {
        typePrefix: "internal__", 
        url: `https://fakestoreapi.com/products`, 
        method: "get",
        name: "products", 
        headers: {
          "Content-Type": "application/json",
        },
      },
    },
    {
      resolve: "gatsby-plugin-remote-images",
      options: {
        nodeType: "internal__products", 
        imagePath: "image", 
        name: "localImage", 
      },
    },
  ],
};
