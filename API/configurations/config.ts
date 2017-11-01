
const CONFIG = {
    'dev':
    {
        'port': 3000,
        'account': {
            'userName': '',
            'domain': 'amr',
            'password': ''
        },
        'someServer': {
            'host': 'https://httpbin.org',
            'port': 443
        },
        "creds": {
            "clientID": "9e645106-ee5c-4a50-9538-7ec7a2464d7a",
            "returnURL": "http://localhost:3000/token",
            "clientSecret": "xdwCY213uwlgJQLFK19\\&<:"
        }
    },
    'preprod':
    {
        'port': 443,
        'account': {
            'userName': '',
            'domain': 'amr',
            'password': ''
        },
        'someServer': {
            'host': 'https://httpbin.org',
            'port': 443
        },
        "creds": {
            "clientID": "9e645106-ee5c-4a50-9538-7ec7a2464d7a",
            "returnURL": "http://localhost:3000/token",
            "clientSecret": "xdwCY213uwlgJQLFK19\\&<:"
        }
    },
    'prod':
    {
        'port': 443,
        'account': {
            'userName': '',
            'domain': 'amr',
            'password': ''
        },
        'someServer': {
            'host': 'https://httpbin.org',
            'port': 443
        },
        "creds": {
            "clientID": "9e645106-ee5c-4a50-9538-7ec7a2464d7a",
            "returnURL": "http://localhost:3000/token",
            "clientSecret": "xdwCY213uwlgJQLFK19\\&<:"
        }
    }

};

export function getConfiguration() {
    let environment = process.env.NODE_ENV;
    switch (environment) {
        case 'dev':
            return CONFIG.dev;
        case 'preprod':
            return CONFIG.preprod;
        case 'prod':
            return CONFIG.prod;
        default:
            return CONFIG.dev;
    }
}
