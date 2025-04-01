import { redirect } from "react-router-dom"

export async function requireAuth(request) {
    const isLoggedIn = localStorage.getItem("loggedin")
    if (!isLoggedIn) {
        const redirectUrl = new URL(request.url).pathname 
        throw redirect(`/login?message=You must log in first.&redirectTo=${redirectUrl}`)
    }
}