const getNavigation = (loggedIn, user) => {

    const authlinks = [
        {
            title: "Publications",
            link: "/"
        },
        {
            title: "Share your thoughts",
            link: "/share"
        },
        {
            title: "Profile",
            link: `/profile/${user && user.id}`
        },
    ]

    const guestLinks = [
        {
            title: "Publications",
            link: "/"
        },
        {
            title: "Register",
            link: "/register"
        },
        {
            title: "Login",
            link: "/login"
        },
    ]
    return loggedIn ? authlinks : guestLinks;
}

export default getNavigation;
