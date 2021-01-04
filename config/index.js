var config

if(process.env.NODE_ENV === 'production'){
    config = reqire('./prod')
} else {
    config = reqire('./dev')
}

module.exports = config