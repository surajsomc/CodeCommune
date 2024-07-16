import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import NextAuth from "next-auth"

export const authOptions = {
providers: [
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
  }),
  GitHubProvider({
    clientId: process.env.GITHUB_ID as string,
    clientSecret: process.env.GITHUB_SECRET as string
  }),
  CredentialsProvider({
    // The name to display on the sign in form (e.g. "Sign in with...")
    name: "Credentials",
    // `credentials` is used to generate a form on the sign in page.
    // You can specify which fields should be submitted, by adding keys to the `credentials` object.
    // e.g. domain, username, password, 2FA token, etc.
    // You can pass any HTML attribute to the <input> tag through the object.
    credentials: {
      email: { label: "Email", type: "email" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
      // Add logic here to look up the user from the credentials supplied
      if(!credentials?.email || !credentials?.password){
        return null;
      }
      const endpoint = process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT as string
      const res = await fetch(`${endpoint}/login`, 
        { method: "POST", 
          body: JSON.stringify({ email: credentials.email, password: credentials.password }),
          headers: {
        "Content-Type": "application/json"
         },    
      });
      const user = await res.json();

      if (user.email){
        return user;
      }
      return null;
    },
  })
],
pages: {
  signIn: '/auth-routes/login',
},
secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}