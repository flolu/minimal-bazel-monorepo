package(default_visibility = ["//visibility:public"])

load("@io_bazel_rules_docker//nodejs:image.bzl", "nodejs_image")
load("@npm_bazel_typescript//:index.bzl", "ts_library")

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
    ],
)

nodejs_image(
    name = "server",
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