import { createClient } from "altogic";

// This `envUrl` and `clientKey` is sample you need to create your own.
const envUrl = "https://1vd3-snum.c1-india.altogic.com";
export const clientKey = "278749ce2a4c472d8dcf3c0c0047a2c2";

const altogic = createClient(envUrl, clientKey, {
  // signInRedirect: "/sign-in",
});

export const { db, auth, storage, endpoint, queue, realtime, cache } = altogic;
