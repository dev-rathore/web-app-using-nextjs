// "use client";

// import axios from "axios";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";

// export default function VerificationPage() {
//   const [token, setToken] = useState("");
//   const [verified, setVerified] = useState(false);
//   const [error, setError] = useState(false);

//   const verify = async () => {
//     try {
//       await axios.post('/api/users/verification', { token })
//       setVerified(true);
//     } catch (error: any) {
//       setError(true);
//     }
//   }

//   useEffect(() => {
//     const urlToken = window.location.search.split("=")[1];
//     setToken(urlToken || "");
//   }, []);

//   useEffect(() => {
//     if (token.length > 0) {
//       verify();
//     }
//   }, [token]);

//   return (
//     <div>
//       <h1>Verify Email</h1>
//       <h2>{token ? `${token}` : "no token"}</h2>

//       {verified && (
//         <div>
//           <h2>Verified</h2>
//           <Link href="/login">
//             Login
//           </Link>
//         </div>
//       )}
//       {error && (
//         <div>
//           <h2>Error</h2>
//         </div>
//       )}
//     </div>
//   );
// };
