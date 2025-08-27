# 🕒 Next-Mart  

**Next-Mart** is a modern e-commerce website for selling **watches**.  
It is built using **Next.js** and includes authentication, product management, and a responsive design for a smooth user experience.  

---

Visit: https://next-mart-self.vercel.app

## ✨ Features  

- 🔥 **Best-Selling Products Section** – Showcases top-selling watches.  
- 🔐 **Authentication System** – Implemented with **Credentials** and **Google Authentication**.  
- 👤 **User Dashboard** – Accessible **only for logged-in users**.  
  - Users can **add products**.  
  - Dashboard route is **protected**.  
- 🚪 **Logout Functionality** – Secure logout option available.  
- 📱 **Fully Responsive Design** – Works seamlessly on mobile, tablet, and desktop.  
- ℹ️ **About Section** – Provides details about the website.  

---

## 🛠️ Tech Stack  

- ⚡ **Next.js** – Frontend framework  
- 🎨 **Tailwind CSS** – For styling and responsive UI  
- 🔑 **NextAuth.js** – Authentication (Credentials & Google Login)  
- 🗄️ **MongoDB** – Database for storing user and product data  

---

## 🚀 Getting Started  

### 1️⃣ Clone the repository  
```bash
git clone https://github.com/questcoderull/next-mart
2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ Setup environment variables
Create a .env.local file in the root folder and add:

env
Copy code
MONGO_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_nextauth_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
4️⃣ Run the development server
bash
Copy code
npm run dev

Route Summary
- /products → Showing products here in this route
- /products/id → showing specific product here.
- / → Home page (showing,navbar,hero, best-selling watches and footer)
- /about → About section
- /dashboard → Dashboard (only accessible to logged-in users)
- /(authentication) → Login, register (Credentials or Google authentication)


