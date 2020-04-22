import wp from 'wpapi'

class Config {
    get wordpressURL() {
        return'https://central.wordcamp.org/wp-json'
    }
    get wpClient() {
        return new wp({
            endpoint: this.wordpressURL
        })
    }
}

export default new Config()