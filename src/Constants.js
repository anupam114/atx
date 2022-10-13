//Live = 'http://atxfloods-test.com/'
//Local = 'http://192.168.0.110/'
const prefix = "http://atxfloods-test.com/";

const Constants = {
    baseUrl: (path) => {
        return prefix + path
    },
    crossings: prefix+'api/crossings',
    cameras: prefix+'api/cameras',
    closures: prefix+'api/closures',
    contactAdd: prefix + 'api/contacts/create'
}

export default Constants;