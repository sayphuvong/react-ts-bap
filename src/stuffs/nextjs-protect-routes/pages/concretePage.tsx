// import { GetServerSideProps } from "next";

// export default function ConcretePage() {
//   // Do something!
//   return (
//     <div>This is Concrete Page</div>
//   );
// }

// // Utils
// interface RefreshTokenWithFetchParams {
//   url: string;
//   headers?: any;
//   data?: any;
// }
// export const postWithFetch = (args: RefreshTokenWithFetchParams) => {
//   const {
//     url,
//     headers = {},
//     data,
//   } = args;

//   return fetch(url, {
//     method: "POST",
//     body: data,
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//       ...headers,
//     },
//     credentials: "include",
//   })
//     .then((resp) => {
//       return resp.json();
//     })
//     .catch((err) => err);
// };

// // Utils
// interface SerializeUserTokenParams {
//   accessToken: string;
//   refreshToken: string;
// }
// export const serializeUserToken = ({ accessToken, refreshToken }: SerializeUserTokenParams) => {
//   return [
//     `refreshToken=${refreshToken}`,
//     `accessToken=${accessToken}`,
//   ].join('; ')
// };

// // SSR / Data Fetching
// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const { req, res } = ctx;
//   const userAgent = req.headers["user-agent"];
  
//   // Example 1: using fetch
//   await postWithFetch({
//     url: 'http://example.com/refresh',
//     data: {
//       did: userAgent,
//     },
//     headers: {
//       cookie: req.headers.cookie,
//     }
//   });

//   // Example 2: using axios & reuse cookie from Request
//   await axios({
//     url: 'http://example.com/refresh',
//     method: 'POST',
//     data: {
//       did: userAgent,
//     },
//     headers: {
//       "Content-Type": "application/json",
//       cookie: req.headers.cookie,
//     },
//   });

//   // Example 3: using axios & serialize user token
//   const existedData = { accessToken: '<Access Token Data>', refreshToken: '<Refresh Token Data>' };
//   await axios({
//     url: 'http://example.com/refresh',
//     method: 'GET',
//     data: {
//       did: userAgent,
//     },
//     headers: {
//       "Content-Type": "application/json",
//       cookie: serializeUserToken({
//         accessToken: existedData.accessToken,
//         refreshToken: existedData.refreshToken,
//       }),
//     },
//   });
// };
