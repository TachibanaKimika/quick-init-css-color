import copy from 'copy-to-clipboard';
import React from 'react';
export default function(string) {
  try {
    copy(string)
    React.$message('复制成功', 3000)
  } catch(e) {
    React.$message('复制失败', 3000)
  }
}