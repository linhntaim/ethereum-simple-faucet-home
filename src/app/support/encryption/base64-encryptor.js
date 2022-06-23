import {Encryptor} from './encryptor'

export class Base64Encryptor extends Encryptor
{
    encrypt(data) {
        return btoa(data)
    }

    decrypt(data) {
        return atob(data)
    }
}
