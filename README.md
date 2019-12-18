```
bazel run //services/server
bazel build //services/server
```

# Todo

- Push Docker image to container registry
- Deploy new image to Kubernetes
- Run tests before applying changes
- Deploy for all services
- Deploy automatically when pushing to repository
- Implement an Angular app

# Done

- Build Typescript libraries
- Link different packages into Typescript library
- Build Node.Js image

# Pushing Images to GCR

Install `gcloud` https://www.addictivetips.com/ubuntu-linux-tips/install-google-cloud-sdk-on-linux/ and authenticate

```
bazel run //services/server:push_server
```
