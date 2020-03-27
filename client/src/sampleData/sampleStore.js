const sampleStore = {
  // derived from user interaction
  selected: {
    // current selected style
    style: {
      style_id: 1,
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
      style_id: 1,
      name: 'Forest Green & Black',
      original_price: '140',
      sale_price: '0',
      'default?': 1,
      photos: [
        {
          thumbnail_url: 'urlplaceholder/style_1_photo_number_thumbnail.jpg',
          url: 'urlplaceholder/style_1_photo_number.jpg'
        },
        {
          thumbnail_url: 'urlplaceholder/style_1_photo_number_thumbnail.jpg',
          url: 'urlplaceholder/style_1_photo_number.jpg'
        }
        // ...
      ],
      skus: {
        XS: 8,
        S: 16,
        M: 17,
        L: 10,
        XL: 15
      }
    },
    {
      style_id: 2,
      name: 'Desert Brown & Tan',
      original_price: '140',
      sale_price: '0',
      'default?': 0,
      photos: [
        {
          thumbnail_url: 'urlplaceholder/style_2_photo_number_thumbnail.jpg',
          url: 'urlplaceholder/style_2_photo_number.jpg'
        }
        // ...
      ],
      skus: {
        S: 16,
        XS: 8,
        M: 17,
        L: 10,
        XL: 15,
        XXL: 6
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
  related: [
    {
      id: 8,
      category: 'Kicks',
      name: 'YEasy 350',
      default_price: 450,
      thumbnail_url:
        'https://images.unsplash.com/photo-1505248254168-1de4e1abfa78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 6,
      category: 'Kicks',
      name: 'Pumped Up Kicks',
      default_price: 89,
      thumbnail_url:
        'https://images.unsplash.com/photo-1477420143023-6a0e0b04b69a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 34,
      category: 'Tank Top',
      name: 'Peggie Tank Top',
      default_price: 645,
      thumbnail_url:
        'https://images.unsplash.com/photo-1503449377594-32dd9ac4467c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 50,
      category: 'Dress',
      name: 'Aubrey Dress',
      default_price: 966,
      thumbnail_url:
        'https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 35,
      category: 'Hat',
      name: 'Kaylin Hat',
      default_price: 55,
      thumbnail_url:
        'https://images.unsplash.com/photo-1500699889581-a7f97ec155d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    }
  ]
};

export default sampleStore;
