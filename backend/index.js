import express from "express";
import cors from "cors";
const app = express();

app.use(cors());
app.get('/api/products', (req, res) => {
    const products = [
        // http://localhost:3000/api/products?search=wood 
        {
          id: 1,
          name: 'Table Wooden',
          price: 200,
          image: 'https://images.unsplash.com/photo-1699959634881-16f34059a78f?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8',
        },
        {
          id: 2,
          name: 'Chair Leather',
          price: 120,
          image: 'https://images.unsplash.com/photo-1528651787004-90b85420c9e5?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8',
        },
        {
          id: 3,
          name: 'Lamp Modern',
          price: 80,
          image: 'https://images.unsplash.com/photo-1541726839491-686cd1538135?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
        },
        {
          id: 4,
          name: 'Sofa Comfort',
          price: 350,
          image: 'https://images.unsplash.com/photo-1533227268428-fd14d6c0a9ed?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8',
        },
        {
          id: 5,
          name: 'Desk Minimalist',
          price: 180,
          image: 'https://images.unsplash.com/photo-1519227806428-8593b5069b34?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8',
        },
        {
          id: 6,
          name: 'Bookshelf Classic',
          price: 250,
          image: 'https://images.unsplash.com/photo-1523985542485-3e588ff19e1d?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8',
        },
        {
          id: 7,
          name: 'Mirror Antique',
          price: 120,
          image: 'https://images.unsplash.com/photo-1554692918-08f8b00d61a7?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8',
        },
        {
          id: 8,
          name: 'Cabinet Modern',
          price: 300,
          image: 'https://images.unsplash.com/photo-1522338907765-05e7d0d0935f?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8',
        },
        {
          id: 9,
          name: 'Bed Frame Contemporary',
          price: 400,
          image: 'https://images.unsplash.com/photo-1562853663-4bda4b5cfc62?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
        },
        {
          id: 10,
          name: 'Rug Geometric',
          price: 60,
          image: 'https://images.unsplash.com/photo-1542353436-312f006a52d8?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8',
        },
      ];
      

    if (req.query.search) {
        const filterProducts = products.filter(product => product.name.includes(req.query.search));
        res.send(filterProducts);
        return;
    }

    setTimeout(() => {
        res.send(products);
    }, 3000);
});

const port = process.env.PORT || 3000; // Fix the typo here, change POST to PORT

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
