# Himshakti-website
Why We Chose MongoDB Atlas

HimShakti AI uses MongoDB Atlas as its primary cloud database because it is scalable, secure, and well-suited for MERN Stack applications. Since the project handles different types of data such as users, products, categories, inventory, orders, and AI predictions, MongoDB's flexible document-based structure makes it easy to store and manage this information without requiring complex table relationships.

MongoDB Atlas also provides cloud hosting, automatic backups, high availability, and secure database access. It integrates seamlessly with Node.js and Mongoose, allowing developers to perform CRUD operations efficiently. As the project grows with AI modules and analytics, MongoDB can easily scale without major database redesign.

Advantages of MongoDB Atlas
Cloud-based database with high availability
Flexible NoSQL document model
Easy integration with Node.js and Express
Scalable for large amounts of data
Secure authentication and access control
Automatic backup and monitoring
Ideal for MERN Stack development
⚙️ Database Setup

The following steps were followed to configure the MongoDB Atlas database for the HimShakti AI project.

Step 1: Create a MongoDB Atlas Account
Visit https://www.mongodb.com/atlas
Create a free account.
Create a new project named HimShakti AI.
Step 2: Create a Cluster
Select the Free Shared Cluster (M0).
Choose the preferred cloud provider and region.
Create the cluster.
Step 3: Create Database User

Create a database user with:

Username: himshaktiadmin
Password: ********

Grant Read and Write permissions.

Step 4: Configure Network Access

Under Network Access:

Add the current IP address

or

0.0.0.0/0

(for development purposes only)

Step 5: Obtain Connection String

Copy the MongoDB connection string.

Example:

mongodb+srv://himshaktiadmin:<password>@cluster0.mongodb.net/himshakti?retryWrites=true&w=majority

Replace <password> with the database user's password.

Step 6: Install Dependencies
npm install mongoose dotenv
Step 7: Configure Environment Variables

Create a .env file inside the server folder.

PORT=5000

MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/himshakti

JWT_SECRET=your_secret_key
Step 8: Connect Database

In server.js

const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log(err));
Step 9: Start Backend Server
npm install

npm run dev
