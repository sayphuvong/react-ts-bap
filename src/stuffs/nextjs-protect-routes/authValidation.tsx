// import env from "@tripical/configs/env";
// import { NextRequest } from "next/server";

// export const ROUTES_WITH_AUTHENTICATION = [
//   "/account",
//   "/chat",
//   "/dispute",
//   "/my-trips",
//   "/order",
//   "/wishlist",
// ];

// export const handleAuthValidation = async (req: NextRequest) => {
//   const cookie = req.headers.get("cookie");
//   let user = null;

//   try {
//     const fetchProfileResponse = await fetch(`${env.apiUrl}/users/profile`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         cookie,
//       },
//     });
//     user = await fetchProfileResponse.json();
//   } catch {
//     // Do nothing!
//   }

//   if (!user || !user?.uid) {
//     const signinUrl = new URL("/login", req.url);
//     return {
//       response: {
//         action: "redirect",
//         args: [signinUrl],
//       },
//     }
//   }

//   return {
//     response: null,
//   };
// };
