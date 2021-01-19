linux + docker +k8s
- 文件系统readme.md 输出到命令行怎么做？
    cat -n(输出并且带有行号)
- git bash 是一个小型的linux
- seq 序列
- 基于996文件 找到以996开头的这行内容...
    正则 + linux grep 
    - | 管道 
     cat 966 | grep -E ^966
     cat 966 | grep -E 996$
     cat 996 | grep -E [0-9]
     cat 996 | grep -E ^[\^0-9]
     cat 996 | grep -E -v ^[0-9]
    cat 996 | grep -E boss\|icu   "\"是转义的意思，其中|不是以管道的意思而是以或者的意思。

    - 匹配到icu  icuuuuu
        cat 966 | grep -E icu+

- cat 996 | grep -E ^[\^0-9]
- \^ [^0-9]不是以什么开始，而是否定
    不要匹配，^[\^0-9]不是以数字开头的行。