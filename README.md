# Ionic React with WordPress example

## Just try the demo site

You can deploy the demo site to the following services.

[![amplifybutton](https://oneclick.amplifyapp.com/button.svg)](https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/getshifter/ionic-react-wordpress)


[![netlifybutton](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/getshifter/ionic-react-wordpress)

## Getting started

```bash
$ git clone git@github.com:getshifter/ionic-react-wordpress.git
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

## Desktop application

We can run it as a Desktop application


```bash
$ yarn run build && npx cap copy
$ npx cap open electron
```


### Build for Desktop

```bash
$ yarn run build && npx cap copy
$ cd electron
$ npx electron-packager . sample --platform=darwin --arch=x64
$ open ./sample-darwin-x64
```
