module.exports = {
    
    devServer : {
        proxy : {
            '/api' : {
                target:'http://39.97.33.178',
                changeOrigin:true
            },
            '/api2' : {
                target:'http://localhost:3000',
                changeOrigin:true
            }
        }
    }
}