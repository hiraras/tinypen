import blogLogo from "@/assets/images/logo/blog.png";
import bybLogo from "@/assets/images/logo/byb.png";
import storeLogo from "@/assets/images/logo/store.png";
import componentLogo from "@/assets/images/logo/component.png";
import chartLogo from "@/assets/images/logo/chart.png";
import iconLogo from "@/assets/images/logo/icon.png";
import utilLogo from "@/assets/images/logo/util.png";
import githubLogo from "@/assets/images/logo/github.png";
import folderLogo from "@/assets/images/logo/folder.png";

export type Soft = {
  title: string;
  src: string;
  path?: string;
  params?: Record<string, any>;
  children?: Soft[];
  type: "soft" | "folder";
};

const SOFTS: Soft[] = [
  {
    title: "博客",
    src: blogLogo,
    path: "http://www.tinypen.cn/blog",
    type: "soft",
  },
  {
    title: "github",
    src: githubLogo,
    path: "https://github.com/hiraras",
    type: "soft",
  },
  {
    title: "npm私人服务器",
    src: storeLogo,
    path: "http://www.tinypen.cn:4873",
    type: "soft",
  },
  {
    title: "个人作品",
    src: folderLogo,
    type: "folder",
    children: [
      {
        title: "组件库",
        src: componentLogo,
        path: "http://www.tinypen.cn/ljmp-antd",
        type: "soft",
      },
      {
        title: "图表库",
        src: chartLogo,
        path: "http://www.tinypen.cn/ljmp-chart",
        type: "soft",
      },
      {
        title: "图标库",
        src: iconLogo,
        path: "http://www.tinypen.cn/ljmp-icons",
        type: "soft",
      },
      {
        title: "工具库",
        src: utilLogo,
        path: "http://www.tinypen.cn/ljmp-utils",
        type: "soft",
      },
      {
        title: "雅比亚头盔",
        src: bybLogo,
        path: "http://www.bybhelmet.com",
        type: "soft",
      },
    ],
  },
];

export { SOFTS };
