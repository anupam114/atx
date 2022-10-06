const prefix = 'http://34.207.149.114/'

const Constants = {
    baseUrl: (path) => {
        return prefix + path
    },
    crossings: prefix+'api/crossings',
    cameras: prefix+'api/cameras',
    closures: prefix+'api/closures',
}

export default Constants;