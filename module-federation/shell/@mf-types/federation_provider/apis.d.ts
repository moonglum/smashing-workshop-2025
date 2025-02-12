
    export type RemoteKeys = 'federation_provider/Button';
    type PackageType<T> = T extends 'federation_provider/Button' ? typeof import('federation_provider/Button') :any;