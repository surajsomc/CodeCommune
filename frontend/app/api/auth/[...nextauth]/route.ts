import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth"


export const authOptions = {
providers: [
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
      const res = await fetch(`http://localhost:3001/api/v1/students`);
      const users = await res.json();
      const user = users.data.find((x:any) => (x.email === credentials?.email && x.password === credentials?.password))
      if (user){
        return user;
      }
      return null;
    },
  })
],
pages: {
  signIn: '/auth-routes/login',
}
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}