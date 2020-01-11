```
bazel build //services/server/src:server
bazel run //services/server/src:server
ibazel run //services/server/src:dev_server

bazel run //services/server/src:push_server
```

Stop node.js process

```
docker ps -a
docker kill <id>
```

```
docker stop $(docker ps -a -q)
docker system prune --volumes
```

# Todo

- Deploy new image to Kubernetes
- Run tests before applying changes
- Deploy for all services
- Deploy automatically when committing to repository
- Implement an Angular app
- Bazel watcher for local development (watch for code changes, etc.)
- These rules are kinda boiler paltey so you could wrap them up into gen rules. (refers to tests)

# Done

- Build Typescript libraries
- Link different packages into Typescript library
- Build Node.Js image
- Push Docker image to container registry

# Pushing Images to GCR

Install `gcloud` https://www.addictivetips.com/ubuntu-linux-tips/install-google-cloud-sdk-on-linux/ and authenticate

```
bazel run //services/server/src:push_server
```

# Deploying to Kubernetes (not working yet)

```
bazel run //services/server/src:k8s_deploy
```
