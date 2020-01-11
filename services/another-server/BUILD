package(default_visibility = ["//visibility:public"])

load("@npm_bazel_typescript//:index.bzl", "ts_library")
ts_library(
    name = "lib",
    srcs = glob(
        include = ["**/*.ts"],
        exclude = ["**/*.spec.ts"]
    ),
    deps = [
        "//packages/enums:lib",
        "@npm//express",
        "@npm//@types/express",
        "@npm//cors",
    ],
)

load("@build_bazel_rules_nodejs//:index.bzl", "nodejs_binary")
nodejs_binary(
    name = "dev_server",
    data = [":lib"],
    entry_point = ":index.ts",
)

load("@io_bazel_rules_docker//nodejs:image.bzl", "nodejs_image")
nodejs_image(
    name = "server",
    data = [":lib"],
    entry_point = ":index.ts",
)


load("@npm_bazel_typescript//:index.bzl", "ts_library")
ts_library(
    name = "test_lib",
    srcs = glob(include = ["**/*.spec.ts"]),
    tsconfig = "//:tsconfig.jest.json",
    deps = [
        ":lib",
        "//packages/enums:lib",
        "@npm//express",
        "@npm//@types/express",
        "@npm//cors",
        "@npm//@types/jest",
    ],
)

filegroup(
    name = "test_lib.js",
    srcs = [":test_lib"],
    output_group = "es5_sources",
)

load("@lbm//:jest.bzl", "jest_test")
jest_test(
    name = "test",
    srcs = [
        ":test_lib.js",
    ],
    jest_config = "@lbm//:jest.config.js",
    deps = [
        ":lib",
        "//packages/enums:lib",
        "//packages/hello:lib",
        "@npm//express",
        "@npm//jest",
    ],
)
