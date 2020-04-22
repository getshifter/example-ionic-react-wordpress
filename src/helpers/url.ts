export const createRelativeLink = (...paths: string[]): string => {
    return ['/', ...paths].join('/').replace(/\/\//, '/').replace(/\/\//, '/')
}