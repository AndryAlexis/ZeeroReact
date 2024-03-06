// Function to save data in localStorage with expiry date
export const setWithExpiry = (key, value, expiryDays) => {
    const now = new Date()
    const expiryDate = new Date(now.getTime() + expiryDays * 24 * 60 * 60 * 1000)
    const item = {
        value: value,
        expiry: expiryDate.getTime()
    }
    localStorage.setItem(key, JSON.stringify(item))
}

// Function to retrieve data from localStorage and check expiry date
export const getWithExpiry = key => {
    const itemStr = localStorage.getItem(key)

    // If the item doesn't exist, return null
    if (!itemStr) return null

    const item = JSON.parse(itemStr)
    const now = new Date().getTime()
    
    if (item?.expiry === undefined) return null

    // Check if the expiry date has passed
    if (now > item.expiry) {
        // If it has expired, remove the item from localStorage
        localStorage.removeItem(key)
        return null
    }
    return item.value
}
