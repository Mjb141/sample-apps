Simple Dockerfile to test Dagger building Dockerfiles

To build:

`dagger call -m "github.com/mjb141/daggerverse/build@main" with-build-arg --key VERSION --value 3.17 build --dir .`

To test:

`dagger call -m "github.com/mjb141/daggerverse/build@main" with-build-arg --key VERSION --value 3.19 build --dir . with-exec --args "cat,/etc/os-release" stdout`
