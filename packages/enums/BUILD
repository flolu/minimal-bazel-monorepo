package(default_visibility = ["//visibility:public"])

load("@io_bazel_rules_docker//nodejs:image.bzl", "nodejs_image")
load("@npm_bazel_typescript//:index.bzl", "ts_library")

ts_library(
    name = "enums",
    srcs = glob(["**/*.ts"]),
    module_name = "@lbm/enums",
)