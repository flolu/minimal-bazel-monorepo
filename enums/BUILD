load("@io_bazel_rules_docker//nodejs:image.bzl", "nodejs_image")
load("@npm_bazel_typescript//:index.bzl", "ts_library")

ts_library(
    name = "enums",
    srcs = ["src/index.ts"],
    module_name = "@lbm/enums",
    visibility = ["@example//server:__pkg__"],
)

filegroup(
    name = "enums.js",
    srcs = ["enums"],
    output_group = "es5_sources",
)

nodejs_image(
    name = "app",
    entry_point = "enums.js",
)