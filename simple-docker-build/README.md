Simple Dockerfile to test Dagger building Dockerfiles

To run:

`dagger call -m "github.com/mjb141/daggerverse/build@main" with-build-arg --key VERSION --value 3.17 build --dir . stdout`
