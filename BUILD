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
    name = "run_all_parallel",
    commands = [
        "//services/server/src:dev_server",
        "//services/another-server/src:dev_server",
    ],
    parallel = True,
)