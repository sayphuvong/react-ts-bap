// import { NextRequest, NextResponse } from "next/server";

// import {
//   ROUTES_WITH_AUTHENTICATION,
//   handleAuthValidation,
// } from "./libs/auth/authValidation";

// export async function middleware(req: NextRequest) {
//   // Handle validate authentication (protect auth routes)
//   const needCheckAuth = ROUTES_WITH_AUTHENTICATION.some((item) =>
//     req.nextUrl.pathname.startsWith(item)
//   );
//   if (needCheckAuth) {
//     const { response } = await handleAuthValidation(req);
//     if (response && typeof NextResponse[response.action] === "function") {
//       return NextResponse[response.action].apply(NextResponse, response.args);
//     }
//   }

//   // Other handling...

//   return NextResponse.next();
// }