export interface xcxutilsBase {
    md5(text: string): string
    sha1(text: string): string
    verify: {
        checkMail(mail: string): boolean
        checkPassword(pwd: string): boolean
        checkZh(text: string): boolean
        checkPhone(phone: string): boolean
    }
    base: {
        deepclone(object: any): boolean
        noop(): null
        hasOwn(o: any, t: string): boolean
        isUndef(o: any): boolean
        isDef(o: any): boolean
        isStr(o: any): boolean
        isNumber(o: any): boolean
        isArray(o: any): boolean
        isObj(o: any): boolean
        isFunc(o: any): boolean
        toNumber(v: any): any
        assign(o: Object, ...src: [Object]): any
    }
    wx: {
        login<T>(): Promise<T>
        request<T>(url: string, data: string | object | ArrayBuffer, method: string, dataType: string, responseType: string, header: Object, abortTime: number): Promise<T>
        hotupdate(): null
        getUserInfo<T>(): Promise<T>
        inputHandler(o: Object, s: string): undefined
    }
}

declare const xcxutils: xcxutilsBase;
export default xcxutils;
