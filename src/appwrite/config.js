import { Client, Storage, Databases } from "appwrite";

const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1") // ✅ Your Appwrite endpoint
  .setProject("684edc920007eb5c4850"); // ✅ Your project ID

const storage = new Storage(client);
const databases = new Databases(client); // ✅ This was missing

export { client, storage, databases }; // ✅ Export databases
