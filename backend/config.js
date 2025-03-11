export function loadConfig() {
    
    return {
        PORT: process.env.PORT || 8080,
        DB_CONN: process.env.DB_CONN || "mongodb://admin:password@localhost:27017/staff?authSource=admin"
    }
}