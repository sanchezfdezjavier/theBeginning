export const getNow = () => {
    const now = new Date().now()
    return now
}

export const getCurrentTime = () => {
    const currentTime = new Date().toLocaleTimeString()
    return currentTime
}