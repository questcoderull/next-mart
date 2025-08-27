import dbConnect, { collectionName } from "@/lib/dbConnect";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { username, password } = credentials;
        const user = await dbConnect(collectionName.USER).findOne({ username });

        const isPasswordOk = password == user.password;
        // const user = {
        //   id: "1",
        //   name: "j smith",
        //   email: "jasminth@example.com",
        // };

        if (isPasswordOk) {
          return user;
        } else {
          return null;
        }
      },
    }),

    // sign in with google
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account) {
        // console.log(
        //   "from sign in callback",
        //   user,
        //   account,
        //   profile,
        //   email,
        //   credentials
        // );

        try {
          const { providerAccountId, provider } = account;
          const { email: user_email, image, name } = user;

          const payload = {
            providerAccountId,
            provider,
            user_email,
            image,
            name,
            role: "user",
          };

          console.log("from sign in callback", payload);

          const userCollection = dbConnect(collectionName.USER);
          const isUserExist = await userCollection.findOne({
            providerAccountId,
          });

          if (!isUserExist) {
            await userCollection.insertOne(payload);
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      }

      return true;
    },

    async session({ session, token, user }) {
      if (token) {
        session.user.username = token.username;
        session.user.role = token.role;
      }
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.username = user.username;
        token.role = user.role;
      }
      return token;
    },
  },
};
