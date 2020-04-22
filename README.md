# Ionic React with WordPress example


## Getting started

```bash
$ git clone
$ cd ionic-react-wordpress 
$ npm install
$ npm start
```

## Use own WordPress

General configuration file is `src/config.ts`.
You can update properties for your WordPress site.

```typescript
class Config {
    get postURLPrefix() {
        return 'news'
    }
    get pageURLPrefix() {
        return ''
    }
    get wordpressURL() {
        return'https://central.wordcamp.org/wp-json'
    }
    get wpClient() {
        return new wp({
            endpoint: this.wordpressURL
        })
    }
}
```

## Production build

```bash
$ npm run build
```