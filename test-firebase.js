require("dotenv").config({path: ".env.local"});
try {
  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
  console.log(JSON.stringify(serviceAccount.private_key));
  console.log(serviceAccount.private_key);
} catch (error) {
  console.error(error);
}
