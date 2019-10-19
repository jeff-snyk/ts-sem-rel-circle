#!/usr/bin/env node

import { getMessage } from "./inner-lib";
import { callGetMessage } from "./outer-lib";

const msgFromInnerLib: string = getMessage();
console.log(`msgFromInnerLib: ${msgFromInnerLib}`);

const msgFromOuterLib = callGetMessage();
console.log(`msgFromOuterLib: ${msgFromOuterLib}`);

console.log("test stuff");
