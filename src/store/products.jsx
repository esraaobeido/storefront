const initialState = 
    [
      { id:1 ,
        name: 'TV', category: 'electronics', price: 500.00, inventoryCount: 5, inCart: 1,
        image: 'https://www.sony-mea.com/image/237a3a285a7fa9f731c3e89f159cb51d?fmt=pjpeg&wid=1014&hei=396&bgcolor=F1F5F9&bgc=F1F5F9',
      },
      {id:2,
        name: 'Laptop', category: 'electronics', price: 1000.00, inventoryCount: 5, inCart: 1,
        image: 'https://topjoy.shop/cdn/shop/products/I156L_4_669x669.png?v=1633945717',
      },{id:3,
        name: 'Mobile Phone', category: 'electronics', price: 655.00, inventoryCount: 5, inCart: 1,
        image: 'https://www.costco.co.uk/medias/sys_master/images/he6/h59/119433947938846.webp',
      },{id:4,
        name: 'Airpods', category: 'electronics', price: 400.00, inventoryCount: 5, inCart: 1,
        image: 'https://cellbay.jo/web/image/product.template/1139/image_1024/Apple%20AirPods%20Pro?unique=6fa09f5',
      },{id:5,
        name: 'Wireless Headset', category: 'electronics', price: 300.00, inventoryCount: 5, inCart: 1,
        image: 'https://www.sbsmobile.com/suo/228315-thickbox_default/wireless-headset-with-integrated-controls-and-microphone.jpg',
      },
      {id:6,
        name: 'Camera', category: 'electronics', price: 900.00, inventoryCount: 15, inCart: 1,
        image: 'https://i1.adis.ws/i/canon/eos-90d_800x800_b7eaf1f35955456ea3198176be23ae3b?$prod-gallery-1by1$',
      },   
      
      {id:8,
        name: 'Bread', category: 'food', price: 2.39, inventoryCount: 90, inCart: 1,
        image: 'https://kitchen.sayidaty.net/uploads/small/3e/3ef61e347eed6cf7c8c081fd6aeb749e_w750_h500.jpg',
      },    
         {id:5,
        name: 'Panana', category: 'food', price: 2.39, inventoryCount: 90, inCart: 1,
        image: 'https://www.annahar.com/ContentFiles/134916Image1.jpg?version=1489165',
      },
            {id:1,
        name: 'tomato', category: 'food', price: 2.39, inventoryCount: 90, inCart: 1,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/220px-Tomato_je.jpg',
      },
      {id:2,
        name: 'Potato', category: 'food', price: 0.39, inventoryCount: 90, inCart: 1,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpV-CVxwpkt2Nqu0VAonUj81tgsML3gRaoHON_SHCvTFFPaWTptyaNnCkGv345NgRjJIw&usqp=CAU',
      },
      {id:3,
        name: 'cauliflower', category: 'food', price: 0.39, inventoryCount: 90, inCart: 1,
        image: 'https://thawaaq.com/content/images/thumbs/0024396_cauliflower-jordan-holland-1kg_550.png',
      },
      {id:4,
        name: 'Paprika', category: 'food', price: 1.39, inventoryCount: 90, inCart: 1,
        image: 'https://static.webteb.net/images/content/tbl_articles_article_19351_378fcd019df-7acc-47e0-9f07-ed3216437918.jpg',
      },      
      {id:5,
        name: 'Apples', category: 'food', price: .99, inventoryCount: 500, inCart: 1,
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9JC_071yUZxN_kHC2mNAbJxzrUnT0SBGAnuV29BcO_tu98Idknr57RWc1mD__7Gj4o0GVCEp61HNwwJj3EmymEB0OZI5asbMBIbJv4LxJkeNhkoE_gNIpzy4rfpHAWEEgdUKn5bOW4srzQQM5uW7VU2shpfFN_cgi_QSFT4PBcqU_jKzUV-_OveQk/s1000/The%20benefits%20and%20harms%20of%20apples.jpg',
      },
      {id:6,
        name: 'Eggs', category: 'food', price: 1.99, inventoryCount: 12, inCart: 1,
        image: 'https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg?w=400&h=300&c=crop',
      },
    ];


export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
  case 'addToCart':
    return state.map(product => {
      if(product.name === payload.name){
        return {...product, inventoryCount: product.inventoryCount - 1};
      }else{
        return product;
      }
    });
  default:
    return state;
  }
};