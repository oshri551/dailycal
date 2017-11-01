
const CONFIG = {
    'dev':
    {
        'port': 443,
         'account' : {
             'userName' : '',
             'domain' : 'amr',
             'password' : ''
         },
         'someServer' : {
             'host' : 'https://httpbin.org',
             'port' : 443
         }
    },
   'preprod':
    {
        'port': 443,
         'account' : {
             'userName' : '',
             'domain' : 'amr',
             'password' : ''
         },
         'someServer' : {
             'host' : 'https://httpbin.org',
             'port' : 443
         }
    },
   'prod':
    {
        'port': 443,
         'account' : {
             'userName' : '',
             'domain' : 'amr',
             'password' : ''
         },
         'someServer' : {
             'host' : 'https://httpbin.org',
             'port' : 443
         }
    }

};

export  function getConfiguration() {
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
