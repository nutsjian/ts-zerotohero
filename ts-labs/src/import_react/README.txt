1. 对于 import 导入默认导出的模块，TS 在读这个模块的时候会去读取上面的 default 属性
比如：import React from "react";

2. 对于 import 导入非默认导出的变量，TS 会去读这个模块上面对应的属性
比如：import { Component } from "react";

3. 对于 import *，TS 会直接读该模块
比如：import * as React from "react";