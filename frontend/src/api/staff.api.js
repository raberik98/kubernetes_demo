export async function getStaff() {
    try {
        const data = await fetch("/api/staff").then(resp => resp.json())
        return data
    } catch (error) {
        alert(error)
        return null
    }
}

export async function postStaff(inputData) {
    try {
        const data = await fetch("/api/staff", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputData)
        }).then(resp => resp.json())
        return data
    } catch (error) {
        alert(error)
        return null
    }
}