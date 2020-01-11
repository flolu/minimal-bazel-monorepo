package(default_visibility = ["//visibility:public"])

load("@npm_bazel_typescript//:index.bzl", "ts_library")

ts_library(
    name = "lib",
    srcs = glob(
        include = ["**/*.ts"],
        exclude = ["**/*.spec.ts"]
    ),
    module_name = "@lbm/hello",
)

load("@npm_bazel_typescript//:index.bzl", "ts_library")
ts_library(
    name = "test_lib",
    srcs = glob(include = ["**/*.spec.ts"]),
    tsconfig = "//:tsconfig.jest.json",
    deps = [
        ":lib",
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
        "@npm//jest",
    ],
)
