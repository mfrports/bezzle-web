/* eslint-disable react-refresh/only-export-components -- the admin area's page and the way the prerender hands it over. */
import { lazy } from "react";

/*
 * The admin area as App shows it: its script fetched only by whoever opens it, as the docs' is. The prerender hands
 * the component over at once (src/entry-server.jsx), so the page is written as its first view, which the browser
 * then takes up as soon as its script has come.
 */
const Lazy = lazy(() => import("@/admin/Admin"));
let given = null;
export const provideAdmin = (Admin) => { given = Admin; };
export default function AdminPage() {
    const Admin = given ?? Lazy;
    return <Admin />;
}
