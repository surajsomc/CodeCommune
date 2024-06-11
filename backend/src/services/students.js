
async function getStudents() {
    const data = [
        {username: 'jeff', email: 'jeff@newgrad.com', password: "password1"},
        {username: 'mike', email: 'mike@newgrad.com', password: "password2"},
        {username: 'sam', email: 'sam@newgrad.com', password: "password3"}
    ]
    return data
}

export default getStudents;