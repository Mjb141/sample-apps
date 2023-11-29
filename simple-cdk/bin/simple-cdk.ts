#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { SimpleCdkStack } from "../lib/simple-cdk-stack";

const miscValue = process.env.MISC_VALUE || "";

const app = new cdk.App();
const simpleStack = new SimpleCdkStack(app, "SimpleCdkStack", {
  env: {
    account: process.env.AWS_ACCOUNT_ID,
    region: process.env.AWS_REGION,
  },
});

cdk.Tags.of(simpleStack).add("Tag", miscValue);
