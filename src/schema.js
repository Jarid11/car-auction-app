// create table users (
//   --   user_id SERIAL PRIMARY KEY,
//   -- auth_id TEXT,
//   -- user_img TEXT,
//   --   username TEXT
//   --   )

//   -- create table cars (
//     -- car_id SERIAL PRIMARY KEY, user_id INTEGER REFERENCES users(user_id),
//     --   year INTEGER,
//     -- make TEXT,
//     --   model TEXT,
//     --   location TEXT,
//     --   odometer INTEGER,
//     -- condition TEXT,
//     -- retail_value INTEGER,
//     --   current_bid INTEGER,
//     -- buy_out_price INTEGER,
//     --   sale_threshold INTEGER,
//     -- images TEXT
//     --   )

// create table bids (
//   -- bid_id SERIAL PRIMARY KEY,
//   -- car_id INTEGER REFERENCES cars(car_id),
//   -- user_id INTEGER REFERENCES users(user_id),
//   -- current_bid INTEGER
//   -- )

// CAR DUMMY DATA
// INSERT INTO cars (
//   user_id, year, make, model, location, odometer, condition, retail_value,
//   buy_out_price, images
// ) VALUES (
//   1, 2010, 'Mazda', 'Mazdaspeed3', '500 S Ervay St, Dallas TX 75201', 87534, 'Good' , 13500, 12000, 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/13590294_10205437896021947_2435528195758282274_n.jpg?_nc_cat=0&oh=35b5ad8b1c38e438c9ab31f790cebaf7&oe=5C12B971'
// )
