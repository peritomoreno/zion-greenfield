const sampleStore = {
  // derived from user interaction
  selected: {
    // current selected style
    style: {
      style_id: 18,
      name: 'Forest Green & Black',
      original_price: '140',
      sale_price: '0',
      'default?': 1,
      photos: [
        {
          thumbnail_url:
            'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url:
            'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
        },
        {
          thumbnail_url:
            'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url:
            'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80'
        },
        {
          thumbnail_url:
            'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url:
            'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80'
        }
      ],
      skus: {
        XS: 8,
        S: 16,
        M: 17,
        L: 10,
        XL: 15
      }
    },

    // index of current selected thumbnail
    thumbnailIndex: 0
  },

  // from Product API
  currentProduct: {
    id: 11,
    name: 'Air Minis 250',
    slogan: 'Full court support',
    description:
      'This optimized air cushion pocket reduces impact but keeps a perfect balance underfoot.',
    category: 'Basketball Shoes',
    default_price: '0',
    features: [
      {
        feature: 'Sole',
        value: 'Rubber'
      },
      {
        feature: 'Material',
        value: 'FullControlSkin'
      }
    ]
  },

  // from Product API
  currentStyles: [
    {
      style_id: 17,
      name: 'Black',
      original_price: '65',
      sale_price: '0',
      'default?': 1,
      photos: [
        {
          thumbnail_url:
            'https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url:
            'https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
        },
        {
          thumbnail_url:
            'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url:
            'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80'
        },
        {
          thumbnail_url:
            'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          url:
            'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80'
        },
        {
          thumbnail_url:
            'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          url:
            'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80'
        },
        {
          thumbnail_url:
            'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url:
            'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80'
        },
        {
          thumbnail_url:
            'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          url:
            'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
        }
      ],
      skus: {
        XS: 8,
        S: 16,
        M: 17,
        L: 10,
        XXL: 6,
        XL: 15
      }
    },
    {
      style_id: 18,
      name: 'Olive Green',
      original_price: '65',
      sale_price: '0',
      'default?': 0,
      photos: [
        {
          thumbnail_url:
            'https://images.unsplash.com/photo-1534481909716-9a482087f27d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url:
            'https://images.unsplash.com/photo-1534481909716-9a482087f27d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
        },
        {
          thumbnail_url:
            'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url:
            'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80'
        },
        {
          thumbnail_url:
            'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          url:
            'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80'
        },
        {
          thumbnail_url:
            'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          url:
            'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80'
        },
        {
          thumbnail_url:
            'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          url:
            'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
        },
        {
          thumbnail_url:
            'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url:
            'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80'
        }
      ],
      skus: {
        XS: 8,
        S: 16,
        M: 17,
        L: 10,
        XL: 15,
        XXL: 6
      }
    },
    {
      style_id: 57,
      name: 'Turquoise',
      original_price: '174',
      sale_price: '59',
      'default?': 1,
      photos: [
        {
          thumbnail_url:
            'https://images.unsplash.com/photo-1479756212843-6314ad5121dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url:
            'https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
        },
        {
          thumbnail_url:
            'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url:
            'https://images.unsplash.com/photo-1461551449292-b63f7419ac93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1970&q=80'
        },
        {
          thumbnail_url:
            'https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url:
            'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80'
        }
      ],
      skus: {
        XS: 11,
        S: 33,
        M: 1,
        L: 51,
        XL: 55,
        XXL: 19
      }
    },
    {
      style_id: 58,
      name: 'Grey',
      original_price: '192',
      sale_price: '0',
      'default?': 0,
      photos: [
        {
          thumbnail_url:
            'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          url:
            'https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
        },
        {
          thumbnail_url:
            'https://images.unsplash.com/photo-1515992854631-13de43baeba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url:
            'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80'
        }
      ],
      skus: {
        XS: 4,
        S: 0,
        M: 48,
        L: 6,
        XL: 48,
        XXL: 43
      }
    },
    {
      style_id: 59,
      name: 'Maroon',
      original_price: '174',
      sale_price: '0',
      'default?': 0,
      photos: [
        {
          thumbnail_url:
            'https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url:
            'https://images.unsplash.com/photo-1479756212843-6314ad5121dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
        },
        {
          thumbnail_url:
            'https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url:
            'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
        },
        {
          thumbnail_url:
            'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          url:
            'https://images.unsplash.com/photo-1515243061678-14fc18b93935?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
        }
      ],
      skus: {
        XS: 8,
        S: 0,
        M: 28,
        L: 49,
        XL: 5,
        XXL: 16
      }
    }
  ],

  reviewData: [
    {
      review_id: 57665,
      rating: 3,
      summary: 'cookies & cream',
      recommend: 0,
      response: null,
      body: "cookies and cream is the best ice cream flavor, don't @ me",
      date: '2020-02-26T00:00:00.000Z',
      reviewer_name: 'ice-cream-boss',
      helpfulness: 1,
      photos: []
    },
    {
      review_id: 57661,
      rating: 5,
      summary: "Not gonna lie, that's some good quality",
      recommend: 1,
      response: null,
      body:
        "For $2 I didn't expect jordans, but holy hell these are some dope kicks!",
      date: '2020-02-14T00:00:00.000Z',
      reviewer_name: 'Lebron James',
      helpfulness: 0,
      photos: []
    },
    {
      review_id: 57664,
      rating: 5,
      summary: 'Kendrick Lamar - Loyalty',
      recommend: 1,
      response: null,
      body:
        "Tell me who you loyal to Is it money? Is it fame? Is it weed? Is it drink? Is it comin' down with the loud pipes in the rain? Big chillin', only for the power in your name Tell me who you loyal to Is it love for the streets when the lights get dark? Is it unconditional when the 'Rari don't start? Tell me when your loyalty is comin' from the heart",
      date: '2020-02-26T00:00:00.000Z',
      reviewer_name: 'kendrick_lamar',
      helpfulness: 0,
      photos: []
    },
    {
      review_id: 57666,
      rating: 5,
      summary: 'cookies & cream part 2',
      recommend: 1,
      response: null,
      body: "cookies and cream is the best ice cream flavor, don't @ me",
      date: '2020-02-26T00:00:00.000Z',
      reviewer_name: 'ice-cream-boss',
      helpfulness: 0,
      photos: [
        {
          id: 27258,
          url:
            'https://www.chewoutloud.com/wp-content/uploads/2013/08/Cookies-n-Cream-Ice-Cream-2.jpg'
        }
      ]
    },
    {
      review_id: 57667,
      rating: 5,
      summary: 'cookies & cream part 3',
      recommend: 1,
      response: null,
      body: "cookies and cream is the best ice cream flavor, don't @ me AGAIN",
      date: '2020-02-26T00:00:00.000Z',
      reviewer_name: 'ice-cream-boss',
      helpfulness: 0,
      photos: []
    },
    {
      review_id: 57670,
      rating: 5,
      summary: 'Kendrick Lamar - Loyalty',
      recommend: 1,
      response: null,
      body:
        "Tell me who you loyal to Is it money? Is it fame? Is it weed? Is it drink? Is it comin' down with the loud pipes in the rain? Big chillin', only for the power in your name Tell me who you loyal to Is it love for the streets when the lights get dark? Is it unconditional when the 'Rari don't start? Tell me when your loyalty is comin' from the heart",
      date: '2020-02-28T00:00:00.000Z',
      reviewer_name: 'kendrick_lamar',
      helpfulness: 0,
      photos: []
    }
  ],
  // from Product API, Styles API, and related product API
  relatedProducts: { products: [], styles: [] }
};

export default sampleStore;
