package(default_visibility = ["//visibility:public"])

# TODO run jest tests and stop build if test not passes
# TODO also run tests from dependent packages
load("@lbm//:jest.bzl", "jest_test")
jest_test(
    name = "test",
    srcs = glob(
        include = ["**/*.ts"],
    ),
    jest_config = "@lbm//:jest.config.js",
    deps = [
        "//packages/enums/src:lib",
        "//packages/hello/src:lib",
        "@npm//faker",
        "@npm//@types/faker",
        "@npm//express",
        "@npm//@types/express",
        "@npm//jest",
        "@npm//ts-jest",
        "@npm//@types/jest",
    ],
)

load("@npm_bazel_typescript//:index.bzl", "ts_library")
ts_library(
    name = "lib",
    srcs = glob(
        include = ["**/*.ts"],
        exclude = ["**/*.spec.ts"]
    ),
    deps = [
        "//packages/enums/src:lib",
        "//packages/hello/src:lib",
        "@npm//faker",
        "@npm//@types/faker",
        "@npm//express",
        "@npm//@types/express",
        "@npm//cors",
    ],
)

load("@io_bazel_rules_docker//nodejs:image.bzl", "nodejs_image")
nodejs_image(
    name = "server",
    data = [":lib"],
    entry_point = ":index.ts",
)

load("@build_bazel_rules_nodejs//:defs.bzl", "nodejs_binary")
nodejs_binary(
    name = "dev_server",
    data = [":lib"],
    entry_point = ":index.ts",
)

load("@io_bazel_rules_docker//container:container.bzl", "container_push")
container_push(
   name = "push_server",
   image = ":server",
   format = "Docker",
   registry = "gcr.io",
   repository = "learning-bazel-monorepo/server",
   tag = "dev",
)

load("@io_bazel_rules_k8s//k8s:object.bzl", "k8s_object")
k8s_object(
  name = "k8s_deploy",
  kind = "deployment",
  namespace = "default",
  template = ":server.yaml",
  images = {
    "gcr.io/learning-bazel-monorepo/deploy_server:do_not_delete": ":server"
  },
)