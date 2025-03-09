CREATE TABLE products (
    id int PRIMARY KEY,
    name text,
    price numeric,
    imageurl text
);

INSERT INTO products (id, name, price, imageurl)
SELECT *
FROM jsonb_to_recordset(
    '[
		 { "id": "123", "name": "Basil", "price": "26.00", "imageurl": "/images/chili-bottle.webp" },
		 { "id": "234", "name": "Lemon", "price": "26.00", "imageurl": "/images/lemon-bottle.webp" },
		 { "id": "345", "name": "Garlic", "price": "26.00", "imageurl": "/images/garlic-bottle.webp" },
		 { "id": "456", "name": "Rosemary", "price": "26.00", "imageurl": "/images/rosemary-bottle.webp" },
		 { "id": "567", "name": "Chili", "price": "26.00", "imageurl": "/images/chili-bottle.webp" },
		 { "id": "678", "name": "Delicate", "price": "24.50", "imageurl": "/images/delicate-bottle.webp" },
		 { "id": "789", "name": "Medium", "price": "24.50", "imageurl": "/images/medium-bottle.webp" },
		 { "id": "890", "name": "Bold", "price": "24.50", "imageurl": "/images/bold-bottle.webp" }
     ]'::jsonb
) AS x(id int, name text, price numeric, imageurl varchar(50));


CREATE TABLE users (
    id text PRIMARY KEY,
	 cartitems int []
);

INSERT INTO users (id, cartitems)
SELECT *
FROM jsonb_to_recordset('
[ 
	{ "id": "12345", "cartitem" : ["123", "345"] }
]'::jsonb
) AS x(id text, cartitems int [])