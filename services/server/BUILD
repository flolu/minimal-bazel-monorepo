package(default_visibility = ["//visibility:public"])

load("@io_bazel_rules_docker//nodejs:image.bzl", "nodejs_image")
load("@npm_bazel_typescript//:index.bzl", "ts_library")

ts_library(
    name = "lib",
    srcs = glob(["**/*.ts"]),
    deps = [
        "@npm//faker",
        "@npm//@types/faker",
        "//packages/enums",
    ],
)

nodejs_image(
    name = "server",
    data = [":lib"],
    entry_point = ":index.ts",
)
