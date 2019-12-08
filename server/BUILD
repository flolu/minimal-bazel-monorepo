load("@io_bazel_rules_docker//nodejs:image.bzl", "nodejs_image")
load("@npm_bazel_typescript//:index.bzl", "ts_library")

ts_library(
    name = "compile",
    srcs = ["src/index.ts"],
)

filegroup(
    name = "server.js",
    srcs = ["compile"],
    output_group = "es5_sources",
)

nodejs_image(
    name = "app",
    entry_point = "server.js",
)