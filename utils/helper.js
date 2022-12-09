export const encodeText = (text) => {
    return encodeURIComponent(text)
        .replace('!', '%21')
        .replace('\'', '%27')
        .replace('(', '%28')
        .replace(')', '%29')
        .replace('*', '%2A')
        .replace('%20', '+');
}