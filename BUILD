package(default_visibility = ["//visibility:public"])

exports_files([
    "tsconfig.json",
    "jest.config.js"
])

load("@npm_bazel_typescript//:index.bzl", "ts_config")
ts_config(
    name = "tsconfig.jest.json",
    src = "tsconfig.test.json",
    deps = [
        ":tsconfig.json",
    ],
)

load("@com_github_atlassian_bazel_tools//multirun:def.bzl", "multirun", "command")
multirun(
    name = "dev",
    commands = [
        "//services/server:dev_server",
        "//services/another-server:dev_server",
    ],
    parallel = True,
)