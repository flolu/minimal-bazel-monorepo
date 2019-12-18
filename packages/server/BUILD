load("@io_bazel_rules_docker//nodejs:image.bzl", "nodejs_image")
load("@npm_bazel_typescript//:index.bzl", "ts_library")

ts_library(
    name = "lib",
    srcs = glob(
        include = [ "**/*.ts" ],
        exclude = [ "src/index.ts" ],
    ),
    deps = ["//packages/enums:enums"]
)

ts_library(
    name = "main",
    srcs = [ "src/index.ts" ],
    deps = ["//packages/enums:enums", ":lib"],
)

filegroup(
    name = "libfiles",
    srcs = ["lib"],
    output_group = "es5_sources",
)

filegroup(
    name = "mainfile",
    srcs = ["main"],
    output_group = "es5_sources",
)

nodejs_image(
    name = "server",
    data = [
        ":libfiles",
        ":mainfile",
    ],
    entry_point = ":mainfile",
)
