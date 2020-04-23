import wp from 'wpapi'

class Config {
    get postURLPrefix() {
        return 'news'
    }
    get pageURLPrefix() {
        return ''
    }
    get wordpressURL() {
        return'https://b5d85ac952f05c2bcb7e0b42979eff431beac2f1.hl-a.getshifter.co/wp-json'
    }
    get wpClient() {
        return new wp({
            endpoint: this.wordpressURL
        })
    }
}

export default new Config()