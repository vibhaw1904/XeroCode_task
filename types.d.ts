import 'appwrite';

declare module 'appwrite' {
  export interface OAuthProviderMap {
    google: 'google';
  }
  type OAuthProvider = keyof OAuthProviderMap;

}