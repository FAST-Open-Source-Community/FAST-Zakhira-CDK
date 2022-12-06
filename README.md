# Welcome to Fast Zakhira CDK TypeScript project


The `cdk.json` file tells the CDK Toolkit how to execute your app.

## How do I contribute?

1. Read through our [feature docs](https://second-baseball-29c.notion.site/FAST-Zakhira-01ca6ec3965e411ca709ba685fd12cbe)
2. Create a pull request from `origin/main`


## How to use this project

### 1- Add CDK Stack

1. Create a clone of `lib/fast-zakhira-cdk-stack.ts`
2. Initialize your stack in `bin/fast-zakhira-cdk.ts`
3. Append stack name to the field `cdk_stack` in the `.github/workflows/deploy-main.yml`

### 2- How GitHub Workflows work?

`cdk-diff.yml` is triggered on every pull request to compare cdk difference with main branch.
`deploy-main` is triggered when a pull request is merged into origin/main and executes cdk-deploy

## Contact US
Email us with subject 'Fast Zakhira Feedback' on any of the following emails

- jazibulhassan95@gmail.com