const { MongoClient } = require('mongodb');

// Thông tin kết nối đến MongoDB
const url = 'mongodb://localhost:27017';
const dbName = 'mydb';

// Kết nối đến MongoDB
async function connectToMongo() {
  const client = new MongoClient(url, { useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Kết nối đến MongoDB thành công');

    // Chọn database
    const db = client.db(dbName);

    // Tạo collection
    const collectionName = 'customers';
    const collection = db.collection(collectionName);

    await collection.createIndex({ email: 1 }, { unique: true }); // Tạo index unique cho email

    // Chèn dữ liệu vào collection
    const dataToInsert = { name: 'John Doe', email: 'john@example.com' };
    const result = await collection.insertOne(dataToInsert);
    console.log('Dữ liệu đã được chèn thành công:', result.ops);
  } finally {
    // Đóng kết nối
    await client.close();
  }
}

connectToMongo().catch((err) => console.error('Lỗi kết nối đến MongoDB:', err));
