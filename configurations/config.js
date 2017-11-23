"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CONFIG = {
    'dev': {
        'port': 443,
        'token': 'd3GtAH7sZUE:APA91bFkLPXjhP9UZBPJgz3AyTnmtbilhLio_E_JZjVjwyTIZyChzQyTvpTtEovR7AsvCgqN7I7cp75NGW6Nzm85Nipx9ebUkSkG8DxOggwLOlSNBjlw-cOqlUaSMIgbTV9p69o6cnrz',
        'account': {
            'userName': '',
            'domain': 'amr',
            'password': '',
            'token': 'AAAAWEWCiAY:APA91bE7Bomi89TySQqkIPEppHKDl4Fs0eld99GOwE6QCaPjjlanjbsFGl5LvWxsUIbtUqcLpt3svJMoshIrkPQqb9mT2HEUowOZPpjT3XMx2MgY5fpnP7vSnBN9j1gEH7fujRlXBUnT'
        },
        'notificationServer': {
            'host': 'https://fcm.googleapis.com',
            'port': 443
        },
        'creds': {
            'clientID': '9e645106-ee5c-4a50-9538-7ec7a2464d7a',
            'returnURL': 'http://localhost:3000/token',
            'clientSecret': 'xdwCY213uwlgJQLFK19\\&<:'
        }
    },
    'preprod': {
        'port': 443,
        'token': 'd3GtAH7sZUE:APA91bFkLPXjhP9UZBPJgz3AyTnmtbilhLio_E_JZjVjwyTIZyChzQyTvpTtEovR7AsvCgqN7I7cp75NGW6Nzm85Nipx9ebUkSkG8DxOggwLOlSNBjlw-cOqlUaSMIgbTV9p69o6cnrz',
        'account': {
            'userName': '',
            'domain': 'amr',
            'password': '',
            'token': 'AAAAWEWCiAY:APA91bE7Bomi89TySQqkIPEppHKDl4Fs0eld99GOwE6QCaPjjlanjbsFGl5LvWxsUIbtUqcLpt3svJMoshIrkPQqb9mT2HEUowOZPpjT3XMx2MgY5fpnP7vSnBN9j1gEH7fujRlXBUnT'
        },
        'notificationServer': {
            'host': 'https://fcm.googleapis.com/fcm/send',
            'port': 443
        },
        'creds': {
            'clientID': '9e645106-ee5c-4a50-9538-7ec7a2464d7a',
            'returnURL': 'http://localhost:3000/token',
            'clientSecret': 'xdwCY213uwlgJQLFK19\\&<:'
        }
    },
    'production': {
        'port': 443,
        'token': 'd3GtAH7sZUE:APA91bFkLPXjhP9UZBPJgz3AyTnmtbilhLio_E_JZjVjwyTIZyChzQyTvpTtEovR7AsvCgqN7I7cp75NGW6Nzm85Nipx9ebUkSkG8DxOggwLOlSNBjlw-cOqlUaSMIgbTV9p69o6cnrz',
        'account': {
            'userName': '',
            'domain': 'amr',
            'password': '',
            'token': 'AAAAWEWCiAY:APA91bE7Bomi89TySQqkIPEppHKDl4Fs0eld99GOwE6QCaPjjlanjbsFGl5LvWxsUIbtUqcLpt3svJMoshIrkPQqb9mT2HEUowOZPpjT3XMx2MgY5fpnP7vSnBN9j1gEH7fujRlXBUnT'
        },
        'notificationServer': {
            'host': 'https://fcm.googleapis.com/fcm/send',
            'port': 443
        },
        'creds': {
            'clientID': '9e645106-ee5c-4a50-9538-7ec7a2464d7a',
            'returnURL': 'http://localhost:3000/token',
            'clientSecret': 'xdwCY213uwlgJQLFK19\\&<:'
        }
    }
};
function getConfiguration() {
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
exports.getConfiguration = getConfiguration;
//# sourceMappingURL=config.js.map
